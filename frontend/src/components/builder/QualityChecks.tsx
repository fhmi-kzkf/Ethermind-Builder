import React from 'react';
import { Spinner } from '../ui';
import { GATES, latestByGate } from './shared';

interface Props {
  gates: any[];
  /** The app is delivered; tests, audit and review are still running in the background. */
  backgroundPending: boolean;
}

export const QualityChecks: React.FC<Props> = ({ gates, backgroundPending }) => {
  const latest = latestByGate(gates);
  const passed = GATES.filter((g) => latest.get(g.id)?.passed).length;

  return (
    <section className="stack" aria-labelledby="judul-pemeriksaan">
      <div className="row-between">
        <h3 id="judul-pemeriksaan">Pemeriksaan mutu</h3>
        <p className="small muted num" role="status">
          {passed} dari {GATES.length} lolos
        </p>
      </div>
      {backgroundPending && (
        <div className="row">
          <Spinner label="Aplikasi sudah berjalan. Tes, keamanan, dan review AI masih diperiksa di latar belakang." />
        </div>
      )}
      <ul className="gates">
        {GATES.map((gate) => {
          const result = latest.get(gate.id);
          const state = !result ? 'wait' : result.passed ? 'ok' : 'note';
          const issues: any[] = result && !result.passed ? (result.report?.issues ?? []).filter((i: any) => i.severity !== 'low').slice(0, 3) : [];
          return (
            <li key={gate.id} className="gate">
              <div className="row-between">
                <strong>{gate.label}</strong>
                <span className={`tag${state === 'ok' ? ' tag--ok' : state === 'note' ? ' tag--warn' : ''}`}>{state === 'ok' ? 'Lolos' : state === 'note' ? 'Ada catatan' : 'Menunggu'}</span>
              </div>
              <p className="small muted">{gate.hint}</p>
              {result && !result.passed && result.report?.summary && <p className="small gate__summary">{result.report.summary}</p>}
              {issues.length > 0 && (
                <ul className="gate__issues small">
                  {issues.map((issue, index) => (
                    <li key={index}>
                      {issue.file && (
                        <code>
                          {issue.file}
                          {issue.line ? `:${issue.line}` : ''}
                        </code>
                      )}{' '}
                      {String(issue.message).split('\n')[0].slice(0, 180)}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
};
