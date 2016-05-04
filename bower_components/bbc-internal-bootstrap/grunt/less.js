module.exports = function(grunt) {
    grunt.config('less', {
        dist: {
            files: {
                '_build/built.css': 'bbc.less'
            }
        }
    });
};
