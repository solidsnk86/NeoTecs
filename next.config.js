const atroposPkg = require('atropos/package.json');
const path = require('path');

module.exports = {
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
      'img.community.ui.com',
      'mikrotrik.com',
      'i.imgur.com',
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
