import React, { useEffect, useId, useRef } from 'react';
import type { ClarificationQuestion, Message } from '../../types';
import { Notice, Spinner } from '../ui';
import { ACCEPTED_IMAGE_TYPES, MAX_IMAGES } from '../../services/imageUpload';
import { AttachmentTray, MessageImages } from './attachments';
import { ClarificationForm } from './ClarificationForm';
import { formatClock, isPendingMessage, messageMeta } from './shared';
import type { BuilderState } from './useBuilder';

interface Props {
  state: BuilderState;
  projectId: string;
  projectStatus: string;
  onOpenSpec: () => void;
  onApplyRevision: (request: string) => void;
}

function PendingLine({ message, now }: { message: Message; now: number }) {
  const meta = messageMeta(message);
  const seconds = Math.max(0, Math.round((now - new Date(meta?.startedAt || message.createdAt).getTime()) / 1000));
  return (
    <div className="chat__pending">
      <Spinner label={`${message.content} ${seconds} detik`} />
      {seconds > 20 && <p className="small muted">Mesin AI sedang sibuk. Model cadangan dicoba otomatis, Anda tidak perlu mengirim ulang.</p>}
    </div>
  );
}

/** The pictures a user message carries, as the server recorded them. */
function attachmentsOf(message: Message): Array<{ id: string }> {
  const list = messageMeta(message)?.attachments;
  return Array.isArray(list) ? list.filter((a): a is { id: string } => typeof a?.id === 'string') : [];
}

