  var webpackConfig = require('./webpack.config.js');

module.exports = function(config){
  config.set({
    browsers: ['Chrome'],
    singleRun: true,
    frameworks: ['mocha'],
    files: [
      'node_modules/jquery/dist/jquery.js',
      'node_modules/bootstrap-sass/assets/javascripts/bootstrap.js',
      'node_modules/react/dist/react-with-addons.js',
      'node_modules/react-dom/dist/react-dom.js',
      'node_modules/react-router/umd/ReactRouter.js',
      'app/**/*.test.jsx'],
    preprocessors: {
      'app/**/*.test.jsx': ['webpack', 'sourcemap']
    },
    reporters: ['mocha'],
    client:{
      mocha:{
        timeout: '5000',
      }
    },
    webpack: webpackConfig,
    webpackServer:{
      noInfo: true
    }
  });
};
