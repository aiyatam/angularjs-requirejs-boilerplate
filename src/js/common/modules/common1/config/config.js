define([
        '../../../../vendor/bower/angular/angular',
        'jquery'
    ],
    function(angular, $) {
        'use strict';

        /**
         * Modifies the content type to not use application/json by default
         */
        return ['$provide', '$httpProvider', function($provide, $httpProvider) {
            $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';

            // Override $http service's default transformRequest
            $httpProvider.defaults.transformRequest = [function(data) {
                return angular.isObject(data) && String(data) !== '[object File]' ? $.param(data) : data;
            }];

        }];
    });