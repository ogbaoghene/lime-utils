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
        tasks: ['sass:dev', 'postcss:dev', 'modernizr:dev']
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '{,*/}*.js',
          '{,*/}*.html',
          'screen.post.css'
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
      dev: {
        files: {
          'screen.css': 'screen.scss'
        }
      },
      dist: {
        options: {
          outputStyle: 'compressed'
        },
        files: {
          'screen.min.css': 'screen.scss'
        }
      }
    },

    // Apply post-processors
    postcss: {
      options: {
        map: true,
        processors: [
          require('autoprefixer')({browsers: 'last 2 versions'}),
          require('postcss-pseudoelements')(),
          require('pixrem')()
        ]
      },
      dev: {
        files: [{
          src: 'screen.css',
          dest: 'screen.post.css'
        }]
      },
      dist: {
        src: 'screen.min.css'
      }
    },

    // Respond to browser features
    modernizr: {
      "dest": "modernizr-output.js",
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
      "uglify": true,
      dev: {
        "files": {
          src: ['screen.post.css']
        },
      },
      dist: {
        "files": {
          src: ['screen.min.css']
        },
      }
    }
  });

  grunt.registerTask('dist', [
    'sass:dist',
    'postcss:dist',
    'modernizr:dist'
  ]);

  grunt.registerTask('dev', [
    'sass:dev',
    'postcss:dev',
    'modernizr:dev'
  ]);

  grunt.registerTask('serve', 'start the server and preview your project', function (target) {
    grunt.task.run([
      'dev',
      'connect:livereload',
      'watch'
    ]);
  });

  grunt.registerTask('default', [
    'serve'
  ]);
};

