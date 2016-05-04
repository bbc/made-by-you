module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        banner: '/*! <%= pkg.name %> v<%= pkg.version %> | <%= pkg.author %> */\n',
        dirs: {
            'bower': 'bower_components'
        }
    });

    grunt.loadTasks('grunt');
    require('load-grunt-tasks')(grunt);

    grunt.registerTask('build', [
        'less:dist',
        'concat:dist',
        'cssmin:dist',
        'clean:dist'
    ]);

    grunt.registerTask('serve-docs', [
        'build-docs',
        'connect:docs'
    ]);

    grunt.registerTask('build-docs', [
        'cssmin:docs',
        'uglify:docs',
        'jekyll:build'
    ]);

    grunt.registerTask('default', [
        'build',
        'build-docs'
    ]);
};
