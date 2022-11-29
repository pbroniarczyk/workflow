const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.tsx',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
    modules: ['node_modules'],
    alias: {
      assets: path.resolve('./src/', 'assets'),
      common: path.resolve('./src/components/', 'common'),
      components: path.resolve('./src/', 'components'),
      hooks: path.resolve('./src/', 'hooks'),
      src: path.resolve('./', 'src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(css)$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              additionalData:
                '@import "assets/styles/colors"; @import "assets/styles/typography";',
              sassOptions: {
                indentWidth: 2,
                includePaths: [path.join(__dirname, '../src')],
              },
            },
          },
        ],
      },
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [
            ['@babel/preset-env', {}, 'unique-name-a'],
            ['@babel/preset-react', {}, 'unique-name-a'],
          ],
          plugins: ['@babel/plugin-proposal-class-properties'],
        },
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
      {
        test: [/\.(jpe?g|png|gif|ico)$/i, /\.(woff|woff2|eot|ttf|otf)$/],
        type: 'asset/resource',
        generator: {
          filename: '[hash][ext]',
        },
      },
    ],
  },
};
