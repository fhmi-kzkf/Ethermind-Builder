import React, { useCallback, useEffect, useRef, useState } from 'react';
import QRCode from 'qrcode';
import api, { type PaymentState } from '../../services/api';
import { Dialog, Notice, Spinner } from '../ui';

interface Props {
  open: boolean;
  projectId: string;
  /** What the builder last knew. The dialog asks the server again and keeps itself current while it is open. */
  payment: PaymentState | null;
  onClose: () => void;
  /** Called whenever the state changed, so the header button follows (price, then "Unduh"). */
  onChanged: () => void;
  onDownload: () => void;
}

const POLL_MS = 6000;
const rupiah = (n: number) => `Rp ${new Intl.NumberFormat('id-ID').format(n)}`;
const clock = new Intl.DateTimeFormat('id-ID', { hour: '2-digit', minute: '2-digit' });

/** Mounted only while the dialog is open, so it opens a fresh order each time and stops polling when closed. */
const PaymentFlow: React.FC<Omit<Props, 'open'>> = ({ projectId, payment, onClose, onChanged, onDownload }) => {
  const [state, setState] = useState<PaymentState | null>(payment);
  const [qrImage, setQrImage] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const started = useRef(false);

  const apply = useCallback(
    (next: PaymentState) => {
      setState(next);
      onChanged();
    },
    [onChanged],
  );

  const open = useCallback(async () => {
    setBusy(true);
    setError(null);
    try {
      apply(await api.payments.createOrder(projectId));
    } catch (err: any) {
      setError(err.message || 'Pesanan pembayaran belum bisa dibuat.');
    } finally {
      setBusy(false);
    }
  }, [projectId, apply]);

  // On opening: ask the server, and take the order that is still alive or make a new one.
  useEffect(() => {
    if (started.current) return;
    started.current = true;
    (async () => {
      try {
        const fresh = await api.payments.get(projectId);
        setState(fresh);
        const usable = fresh.order && (fresh.order.status === 'pending' || fresh.order.status === 'reported');
        if (fresh.required && !usable) await open();
      } catch (err: any) {
        setError(err.message || 'Status pembayaran belum bisa dimuat.');
      }
    })();
  }, [projectId, open]);

  const order = state?.order ?? null;
  const waiting = order && (order.status === 'pending' || order.status === 'reported');

  // While an order waits, the server is asked how it stands: the operator may confirm at any time.
  useEffect(() => {
    if (!waiting) return;
    const timer = window.setInterval(() => {
      if (document.hidden) return;
      api.payments.get(projectId).then(apply).catch(() => undefined);
    }, POLL_MS);
    return () => window.clearInterval(timer);
  }, [waiting, projectId, apply]);

  useEffect(() => {
    if (!order || order.status !== 'pending') return;
    let live = true;
    QRCode.toDataURL(order.qris, { errorCorrectionLevel: 'M', margin: 3, width: 288, color: { dark: '#000000', light: '#ffffff' } })
      .then((url) => live && setQrImage(url))
      .catch(() => live && setError('Kode QR belum bisa digambar. Muat ulang halaman.'));
    return () => {
      live = false;
    };
  }, [order?.qris, order?.status]); // eslint-disable-line react-hooks/exhaustive-deps

  const report = async () => {
    if (!order) return;
    setBusy(true);
    setError(null);
    try {
      apply(await api.payments.report(projectId, order.id));
    } catch (err: any) {
      setError(err.message || 'Laporan belum terkirim.');
    } finally {
      setBusy(false);
    }
  };

  if (!state) {
    return error ? (
      <div className="stack">
        <Notice tone="bad">{error}</Notice>
        <div className="row" style={{ justifyContent: 'flex-end' }}>
          <button type="button" className="btn" onClick={onClose}>
            Tutup
          </button>
        </div>
      </div>
    ) : (
      <Spinner label="Menyiapkan pembayaran" />
    );
  }

  if (state.paid) {
    return (
      <div className="stack">
        <Notice tone="ok" title="Pembayaran dikonfirmasi">
          Kode sumber aplikasi ini sudah terbuka. Anda bisa mengunduhnya kapan saja, termasuk versi hasil revisi.
        </Notice>
        <div className="row" style={{ justifyContent: 'flex-end' }}>
          <button type="button" className="btn btn--secondary" onClick={onClose}>
            Tutup
          </button>
          <button
            type="button"
            className="btn"
            data-autofocus
            onClick={() => {
              onClose();
              onDownload();
            }}
          >
            Unduh kode (.zip)
          </button>
        </div>
      </div>
    );
  }

  if (!state.required) {
    return (
      <div className="stack">
        <Notice tone="ok">Unduhan kode sumber tidak memerlukan pembayaran untuk akun ini.</Notice>
        <div className="row" style={{ justifyContent: 'flex-end' }}>
          <button type="button" className="btn" onClick={() => { onClose(); onDownload(); }}>
            Unduh kode (.zip)
          </button>
        </div>
      </div>
    );
  }

  if (!order || order.status === 'expired' || order.status === 'rejected') {
    return (
      <div className="stack">
        {order?.status === 'rejected' && <Notice tone="bad" title="Pembayaran tidak cocok">Operator belum menemukan dana yang sesuai untuk pesanan itu. Buat pesanan baru dan bayar sesuai nominal yang tertera.</Notice>}
        {order?.status === 'expired' && <Notice tone="warn" title="Pesanan kedaluwarsa">Kode QR ini sudah tidak berlaku. Bila Anda terlanjur membayar, hubungi operator dengan nominal {rupiah(order.total)}. Atau buat pesanan baru.</Notice>}
        {error && <Notice tone="bad">{error}</Notice>}
        {busy && !order && <Spinner label="Membuat pesanan" />}
        <div className="row" style={{ justifyContent: 'flex-end' }}>
          <button type="button" className="btn btn--secondary" onClick={onClose}>
            Tutup
          </button>
          <button type="button" className="btn" data-autofocus onClick={() => void open()} disabled={busy}>
            {busy ? 'Membuat pesanan...' : 'Buat pesanan baru'}
          </button>
        </div>
      </div>
    );
  }

  const reported = order.status === 'reported';

  return (
    <div className="stack">
      <dl className="pay__sum">
        <div>
          <dt>Kode sumber aplikasi</dt>
          <dd className="num">{rupiah(order.amount)}</dd>
        </div>
        <div>
          <dt>Kode unik pembayaran</dt>
          <dd className="num">+ {order.uniqueCode}</dd>
        </div>
        <div className="pay__total">
          <dt>Yang harus Anda bayar</dt>
          <dd className="num">{rupiah(order.total)}</dd>
        </div>
      </dl>

      {!reported && (
        <div className="pay__qr">
          {qrImage ? (
            <img src={qrImage} width={288} height={288} alt={`Kode QRIS senilai ${rupiah(order.total)} untuk ${state.merchant}`} />
          ) : (
            <Spinner label="Menggambar kode QR" />
          )}
          <p className="small muted">
            Penerima: <strong>{state.merchant}</strong>. Berlaku sampai {clock.format(new Date(order.expiresAt))}.
          </p>
        </div>
      )}

      {reported ? (
        <Notice title="Menunggu konfirmasi tim">
          Pembayaran {rupiah(order.total)} dicek manual terhadap mutasi merchant, belum otomatis. Halaman ini memeriksa status tiap beberapa detik. Anda boleh menutupnya dan kembali nanti: tombol unduh terbuka sendiri setelah dikonfirmasi.
        </Notice>
      ) : (
        <ol className="pay__steps">
          <li>Buka aplikasi bank atau dompet digital apa pun yang mendukung QRIS, lalu pilih pindai QR.</li>
          <li>
            Pindai kode di atas. Nominal <strong>{rupiah(order.total)}</strong> sudah terisi. Jangan dibulatkan: kode unik {order.uniqueCode} yang membuat pembayaran Anda bisa dikenali.
          </li>
          <li>Setelah berhasil, tekan "Saya sudah bayar".</li>
        </ol>
      )}

      {error && <Notice tone="bad">{error}</Notice>}
      <div className="row" style={{ justifyContent: 'flex-end' }}>
        <button type="button" className="btn btn--secondary" onClick={onClose}>
          {reported ? 'Tutup, saya kembali nanti' : 'Nanti saja'}
        </button>
        {!reported && (
          <button type="button" className="btn" data-autofocus onClick={() => void report()} disabled={busy}>
            {busy ? 'Mengirim...' : 'Saya sudah bayar'}
          </button>
        )}
      </div>
    </div>
  );
};

export const PaymentDialog: React.FC<Props> = ({ open, ...rest }) => (
  <Dialog open={open} onClose={rest.onClose} title="Bayar untuk membuka kode sumber" description="Pembayaran lewat QRIS. Aplikasi sudah jadi dan bisa dicoba tanpa biaya; pembayaran ini membuka unduhan kode sumbernya.">
    <PaymentFlow {...rest} />
  </Dialog>
);
