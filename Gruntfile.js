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
        tasks: ['sass:dev', 'modernizr:dist']
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '{,*/}*.js',
          '{,*/}*.html',
          'screen.css'
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
        sourceMap: true
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
          'screen.css': 'screen.scss'
        }
      }
    },

    // Apply post-processors
    postcss: {
      options: {
        map: true,
        processors: [
          require('autoprefixer')({browsers: 'last 2 versions'}),
          require('postcss-pseudoelements')()
        ]
      },
      dist: {
        src: 'screen.css'
      }
    },

    // Respond to browser features
    modernizr: {
      dist: {
        "dest" : 'js/modernizr-custom.js',
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
        "files": {
          src: ['screen.css']
        },
      }
    },

    // Optimise with ImageOptim-CLI
    imageoptim: {
      options: {
        quitAfter: true
      },
      allPngs: {
        options: {
          imageAlpha: true,
          jpegMini: false
        },
        src: ['imgs/*.png']
      },
      allJpgs: {
        options: {
          imageAlpha: false,
          jpegMini: true
        },
        src: ['imgs/*.jpg']
      }
    },

    // Optimise with SVGO
    svgmin: {
      options: {
        plugins: [
          {removeViewBox: false},
          {removeUselessStrokeAndFill: false},
        ]
      },
      dist: {
        files: [
          {
            expand: true,
            cwd: 'imgs/',
            src: '*.svg',
            dest: 'imgs/'
          }
        ]
      }
    }
  });

  grunt.registerTask('dist', [
    'sass:dist',
    'postcss:dist',
    'modernizr:dist',
    'newer:imageoptim',
    'newer:svgmin'
  ]);

  grunt.registerTask('dev', [
    'sass:dev',
    'modernizr:dist'
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

