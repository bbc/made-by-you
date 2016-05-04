module.exports = function(grunt) {
    grunt.config('connect', {
        docs: {
            options: {
                port: 9001,
                base: '_site',
                hostname: 'localhost',
                keepalive: true
            }
        }
    });
};
