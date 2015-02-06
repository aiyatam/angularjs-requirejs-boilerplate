define([
    'angular'
], function(angular) {
    "use strict";

    /**
     * @ngdoc object
     * @name exception-handler
     * @description
     * Adds a factory for outputting additional information with any issues in Angular
     */
    var app = angular.module('exception-handler', []);

    app.factory('$exceptionHandler', function() {
        return function errorCatcherHandler(exception, cause) {
            //debugger;
            console.error(exception);
            console.error(cause);
        };
    });
});