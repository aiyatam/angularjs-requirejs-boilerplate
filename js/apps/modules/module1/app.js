define([
        'angular',

        './controllers/controller1',
        './directives/directive1',
        './factories/factory1',
        './filters/filter1',
        './routes/route1',
        './services/service1',

        /* angular modules for dependency injection */
        'common/modules/common1/app',
        'common/utils/exception-handler'
    ],
    function(angular, config, controller1, directive1, factory1, filter1, route1, service1) {
        'use strict';

        /**
         * @ngdoc object
         * @name module1
         * @description
         * Angular module that loads and constructs "module1"
         */
        var App = angular.module('module1', [
            // load other modules and use Angular dependency injection
            'common1',
            'exception-handler'
        ]);

        // load each of the module's elements here
        App.config(route1);
        App.controller('controllerName1', controller1);
        App.directive('directiveName1', directive1);
        App.factory('factoryName1', factory1);
        App.filter('filterName1', filter1);
        App.service('serviceName1', service1);

    });