define([
        'angular',

        './controllers/controller1',
        './services/frameworks',

        /* angular modules for dependency injection */
        'common/utils/exception-handler'
    ],
    function(angular, controller1, frameworksService) {
        'use strict';

        /**
         * @ngdoc object
         * @name module1
         * @description
         * Angular module that loads and constructs "module1"
         */
        var App = angular.module('module1', [
            // load other modules and use Angular dependency injection
            'exception-handler'
        ]);

        // load each of the module's elements here
        App.controller('controller1', controller1);
        App.service('frameworksService', frameworksService);

    });