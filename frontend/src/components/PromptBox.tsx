import React, { useId, useState } from 'react';
import { DEFAULT_MODEL_ID, MODEL_CHOICES, TIER_LABEL, modelById } from '../data/models';

interface PromptBoxProps {
  /** Id of the textarea. The home page focuses the first one by this id after a story is picked. */
  inputId: string;
  prompt: string;
  onPromptChange: (value: string) => void;
  onSubmit: (prompt: string, modelId: string) => void;
  busy?: boolean;
  rows?: number;
}

/** Where a client starts: a story, the engine, and a send button. Used at the top of the home page and again at its end. */
export const PromptBox: React.FC<PromptBoxProps> = ({ inputId, prompt, onPromptChange, onSubmit, busy, rows = 4 }) => {
  const [modelId, setModelId] = useState(DEFAULT_MODEL_ID);
  const [error, setError] = useState<string | null>(null);
  const modelSelectId = useId();
  const errorId = useId();

  const submit = () => {
    const text = prompt.trim();
    if (text.length < 15) {
      setError('Ceritakan sedikit lebih lengkap, minimal satu kalimat tentang usaha dan apa yang ingin dicatat.');
      return;
    }
    setError(null);
    onSubmit(text, modelId);
  };

  return (
    <>
      <form
        className="composer"
        onSubmit={(event) => {
          event.preventDefault();
          submit();
        }}
      >
        <label htmlFor={inputId} className="sr-only">
          Ceritakan aplikasi yang Anda perlukan
        </label>
        <textarea
          id={inputId}
          className="composer__input"
          rows={rows}
          value={prompt}
          onChange={(event) => onPromptChange(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === 'Enter' && !event.shiftKey) {
              event.preventDefault();
              submit();
            }
          }}
          placeholder="Contoh: saya punya warung, ingin mencatat penjualan dan pengeluaran harian."
          aria-describedby={error ? errorId : undefined}
          aria-invalid={error ? true : undefined}
        />
        <div className="composer__bar">
          <div className="composer__model">
            <label htmlFor={modelSelectId} className="small muted">
              Mesin AI
            </label>
            <select id={modelSelectId} className="select select--bare" value={modelId} onChange={(event) => setModelId(event.target.value)}>
              {(['pro', 'basic'] as const).map((tier) => (
                <optgroup key={tier} label={TIER_LABEL[tier]}>
                  {MODEL_CHOICES.filter((m) => m.tier === tier).map((m) => (
                    <option key={m.id} value={m.id}>
                      {m.name}
                    </option>
                  ))}
                </optgroup>
              ))}
            </select>
          </div>
          <button type="submit" className="send" disabled={busy} aria-label={busy ? 'Membuka percakapan' : 'Mulai merancang'} title="Mulai merancang">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" className={busy ? 'spin' : undefined}>
              {busy ? (
                <path d="M17 10a7 7 0 0 0-7-7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
              ) : (
                <path d="M10 16V4M10 4l-5 5M10 4l5 5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              )}
            </svg>
          </button>
        </div>
        <p className="composer__note">
          {modelById(modelId).note}
          <br />
          Gratis dicoba, bayar hanya untuk unduh kode.{' '}
          <a className="link" href="#pricing">
            Lihat harga
          </a>
        </p>
      </form>
      {error && (
        <p id={errorId} className="field-error" role="alert">
          {error}
        </p>
      )}
    </>
  );
};
