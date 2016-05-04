module.exports = function(grunt) {
    grunt.config('cssmin', {
        options: {
            keepSpecialComments: 0
        },
        dist: {
            options: {
                banner: '<%= banner %>'
            },
            files: {
                'dist/bbc-bootstrap.min.css': 'dist/bbc-bootstrap.css',
                'docs/assets/css/bbc-bootstrap.min.css': 'dist/bbc-bootstrap.css'
            }
        },
        docs: {
            files: {
                'docs/assets/built/docs.min.css': [
                    'docs/assets/css/docs.css',
                    'docs/assets/css/docs-overrides.css',
                    '<%= dirs.bower %>/syntax.css/syntax.css'
                ]
            }
        }
    });
};
