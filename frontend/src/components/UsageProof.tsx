import React, { useEffect, useState } from 'react';

/**
 * A real count of finished apps, shown only when the server says it is large enough to mean something.
 * Nothing is invented: below the threshold the line does not exist.
 */
export const UsageProof: React.FC = () => {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    let active = true;
    fetch('/api/public/stats')
      .then((res) => (res.ok ? res.json() : null))
      .then((json) => {
        if (active && json?.show) setCount(Number(json.appsBuilt));
      })
      .catch(() => undefined);
    return () => {
      active = false;
    };
  }, []);

  if (count === null) return null;
  return (
    <p className="usage small muted">
      <strong className="num">{new Intl.NumberFormat('id-ID').format(count)}</strong> aplikasi sudah selesai dibangun di Ethermind.
    </p>
  );
};
