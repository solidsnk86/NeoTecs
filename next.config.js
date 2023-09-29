const atroposPkg = require('atropos/package.json');
const path = require('path');

module.exports = {
  reactStrictMode: true,
  experimental: { esmExternals: true },
  env: {
    atroposVersion: atroposPkg.version,
    atroposReleaseDate: atroposPkg.releaseDate,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
};
