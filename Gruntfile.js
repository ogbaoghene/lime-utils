module.exports = function (grunt) {
    require('jit-grunt')(grunt);

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // Project settings
        config: {
            // Configurable paths
            docs: '_docs',
            build: '_build',
            sass: 'sass',
            src: 'screen.scss',
            dist: 'screen.css',
            dev: 'style.css'
        },

        // 1
        clean: {
      		dist: {
    		    src: ['<%= config.build %>/**/*']
      		},
            docs: {
                src: ['<%= config.docs %>/**/*']
            }
    	},

        // 2
      	sass: {
            dist: {
                options: {
                    outputStyle: 'compressed'
                },
                files: {
                    '<%= config.build %>/css/<%= config.dist %>': '<%= config.sass %>/<%= config.src %>'
                }
            },
            docs: {
                files: {
                    '<%= config.docs %>/public/<%= config.dev %>': '<%= config.sass %>/<%= config.src %>'
                }
            }
        },

        // 3
        autoprefixer: {
            options: {
                browsers: ['last 3 versions', '> 1%', 'ie 8', 'ie 7']
            },
            no_dest_dist: {
                src: '<%= config.build %>/**/<%= config.dist %>'
            },
            no_dest_docs: {
                src: '<%= config.docs %>/**/<%= config.dev %>'
            }
        },

        // 4
    	watch: {
            livereload: {
                options: {
                    livereload: '<%= connect.options.livereload %>'
                },
                files: [
                    '<%= config.docs %>/{,*/}*.html',
                    '<%= config.sass %>/**/*.scss'
                ],
                tasks: [
                    'styleguide',
                    'sass:docs',
                    'autoprefixer:no_dest_docs'
                ]
            }
        },

        // 5
        connect: {
            options: {
                port: 9000,
                livereload: 35729,
                hostname: 'localhost'
            },
            livereload: {
                options: {
                    open: true,
                    base: [
                        '<%= config.docs %>'
                    ]
                }
            },
        },

        // 6
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
        	       '<%= config.docs %>': '<%= config.sass %>/<%= config.src %>'
           	    }]
      		}
        },
        
    });

    // Create the 'purge' task
    grunt.registerTask('purge', ['clean:dist', 'clean:docs']);

    // Create the 'deploy' task
    grunt.registerTask('deploy', ['clean:dist', 'sass:dist', 'autoprefixer:no_dest_dist']);

    // Create the `doc` task
    grunt.registerTask('doc', ['clean:docs', 'styleguide', 'sass:docs', 'autoprefixer:no_dest_docs']);

    // Creates the `serve` task
    grunt.registerTask('serve', function (target) {
        grunt.task.run([
            'doc',
            'connect:livereload',
            'watch'
        ]);
    });

    grunt.registerTask('default', ['serve']);
};