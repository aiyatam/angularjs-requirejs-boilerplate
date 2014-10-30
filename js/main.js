/*global require */
(function($w) {

    "use strict";

    // Set up your config here
    require.config({
        "baseUrl": "/js/",
        "paths": {
            "text": "../bower_components/requirejs-text/text",
            "angular": "../bower_components/angular/angular"
        },
        "shim": {},
        "waitSeconds": 0
    });

    // $rfapp is a namespace that will store various items to load once require is loaded
    $w.$rfapp = $w.$rfapp || {};

    // $rfapp.deps will store an array of Angular app files to load
    $w.$rfapp.deps = $w.$flsapp.deps || [];

    // $rfapp.ngApps will store an array of Angular app names to bootstrap
    $w.$rfapp.ngApps = $w.$flsapp.ngApps || [];

    // push any dependencies needed for every page load
    //$w.$rfapp.deps.push();
    //$w.$rfapp.ngApps.push('common1'); //this is the common way of pushing the app to the main content layer, 'id-of-main-body'
    //$w.$rfapp.ngApps.push(['common2','id-of-different-object']); //this will specify to bootstrap a module to a specific ID other than the default one

    // this function will load once all dependencies are loaded
    var dependenciesLoaded = function() {

        require(['require'], function(require) {

            if(require.defined("angular")) {

                var angular = require('angular');

                angular.element(document).ready(function() {
                    var ngAppModules = [];

                    for(var i = 0; i < $w.$rfapp.ngApps.length; i++){
                        if(typeof($w.$rfapp.ngApps[i]) === 'string'){
                            ngAppModules.push($w.$rfapp.ngApps[i]);
                        }else{
                            var moduleId = $w.$rfapp.ngApps[i][0];
                            var bootstrapId = $w.$rfapp.ngApps[i][1];
                            angular.bootstrap(document.getElementById(bootstrapId), [moduleId]);
                        }
                    }

                    angular.bootstrap(document.getElementById('id-of-main-body'), ngAppModules);
                });
            }
        });

    };

    //todo: add logic for handling r.js loading
    /*if(ap.useMinJS && ap.useMinJS === "true" || document.location.search.indexOf('build') > -1) {
     if(document.location.search.indexOf('devdebug') > -1){
     require($w.$flsapp.deps, dependenciesLoaded);
     }else{
     require(['require', ap.brand + '-basepath/main.min' ], function(require) {
     require($w.$flsapp.deps, dependenciesLoaded);
     }, function() {
     require($w.$flsapp.deps, dependenciesLoaded); // on error load non minified
     });
     }
     } else {*/
    require($w.$rfapp.deps, dependenciesLoaded);
    /*}*/

})(window);


