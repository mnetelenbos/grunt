module.exports = function(grunt) {
  var tasks = {scope: ['devDependencies']};
  var options = {config: { src: "grunt/**.js" }};
  var configs = require('load-grunt-configs')(grunt, options);
  require('load-grunt-tasks')(grunt, tasks);
  grunt.initConfig(configs);
  grunt.registerTask('default', ['jshint', 'sass', 'uglify', 'cssmin', 'watch']);
};
