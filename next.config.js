/* eslint-disable global-require, comma-dangle, import/no-extraneous-dependencies */
const webpack = require('webpack')

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').load()
}

module.exports = {
  webpack: (config) => {
    config.plugins.push(
      new webpack.DefinePlugin({
        'process.env.FAKE_TOKEN': JSON.stringify(process.env.FAKE_TOKEN || 'xxx666xxx'),
      })
    )
    return config
  }
}

