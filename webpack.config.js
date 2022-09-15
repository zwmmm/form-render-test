
module.exports = {
  entry: './src/index.js',
  mode: "development",
  output: {
    library: {
      name: 'someLibName',
      type: 'umd',
    },
  },
  watchOptions: {
    ignored: '**/node_modules/',
  },
  cache: {
    type: 'filesystem',
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'initial',
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          chunks: 'all',
          name: ({ context }) => (context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/) || [])[1],
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['ignore-loader'],
      },
      {
        test: /\.less$/i,
        use: ['ignore-loader'],
      },
    ],
  },
}