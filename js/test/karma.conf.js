
module.exports = function(config) {
    "use strict";

    config.set({

        // base path, that will be used to resolve files and exclude
        basePath: './../',

        // frameworks to use
        frameworks: [
            'jasmine',
            'requirejs'
        ],

        browserStack: {
            username: 'your_username',
            accessKey: 'your_access_key'
        },

        customLaunchers: {
            bs_ie8: {
                os: 'Windows',
                os_version: '7',
                base: 'BrowserStack',
                browser: 'ie',
                browser_version: '8.0'
            }
        },

        plugins: [
            'karma-junit-reporter',
            'karma-browserstack-launcher',
            'karma-jasmine',
            'karma-requirejs'
        ],


        // list of files / patterns to load in the browser
        //{pattern: 'quicklane/clientlibs_quicklane/js/modules/**/*.js', included: false},
        files: [
            {pattern: 'js/common/**/*.js', included: false},
            {pattern: 'js/modules/**/*.js', included: false},
            {pattern: 'bower_components/**/*.js', included: false},

            'js/test/test-main.js',

            //fixtures
            {pattern: 'common-owner/clientlibs_base/js/common/**/*.html', watched: true, served: true, included: false},
            {pattern: 'common-owner/clientlibs_base/js/common/**/*.json', watched: true, served: true, included: false},
            {pattern: 'common-owner/clientlibs_base/js/modules/**/*.html', watched: true, served: true, included: false},
            {pattern: 'common-owner/clientlibs_base/js/modules/**/*.json', watched: true, served: true, included: false},
            {pattern: 'common-owner/clientlibs_base/js/test/mock/*.json', watched: true, served: true, included: false},

            {pattern: 'quicklane/clientlibs_quicklane/js/modules/**/*.html', watched: true, served: true, included: false},
            {pattern: 'quicklane/clientlibs_quicklane/js/test/mock/*.json', watched: true, served: true, included: false}
        ],

        //preprocessors: {
        //    "common-owner/clientlibs_base/js/**/*.html": "html2js"
        //},

        // list of files to exclude
        exclude: [
            'common-owner/clientlibs_base/js/main.js'
        ],


        // test results reporter to use
        // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
        reporters: ['dots','coverage'],

        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,


        // Start these browsers, currently available:
        // - Chrome
        // - ChromeCanary
        // - Firefox
        // - Opera (has to be installed with `npm install karma-opera-launcher`)
        // - Safari (only Mac; has to be installed with `npm install karma-safari-launcher`)
        // - PhantomJS
        // - IE (only Windows; has to be installed with `npm install karma-ie-launcher`)
        browsers: ['bs_ie8'],

        browserDisconnectTimeout : 100000, // default 2000
        browserDisconnectTolerance : 0, // default 0

        // If browser does not capture in given timeout [ms], kill it
        captureTimeout : 4*60*1000, //default 60000

        browserNoActivityTimeout : 4*60*1000, //default 10000

        // Continuous Integration mode
        // if true, it capture browsers, run tests and exit
        singleRun: false
    });
};
