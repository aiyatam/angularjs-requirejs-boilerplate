(function ($w) {

    "use strict";

    // $myapp is a namespace that will store various items to load once require is loaded
    $w.$myapp = $w.$myapp || {};

    // $rfapp.deps will store an array of Angular app files to load
    $w.$myapp.deps = $w.$myapp.deps || [];

    // $rfapp.ngApps will store an array of Angular app names to bootstrap
    $w.$myapp.ngApps = $w.$myapp.ngApps || [];

    // initialize/bootstrap the app
    function _init(){
        angular.element(document).ready(function () {
            angular.bootstrap(document, $w.$myapp.ngApps);
        });
    }

    //skips require config if using almond build
    if(typeof(require) !== 'undefined'){
        // Set up your config here
        require.config({
            "baseUrl": "js/",
            "paths": {
                "text": "vendor/bower/requirejs-text/text",
                "jquery": "vendor/bower/jquery/jquery",
                "angular": "vendor/bower/angular/angular"
            },
            "shim": {
                "angular": {exports: "angular"},
                "jquery": {exports: "$"}
            },
            "waitSeconds": 0
        });

        $w.$myapp.deps.push('angular');

        require($w.$myapp.deps, _init);
    }else{
        _init();
    }

})(window);

