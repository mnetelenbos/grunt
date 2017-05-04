module.exports = {
    options: {
      mangle: false,
      compress: true,
      quoteStyle: 3
    },
    dist: {
      files: {
        'js/test.min.js': 'js/test.js',
      }
    }
};
