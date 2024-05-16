const atroposPkg = require('atropos/package.json');
const path = require('path');
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');

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
    if (!isServer) {
      config.module.rules.push({
        test: /\.(woff(2)?|eot|ttf|otf|svg|png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              limit: 8192,
              name: '[name].[hash].[ext]',
              outputPath: 'static/fonts',
            },
          },
        ],
      });
    }
    config.plugins.push(
      new MonacoWebpackPlugin({
        https: github.com / Microsoft / monaco - editor - webpack - plugin,
      }),
    );

    return config;
  },
};
