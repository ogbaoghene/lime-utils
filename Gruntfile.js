'use strict';

module.exports = function (grunt) {

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // Autoload grunt plugins
  require('jit-grunt')(grunt);

  // Define the configuration for all the tasks
  grunt.initConfig({

    // Watch files and run tasks based on the changes
    watch: {
      gruntfile: {
        files: ['Gruntfile.js']
      },
      sass: {
        files: ['**/*.{scss,sass}'],
        tasks: ['sass:dist', 'postcss:dist', 'modernizr:dist']
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '{,*/}*.js',
          '{,*/}*.html',
          'screen.min.css'
        ]
      }
    },

    // The actual grunt server settings
    connect: {
      options: {
        port: 9001,
        open: true,
        livereload: 35729,
        hostname: 'localhost'
      },
      livereload: {
        options: {
          open: true,
          base: ['./']
        }
      }
    },

    // Compile Sass to CSS
    sass: {
      options: {
        sourcemap: false
      },
      dist: {
        options: {
          style: 'compressed'
        },
        files: {
          'screen.min.css': 'screen.scss'
        }
      }
    },

    // Respond to browser features
    modernizr: {
      dist: {
        "dest": "modernizr-output.js",
        "files": {
          src: [
            'screen.min.css',
          ]
        },
        "options": [
          "domPrefixes",
          "prefixes",
          "addTest",
          "atRule",
          "hasEvent",
          "mq",
          "prefixed",
          "prefixedCSS",
          "prefixedCSSValue",
          "testAllProps",
          "testProp",
          "testStyles",
          "html5shiv",
          "setClasses"
        ],
        "uglify": true
      }
    },

    // Apply post-processors
    postcss: {
      options: {
        map: true,
        processors: [
          require('autoprefixer')({browsers: 'last 2 versions'})
        ]
      },
      dist: {
        src: 'screen.min.css'
      }
    }

  });

  grunt.registerTask('serve', 'start the server and preview your project', function (target) {
    grunt.task.run([
      'sass:dist',
      'connect:livereload',
      'watch'
    ]);
  });

  grunt.registerTask('default', [
    'serve'
  ]);
};

