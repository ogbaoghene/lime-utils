module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    clean: {
  		wipe: {
			    src: ['_build/*']
  		},
  		css: {
			    src: ['_build/css/*.css']
  		}
		},

  	sass: {
      dev: {
        options: {
          style: 'expanded',
          trace: true
        },
        files: {
        '_build/css/screen.doc.css': 'sass/screen.scss'
        }
      },
      dist: {
        options: {
          style: 'compressed'
        },
        files: {
          '_build/css/screen.css': 'sass/screen.scss'
        }
      }
    },

    autoprefixer: {
      options: {
        browsers: ['last 3 versions', '> 1%', 'ie 8', 'ie 7']
      },
      no_dest: {
	      src: '_build/css/*.css'
	    }
    },

    express: {
      all: {
        options: {
          port: 9000,
          hostname: "0.0.0.0",
          bases: 'docs/styleguide',
          livereload: true
        }
      }
    },
 
    open: {
      all: {
        path: 'http://localhost:<%= express.all.options.port%>'
      }
    },

		watch: {
      sass: {
        files: ['sass/**/*.scss'],
        tasks: ['sass:dev', 'autoprefixer'],
        options : {
	        livereload : true
	      }
      },
    },

		copy: {
      overview: {
        files: [{src: ['sass/styleguide.md'], dest: '_build/css/styleguide.md'}]
      }
    },

    styleguide: {
      options: {
          //template: {
          //    src: 'docs/styleguide-template'
          //},
          framework: {
              name: 'kss'
          }
      },
      all: {
    		files: [{
        	'docs/styleguide': '_build/css/screen.doc.css'
       	}]
  		}
    },
    
  });

  // Load Grunt plugins
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  // The `documentation` will clean the build folder, compile sass, autoprefix, copy over the overview file, then generate a KSS styleguide
  grunt.registerTask('documentation', ['clean:css', 'sass:dev', 'autoprefixer', 'copy:overview', 'styleguide']);
  // Creates the `server` task
  grunt.registerTask('server', ['express', 'open', 'express-keepalive']);
  // The `cleanwipe` task will empty the build folder and subfolders
  grunt.registerTask('cleanwipe', ['clean:wipe']);
  // The `production` task will clean the build folder, compile sass and compress the outputted CSS, then autoprefix
  grunt.registerTask('production', ['clean:css', 'sass:dist', 'autoprefixer']);
  // Using the `grunt development` command will clean the build folder, compile sass, autoprefix, copy over the overview file, then generate a KSS styleguide, after which it will start the server and activate the watch task
  grunt.registerTask('development', ['clean:css', 'sass:dev', 'autoprefixer', 'copy:overview', 'styleguide', 'express', 'open', 'watch']);

  grunt.registerTask('default', ['development']);
};