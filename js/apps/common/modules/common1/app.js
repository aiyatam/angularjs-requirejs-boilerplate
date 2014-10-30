define([
        'angular',

        './config/config',

        /* angular modules for dependency injection */
        'common/utils/exception-handler'
    ],
    function (angular, config) {
        'use strict';

        /**
         * @ngdoc object
         * @name common1
         * @description
         * Sets up the main angular 'common1' module
         */
        var App = angular.module("common1", [
            'exception-handler'
        ]);

        App.config(config);
    });