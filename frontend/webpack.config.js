var path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: [
    "./app/app.jsx"
  ],
  resolveLoader: {
    modules: ['node_modules']
  },
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  },
  output: {
    path: path.join(__dirname, "app"),
    filename: "app.js"
  },
  optimization: {
    minimizer: [new UglifyJsPlugin({
      uglifyOptions: {
        mangle: {
          except: ["Array", "BigInteger", "Boolean", "Buffer", "ECPair", "Function", "Number", "Point", "Script"]
        }
      }
    })],
  },
  plugins: [],
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  module: {
    rules: [
      { test: /\.css$/, loader: "style!css" },
      { test: /\.less$/, loader: "style!css!less" },
      { test: /\.jsx$/, loader: "react-hot" },
      { test: /\.js$/, include: /app/, loader: "babel", query: { presets: ["es2015"] }},
      { test: /\.jsx$/, include: /app/, loader: "babel", query: { presets: ["react", "es2015"] }},
      { test: /\.json$/, loader: "json" },
      { test: /\.woff|woff2$/, loader: "url?limit=10000&minetype=application/font-woff" },
      { test: /\.ttf$/, loader: "file" },
      { test: /\.eot$/, loader: "file" },
      { test: /\.svg$/, loader: "file" },
      { test: /\.gif/, loader: 'url?limit=10000&mimetype=image/gif' },
      { test: /\.jpg/, loader: 'url?limit=10000&mimetype=image/jpg' },
      { test: /\.png/, loader: 'url?limit=10000&mimetype=image/png' }
    ]
  }
};
