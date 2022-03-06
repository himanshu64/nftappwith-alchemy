const webpack = require("webpack");
const Dotenv = require('dotenv-webpack');

module.exports = {
  webpack: {
   
    configure: {
      resolve: {
        fallback: {
          "os": require.resolve("os-browserify/browser"),
          zlib: require.resolve("browserify-zlib"),
          stream: require.resolve("stream-browserify"),
          util: require.resolve("util"),
          buffer: require.resolve('buffer/'),
          asset: require.resolve("assert"),
          path: require.resolve("path-browserify"),
          fs: require.resolve("fs"),
          crypto: require.resolve("crypto-browserify"),
          "stream-http": require.resolve("stream-http"),
          http: require.resolve("http-browserify"),
          https: require.resolve("https-browserify"),

        },
      },
      plugins: [
        new webpack.ProvidePlugin({
            Buffer: ['buffer', 'Buffer'],
        }),
        new Dotenv(),
        new webpack.DefinePlugin({
          "process.env": {
            // This has effect on the react lib size
            NODE_ENV: JSON.stringify("development"),
          },
        }),
    ]
    },
  },
};