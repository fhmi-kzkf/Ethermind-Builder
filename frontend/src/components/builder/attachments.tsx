import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import { imageCache } from '../../services/imageUpload';

export interface PendingImage {
  localId: string;
  name: string;
  previewUrl: string;
  status: 'uploading' | 'ready' | 'error';
  /** Set once the server has stored it. */
  id?: string;
  error?: string;
}

interface TrayProps {
  images: PendingImage[];
  onRemove: (localId: string) => void;
}

/** The pictures waiting to be sent with the next message. Each has a visible text label for its state and for removing it. */
export const AttachmentTray: React.FC<TrayProps> = ({ images, onRemove }) => {
  if (images.length === 0) return null;
  return (
    <ul className="tray" aria-label="Gambar yang akan dikirim">
      {images.map((image) => (
        <li key={image.localId} className="tray__item">
          {image.previewUrl ? <img src={image.previewUrl} alt={`Pratinjau ${image.name}`} className="tray__img" /> : <span className="tray__img" aria-hidden="true" />}
          <div className="tray__meta">
            <span className="small tray__name" title={image.name}>
              {image.name}
            </span>
            <span className={`small ${image.status === 'error' ? 'tray__bad' : 'muted'}`} role={image.status === 'error' ? 'alert' : undefined}>
              {image.status === 'uploading' ? 'Mengunggah...' : image.status === 'error' ? image.error : 'Siap dikirim'}
            </span>
          </div>
          <button type="button" className="btn btn--quiet btn--sm" onClick={() => onRemove(image.localId)} aria-label={`Hapus ${image.name}`}>
            Hapus
          </button>
        </li>
      ))}
    </ul>
  );
};

interface MessageImagesProps {
  projectId: string;
  attachments: Array<{ id: string }>;
}

/** The pictures of a sent message, fetched with the sign-in token (they are private) and remembered. */
export const MessageImages: React.FC<MessageImagesProps> = ({ projectId, attachments }) => {
  const [urls, setUrls] = useState<Record<string, string | 'failed'>>(() => Object.fromEntries(attachments.filter((a) => imageCache.has(a.id)).map((a) => [a.id, imageCache.get(a.id)!])));

  useEffect(() => {
    let active = true;
    for (const { id } of attachments) {
      if (imageCache.has(id)) {
        setUrls((prev) => (prev[id] ? prev : { ...prev, [id]: imageCache.get(id)! }));
        continue;
      }
      api.projects
        .attachmentUrl(projectId, id)
        .then((url) => {
          imageCache.set(id, url);
          if (active) setUrls((prev) => ({ ...prev, [id]: url }));
        })
        .catch(() => active && setUrls((prev) => ({ ...prev, [id]: 'failed' })));
    }
    return () => {
      active = false;
    };
  }, [projectId, attachments]);

  return (
    <ul className="msg__images" aria-label="Gambar yang Anda lampirkan">
      {attachments.map(({ id }) => (
        <li key={id}>
          {urls[id] && urls[id] !== 'failed' ? (
            <img src={urls[id]} alt="Gambar acuan yang Anda lampirkan" className="msg__img" />
          ) : (
            <span className="msg__img msg__img--empty small muted">{urls[id] === 'failed' ? 'Gambar tidak bisa dimuat' : 'Memuat gambar...'}</span>
          )}
        </li>
      ))}
    </ul>
  );
};
