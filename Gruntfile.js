module.exports = function (grunt) {
  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // Autoload grunt plugins
  require('jit-grunt')(grunt);

  // Configurable paths
  var config = {
    dev: 'sass',
    docs: '_docs'
  };

  // Define the configuration for all the tasks
  grunt.initConfig({

    // Project settings
    config: config,

    // Watches files for changes and runs tasks based on the changed files
    watch: {
      gruntfile: {
        files: ['Gruntfile.js']
      },
      styleguide: {
        files: ['<%= config.dev %>/**/*.{scss,sass}', '<%= config.dev %>/sass/styleguide.md'],
        tasks: ['styleguide']
      },
      sass: {
        files: ['<%= config.dev %>/**/*.{scss,sass}'],
        tasks: ['sass:build']
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '<%= config.docs %>/{,*/}*.html'
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
          base: ['<%= config.docs %>']
        }
      }
    },

    // Compiles Sass to CSS and generates necessary files if requested
    sass: {
      options: {
        sourceMap: false,
        },
      build: {
        files: {
          '<%= config.docs %>/public/style.css': '<%= config.dev %>/screen.scss'
        }
      },
    }, 

    // Empties folders to start fresh
    clean: {
      docs: {
        src: ['<%= config.docs %>/*']
      }
    },

    // Generate a styleguide
    styleguide: {
      options: {
        //template: {
          //src: 'docs/styleguide-template'
        //},
        framework: {
          name: 'kss'
        }
      },
      all: {
        files: [{
         '<%= config.docs %>': '<%= config.dev %>/screen.scss'
        }]
      }
    }

  });


  grunt.registerTask('docs', 'generate KSS styleguide', [
    'clean:docs',
    'styleguide',
  ]);

  grunt.registerTask('serve', 'start the server and preview the styleguide', function (target) {
    grunt.task.run([
      'docs',
      'connect:livereload',
      'watch'
    ]);
  });

  grunt.registerTask('default', [
    'serve'
  ]);

};
