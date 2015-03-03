var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config.js');
var open = require('open');
new WebpackDevServer(webpack(config), {
  publicPath: config.output.path,
  hot: true
}).listen(config.server.port, 'localhost', function (err, result) {
    if (err) {
      console.log(err);
    }

    console.log('Listening at localhost:' + config.server.port);
    open('http://localhost:' + config.server.port);
  });