export const ChatPanel: React.FC<Props> = ({ state, projectId, projectStatus, onOpenSpec, onApplyRevision }) => {
  const { messages, inputText, setInputText, sending, chatError, now, selections, serverPending, buildRunning, images, imageEnabled } = state;
  const fileInput = useRef<HTMLInputElement>(null);
  const uploading = images.some((i) => i.status === 'uploading');
  const hasReadyImage = images.some((i) => i.status === 'ready');
  const endRef = useRef<HTMLDivElement>(null);
  const inputId = useId();
  const lastIndex = messages.length - 1;
  const busy = sending || serverPending;
  const locked = buildRunning || projectStatus === 'building';

  useEffect(() => {
    endRef.current?.scrollIntoView({ block: 'end' });
  }, [messages.length, serverPending]);

  const renderExtras = (message: Message, index: number) => {
    const meta = messageMeta(message);
    if (!meta) return null;

    if (meta.type === 'clarifications' && Array.isArray(meta.questions)) {
      return (
        <ClarificationForm
          messageId={message.id}
          questions={meta.questions as ClarificationQuestion[]}
          selections={selections[message.id] ?? {}}
          active={index === lastIndex}
          busy={busy}
          onSelect={(question, option) => state.selectOption(message.id, question, option)}
          onSubmit={() => state.submitAnswers(message.id, meta.questions)}
        />
      );
    }

    if (meta.type === 'spec_preview') {
      return (
        <div className="chat__action">
          <button type="button" className="btn btn--secondary btn--sm" onClick={onOpenSpec}>
            Buka rancangan
          </button>
        </div>
      );
    }

    if (meta.type === 'app_answer' && meta.intent === 'change_request' && meta.changeRequest && index === lastIndex) {
      return (
        <div className="chat__action">
          <button type="button" className="btn btn--sm" onClick={() => onApplyRevision(meta.changeRequest)}>
            Terapkan sebagai revisi
          </button>
        </div>
      );
    }

    if (meta.type === 'error' && meta.retryable && index === lastIndex) {
      return (
        <div className="chat__action">
          <button type="button" className="btn btn--sm" onClick={state.retryLast} disabled={busy}>
            Kirim ulang
          </button>
        </div>
      );
    }
    return null;
  };

  return (
    <section className="chat" aria-label="Percakapan">
      <div className="chat__scroll">
        {messages.length === 0 ? (
          <div className="empty">
            <h3>Percakapan masih kosong</h3>
            <p className="muted">Ceritakan usaha Anda: siapa yang memakai aplikasi, dan apa yang paling sering dicatat.</p>
          </div>
        ) : (
          <ol className="chat__list">
            {messages.map((message, index) => {
              const own = message.role === 'user';
              return (
                <li key={message.id} className={`msg ${own ? 'msg--own' : 'msg--bot'}`}>
                  <p className="msg__who small">
                    <strong>{own ? 'Anda' : 'Ethermind'}</strong>
                    <span className="muted num"> {formatClock(message.createdAt)}</span>
                  </p>
                  {isPendingMessage(message) ? <PendingLine message={message} now={now} /> : <p className="msg__text">{message.content.replace(/\*\*/g, '')}</p>}
                  {attachmentsOf(message).length > 0 && <MessageImages projectId={projectId} attachments={attachmentsOf(message)} />}
                  {renderExtras(message, index)}
                </li>
              );
            })}
          </ol>
        )}
        <div ref={endRef} />
      </div>

      <form
        className="composer-bar"
        onSubmit={(event) => {
          event.preventDefault();
          void state.submitInput();
        }}
      >
        {chatError && (
          <Notice tone="bad" title="Pesan belum terkirim">
            {chatError} Isi pesan Anda tetap tersimpan di kotak, tekan Kirim untuk mencoba lagi.
          </Notice>
        )}
        <AttachmentTray images={images} onRemove={state.removeImage} />
        <label htmlFor={inputId} className="sr-only">
          Pesan untuk Ethermind
        </label>
        <textarea
          id={inputId}
          className="textarea"
          rows={2}
          value={inputText}
          disabled={locked}
          onChange={(event) => setInputText(event.target.value)}
          onPaste={(event) => {
            const pasted = Array.from(event.clipboardData.files).filter((f) => ACCEPTED_IMAGE_TYPES.includes(f.type));
            if (imageEnabled && pasted.length > 0) {
              event.preventDefault();
              void state.addImages(pasted);
            }
          }}
          onKeyDown={(event) => {
            if (event.key === 'Enter' && !event.shiftKey) {
              event.preventDefault();
              void state.submitInput();
            }
          }}
          placeholder={locked ? 'Chat dibuka lagi setelah build selesai.' : 'Tulis pesan, pertanyaan tentang aplikasi, atau perubahan yang diinginkan.'}
        />
        <div className="row-between">
          <p className="small muted" id={`${inputId}-hint`}>
            {locked
              ? 'Aplikasi sedang dibangun. Chat dibuka lagi setelah selesai.'
              : serverPending
                ? 'Menunggu balasan. Anda bisa mengirim lagi setelah balasan masuk.'
                : images.length > 0
                  ? 'Gambar dipakai sebagai acuan tata letak dan warna. Logo dan merek tidak disalin. Gambar dikirim ke penyedia AI.'
                  : 'Enter untuk mengirim, Shift+Enter untuk baris baru.'}
          </p>
          <div className="row">
            {imageEnabled && !locked && (
              <>
                <input
                  ref={fileInput}
                  type="file"
                  hidden
                  tabIndex={-1}
                  multiple
                  accept={ACCEPTED_IMAGE_TYPES.join(',')}
                  onChange={(event) => {
                    void state.addImages(Array.from(event.target.files ?? []));
                    event.target.value = '';
                  }}
                />
                <button type="button" className="btn btn--secondary btn--sm" onClick={() => fileInput.current?.click()} disabled={images.length >= MAX_IMAGES || busy} title={`Sampai ${MAX_IMAGES} gambar: screenshot atau sketsa tampilan yang Anda suka`}>
                  Lampirkan gambar
                </button>
              </>
            )}
            <button type="submit" className="btn btn--sm" disabled={(!inputText.trim() && !hasReadyImage) || uploading || busy || locked} aria-describedby={`${inputId}-hint`}>
              {sending ? 'Mengirim...' : uploading ? 'Mengunggah...' : 'Kirim'}
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};
