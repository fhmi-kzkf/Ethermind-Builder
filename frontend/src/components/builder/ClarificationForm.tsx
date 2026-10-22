import React from 'react';
import type { ClarificationOption, ClarificationQuestion } from '../../types';

interface Props {
  messageId: string;
  questions: ClarificationQuestion[];
  selections: Record<string, string[]>;
  /** Only the newest set of questions can be answered; older ones stay readable. */
  active: boolean;
  busy: boolean;
  onSelect: (question: ClarificationQuestion, option: ClarificationOption) => void;
  onSubmit: () => void;
}

export const ClarificationForm: React.FC<Props> = ({ messageId, questions, selections, active, busy, onSelect, onSubmit }) => {
  const answered = questions.filter((q) => (selections[q.id] ?? []).length > 0).length;
  const remaining = questions.length - answered;

  // Questions that were already answered stay readable but out of the way.
  if (!active) {
    return (
      <details className="clarify__past">
        <summary>Pertanyaan yang diajukan ({questions.length})</summary>
        <ul>
          {questions.map((question) => (
            <li key={question.id}>{question.question}</li>
          ))}
        </ul>
      </details>
    );
  }

  return (
    <form
      className="clarify"
      onSubmit={(event) => {
        event.preventDefault();
        if (remaining === 0) onSubmit();
      }}
    >
      {questions.map((question) => {
        const chosen = selections[question.id] ?? [];
        const type = question.allowMultiple ? 'checkbox' : 'radio';
        return (
          <fieldset key={question.id} className="clarify__q" disabled={!active || busy}>
            <legend>{question.question}</legend>
            {question.allowMultiple && <p className="small muted">Boleh pilih lebih dari satu.</p>}
            <div className="clarify__options">
              {question.options.map((option) => {
                const inputId = `${messageId}-${question.id}-${option.id}`;
                const selected = chosen.includes(option.value);
                return (
                  <label key={option.id} htmlFor={inputId} className={`clarify__option${selected ? ' is-selected' : ''}`}>
                    <input id={inputId} type={type} name={`${messageId}-${question.id}`} checked={selected} onChange={() => onSelect(question, option)} />
                    <span>
                      <span className="clarify__label">{option.label}</span>
                      {option.description && <span className="small muted clarify__desc">{option.description}</span>}
                    </span>
                  </label>
                );
              })}
            </div>
          </fieldset>
        );
      })}

      {active && (
        <div className="clarify__foot">
          <p className="small muted" role="status">
            {remaining === 0 ? 'Semua pertanyaan sudah terjawab. ' : `${answered} dari ${questions.length} pertanyaan terjawab, sisa ${remaining}. `}
            Rancangan baru dibuat setelah Anda menekan Lanjutkan.
          </p>
          <div className="row">
            {remaining > 0 && answered > 0 && (
              <button type="button" className="btn btn--quiet btn--sm" disabled={busy} onClick={onSubmit}>
                Lewati sisanya
              </button>
            )}
            <button type="submit" className="btn btn--sm" disabled={busy || remaining > 0}>
              Lanjutkan
            </button>
          </div>
        </div>
      )}
    </form>
  );
};
