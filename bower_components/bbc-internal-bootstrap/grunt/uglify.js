module.exports = function(grunt) {
    grunt.config('uglify', {
        docs: {
            files: {
                'docs/assets/built/docs.min.js': [
                    '<%= dirs.bower %>/jquery/dist/jquery.js',
                    '<%= dirs.bower %>/bootstrap/js/affix.js',
                    '<%= dirs.bower %>/bootstrap/js/collapse.js',
                    '<%= dirs.bower %>/bootstrap/js/scrollspy.js',
                    '<%= dirs.bower %>/bootstrap/js/dropdown.js',
                    'docs/assets/scripts/docs.js'
                ]
            }
        }
    });
};
