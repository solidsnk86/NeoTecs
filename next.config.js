const atroposPkg = require('atropos/package.json');
const path = require('path');
const withPWA = require('next-pwa')({
  dest: '/public',
  register: true,
  skipWaiting: true,
});

module.exports = withPWA({
  async headers() {
    return [
      {
        source: '/api/scrape',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: '*',
          },
        ],
      },
    ];
  },
  images: {
    domains: [
      'github.com',
      'www.hardreset.info',
      'www.technotrade.com.ua',
      'wiki.mikrotik.com',
    ],
  },
  reactStrictMode: true,
  experimental: { esmExternals: true },
  env: {
    atroposVersion: atroposPkg.version,
    atroposReleaseDate: atroposPkg.releaseDate,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.externals.push('fs');
    }

    return config;
  },
});
