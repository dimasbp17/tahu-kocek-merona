import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { formatRupiah, site } from '@/lib/site';

// Gambar preview saat link dibagikan di WhatsApp, Instagram, Facebook, dll.
// alt/size/contentType adalah konvensi file metadata Next, bukan komponen.
// eslint-disable-next-line react-refresh/only-export-components
export const alt =`${site.name} — ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

const toDataUrl = async (file: string, mime: string) => {
  const data = await readFile(join(process.cwd(), 'public/images', file));
  return `data:${mime};base64,${data.toString('base64')}`;
};

export default async function Image() {
  const [photo, logo] = await Promise.all([
    toDataUrl('tahu-kocek.jpg', 'image/jpeg'),
    toDataUrl('logo-tahu-kocek-merona.png', 'image/png'),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          width: '100%',
          height: '100%',
          background: '#fbf6ee',
        }}
      >
        <img
          src={photo}
          alt=""
          width={560}
          height={630}
          style={{ objectFit: 'cover' }}
        />

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            flex: 1,
            padding: '0 56px',
            color: '#4a2f25',
          }}
        >
          <img
            src={logo}
            alt=""
            width={240}
            height={191}
            style={{ marginBottom: 28 }}
          />
          <div style={{ fontSize: 60, fontWeight: 800, lineHeight: 1.05 }}>
            {site.tagline}
          </div>
          <div style={{ fontSize: 28, marginTop: 20, color: '#7a5a4c' }}>
            Tahu kocek digoreng dadakan, sambal diulek tangan.
          </div>
          <div style={{ display: 'flex', gap: 14, marginTop: 36 }}>
            <div
              style={{
                background: '#c62d1f',
                color: 'white',
                fontSize: 28,
                fontWeight: 700,
                padding: '10px 26px',
                borderRadius: 999,
              }}
            >
              {formatRupiah(site.priceOffline)}
            </div>
            <div
              style={{
                background: '#f3e3cf',
                fontSize: 28,
                fontWeight: 700,
                padding: '10px 26px',
                borderRadius: 999,
              }}
            >
              5 level pedas
            </div>
          </div>
        </div>
      </div>
    ),
    size
  );
}
