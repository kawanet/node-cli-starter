// Gruntfile.js

module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-mocha-test');

  grunt.initConfig({
    // https://github.com/gruntjs/grunt-contrib-jshint
    jshint: {
      all: {
        src: ['./*.js', 'bin/*.js', 'lib/*.js', 'test/*.js']
      },
      options: {
        laxcomma: true // I001: Comma warnings can be turned off with 'laxcomma'.
      }
    },

    // https://github.com/pghalliday/grunt-mocha-test
    mochaTest: {
      all: {
        src: ['test/*.test.js']
      },
      options: {
        reporter: 'spec'
      }
    }
  });

  grunt.registerTask('default', ['jshint', 'mochaTest']);
};