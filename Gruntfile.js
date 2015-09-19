module.exports = function (grunt) {
  grunt.loadNpmTasks('grunt-noflo-manifest');
  grunt.loadNpmTasks('grunt-noflo-browser');
  grunt.initConfig({
    noflo_manifest: {
      both: {
        files: {
          'component.json': ['graphs/*', 'components/*']
        }
      }
    },
    noflo_optimized: {
      options: {
        // Task-specific options go here.
      },
      build: {
        // Target-specific file lists and/or options go here.
        files: {
         'dist/noflo.js': ['component.json']
        }
      }
    },
    noflo_browser: {
      options: {
        // Task-specific options go here.
      },
      build: {
        // Target-specific file lists and/or options go here.
        files: {
         'dist/noflo.js': ['component.json']
        }
      }
    }
  });
  // grunt.registerTask('default', ['noflo_manifest', 'noflo_optimized']);
  grunt.registerTask('default', ['noflo_manifest', 'noflo_browser']);
}
