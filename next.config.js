const atroposPkg = require('atropos/package.json');
const path = require('path');

module.exports = {
  async headers() {
    return [
      {
        source: '/api/badge-counter',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: '*',
          },
          {
            key: 'X-Rate-Limit-Limit',
            value: '100',
          },
          {
            key: 'X-Rate-Limit-Reset',
            value: '1629997200',
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
      'img.community.ui.com',
      'mikrotrik.com',
      'i.imgur.com',
      'openweathermap.org',
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
};
