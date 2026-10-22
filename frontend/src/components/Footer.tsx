import React from 'react';
import type { AppView } from './Navbar';
import { Logo } from './ui';

interface FooterProps {
  onChangeView: (view: AppView) => void;
}

const COLUMNS: Array<{ title: string; items: Array<{ view: AppView; label: string }> }> = [
  {
    title: 'Produk',
    items: [
      { view: 'templates', label: 'Contoh aplikasi' },
      { view: 'pricing', label: 'Harga' },
      { view: 'security', label: 'Keamanan dan data' },
    ],
  },
  {
    title: 'Hukum',
    items: [
      { view: 'terms', label: 'Syarat layanan' },
      { view: 'privacy', label: 'Kebijakan privasi' },
    ],
  },
];

export const Footer: React.FC<FooterProps> = ({ onChangeView }) => (
  <footer className="footer">
    <div className="container footer__grid">
      <div className="stack-sm" style={{ maxWidth: '22rem' }}>
        <span className="brand">
          <Logo size={30} label={null} />
          Ethermind
        </span>
        <p className="small muted">Pembuat aplikasi untuk usaha kecil. Anda bercerita, kami menyusun rancangan, menulis kode, dan menjalankannya.</p>
      </div>
      {COLUMNS.map((column) => (
        <nav key={column.title} aria-label={column.title}>
          <h2 className="label" style={{ marginBottom: 'var(--space-2)' }}>
            {column.title}
          </h2>
          <ul className="footer__list">
            {column.items.map((item) => (
              <li key={item.view}>
                <a
                  href={`#${item.view}`}
                  onClick={(event) => {
                    event.preventDefault();
                    onChangeView(item.view);
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ))}
    </div>
  </footer>
);
