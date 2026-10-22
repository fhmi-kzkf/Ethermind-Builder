import React, { useId, useState } from 'react';
import { Dialog, Notice } from '../ui';

interface Props {
  open: boolean;
  busy: boolean;
  error: string | null;
  /** Text to start with, for a change the assistant already worded. */
  initialText?: string;
  onClose: () => void;
  onSubmit: (request: string) => Promise<boolean>;
}

/** Mounted only while the dialog is open, so every opening starts from `initialText`. */
const RevisionForm: React.FC<Omit<Props, 'open'>> = ({ busy, error, initialText = '', onClose, onSubmit }) => {
  const [text, setText] = useState(initialText);
  const fieldId = useId();

  return (
    <form
      className="stack"
      onSubmit={async (event) => {
        event.preventDefault();
        const request = text.trim();
        if (!request) return;
        if (await onSubmit(request)) onClose();
      }}
    >
      <div className="field">
        <label htmlFor={fieldId}>Perubahan yang diinginkan</label>
        <textarea id={fieldId} data-autofocus className="textarea" rows={5} value={text} onChange={(event) => setText(event.target.value)} placeholder="Contoh: tambahkan laporan penjualan per bulan di dasbor." />
      </div>
      {error && <Notice tone="bad">{error}</Notice>}
      <div className="row" style={{ justifyContent: 'flex-end' }}>
        <button type="button" className="btn btn--secondary" onClick={onClose}>
          Batal
        </button>
        <button type="submit" className="btn" disabled={busy || !text.trim()}>
          {busy ? 'Memulai revisi...' : 'Mulai revisi'}
        </button>
      </div>
    </form>
  );
};

export const RevisionDialog: React.FC<Props> = ({ open, onClose, ...form }) => (
  <Dialog open={open} onClose={onClose} title="Minta revisi" description="Tulis perubahan yang Anda inginkan dengan kata-kata sendiri. Hanya bagian yang terpengaruh yang dikerjakan ulang.">
    <RevisionForm {...form} onClose={onClose} />
  </Dialog>
);
