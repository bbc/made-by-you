module.exports = function(grunt) {
    grunt.config('copy', {
        docs: {
            files: {
                '_site/assets/css/bbc-bootstrap.min.css': 'dist/bbc-bootstrap.min.css'
            }
        }
    });
};
