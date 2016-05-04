module.exports = function(grunt) {
    grunt.config('concat', {
        options: {
            banner: '<%= banner %>'
        },
        dist: {
            src: ['_build/built.css', 'bower_components/suit-utils-*/*.css'],
            dest: 'dist/bbc-bootstrap.css'
        }
    });
};
