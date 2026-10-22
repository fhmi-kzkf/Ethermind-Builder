import React from 'react';
import { EXAMPLES } from '../data/models';
import { PromptBox } from './PromptBox';

const TITLE = 'Ceritakan usaha Anda. Aplikasinya kami buatkan.';

interface HeroProps {
  prompt: string;
  onPromptChange: (value: string) => void;
  onStartBuild: (prompt: string, selectedModel?: string) => void;
  busy?: boolean;
}

export const Hero: React.FC<HeroProps> = ({ prompt, onPromptChange, onStartBuild, busy }) => (
  <section className="hero" aria-labelledby="judul-utama">
    <div className="container hero__inner">
      <h1 id="judul-utama" className="hero__title" aria-label={TITLE}>
        {TITLE.split(' ').map((word, index) => (
          <React.Fragment key={index}>
            <span className="word" aria-hidden="true">
              <span className="word__in">{word}</span>
            </span>{' '}
          </React.Fragment>
        ))}
      </h1>
      <p className="lead hero__lead">
        Dari satu percakapan, Ethermind merancang, menulis, menjalankan, dan memeriksa aplikasi lengkap dengan login, data, dan laporan. Anda tinggal mencobanya.
      </p>

      <PromptBox inputId="komposer" prompt={prompt} onPromptChange={onPromptChange} onSubmit={onStartBuild} busy={busy} />

      <div className="chips" role="group" aria-label="Contoh permintaan">
        {EXAMPLES.slice(0, 4).map((example) => (
          <button key={example.id} type="button" className="chip" onClick={() => onPromptChange(example.prompt)}>
            {example.title}
          </button>
        ))}
      </div>
    </div>
  </section>
);
