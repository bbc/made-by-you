module.exports = function(grunt) {
    grunt.config('watch', {
        options: {
            spawn: false
        },
        dist: {
            files: ['components/*.less', 'overrides/*.less', 'utils/*.less', 'bbc.less'],
            tasks: ['build', 'copy:docs']
        },
        docs: {
            files: ['docs/**/*.html', 'docs/assets/css/*.css'],
            tasks: ['cssmin:docs', 'jekyll:build']
        }
    });
};
