//collects an array of files that follow the .spec.js format for picking up unit tests
//excludes spec files in vendor/bower
var tests = [];
for (var file in window.__karma__.files) {
    if (window.__karma__.files.hasOwnProperty(file)) {
        if (/spec\.js$/.test(file) && file.indexOf('/vendor/bower/') === -1) {
            tests.push(file);
        }
    }
}

var $w = window;
$w.$myapp = $w.$myapp || {};
$w.$myapp.deps = $w.$myapp.deps || [
    "angular",
    "angular-mocks",
    "jasmine-jquery"
];

requirejs.config({
    // Karma serves files from '/base'
    "baseUrl": "/base/js",

    "paths": {
        "text": "vendor/bower/requirejs-text/text",
        "jquery": "vendor/bower/jquery/jquery",
        "angular": "vendor/bower/angular/angular",

        //Karma specific
        "angular-mocks": "vendor/bower/angular-mocks/angular-mocks",
        "jasmine-jquery": "vendor/bower/jasmine-jquery/lib/jasmine-jquery"
    },
    "shim": {
        "angular": {
            deps: ["jquery"],
            exports: "angular"
        },
        "jquery": {exports: "$"},

        //Karma specific
        "angular-mocks": { deps: ["angular"]},
        "jasmine-jquery": { deps: ["jquery"]}
    },

    // ask Require.js to load these files (all our tests)
    deps: tests,

    // start test run, once Require.js is done
    callback: function(){
        "use strict";

        require($w.$myapp.deps, function(){
            window.__karma__.start();
        });

    }
});