/*global requirejs, require */

var tests = [];
for (var file in window.__karma__.files) {
    if (window.__karma__.files.hasOwnProperty(file)) {
        if (/spec\.js$/.test(file)) {
            tests.push(file);
        }
    }
}

var $w = window;
$w.karmatesting = true;
$w.$rfapp = $w.$rfapp || {};
$w.$rfapp.deps = $w.$rfapp.deps || [
    "modernizr",
    "angular",
    "angular-mocks",
    "jasmine-jquery"
];

requirejs.config({
    // Karma serves files from '/base'
    "baseUrl": "/base/js/",

    "paths": {
        //Karma specific
        "modernizr": "../bower_components/modernizr/modernizr",
        "angular-mocks": "../bower_components/angular-mocks/angular-mocks",
        "jasmine-jquery": "../bower_components/jasmine-jquery/lib/jasmine-jquery",

        "text": "../bower_components/requirejs-text/text",
        "angular": "vendor/angular-1.2.0",
        "jquery": "../bower_components/jquery/jquery"
    },
    "shim": {
        //Karma specific
        "angular-mocks": { deps: ["angular"]},
        "jasmine-jquery": { deps: ["jquery"]},

        "angular": {exports: "angular"},
        "jquery": { exports: "$"}
    },

    // ask Require.js to load these files (all our tests)
    deps: tests,

    waitSeconds: 3,

    // start test run, once Require.js is done
    callback: function(){
        "use strict";

        require($w.$rfapp.deps, function(){
            window.__karma__.start();
        });

    }
});