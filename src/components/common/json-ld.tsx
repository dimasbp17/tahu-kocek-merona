import { site } from '@/lib/site';

// Data terstruktur untuk Google (schema.org Restaurant).
// Membantu tampil di hasil pencarian & Maps beserta lokasi dan harga.
const JsonLd = () => {
  const { location } = site;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    name: site.name,
    slogan: site.tagline,
    description: site.description,
    url: site.url,
    image: `${site.url}/opengraph-image`,
    logo: `${site.url}/images/logo-tahu-kocek-merona.png`,
    telephone: `+${site.whatsapp}`,
    servesCuisine: ['Indonesian', 'Jajanan Jember'],
    priceRange: 'Rp10.000',
    currenciesAccepted: 'IDR',
    address: {
      '@type': 'PostalAddress',
      ...(location.address && { streetAddress: location.address }),
      addressCountry: 'ID',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: location.lat,
      longitude: location.lng,
    },
    hasMap: location.mapsUrl,
    hasMenu: {
      '@type': 'Menu',
      hasMenuSection: {
        '@type': 'MenuSection',
        name: 'Tahu Kocek',
        hasMenuItem: [1, 2, 3, 4, 5].map((level) => ({
          '@type': 'MenuItem',
          name: `Tahu Kocek Level ${level}`,
          offers: {
            '@type': 'Offer',
            price: site.priceOffline,
            priceCurrency: 'IDR',
          },
        })),
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
      }}
    />
  );
};

export default JsonLd;
