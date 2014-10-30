define([
    'angular'
], function(angular) {
    "use strict";

    /**
     * @ngdoc object
     * @name module1.controller:controller1
     * @description
     * Example controller - we wrap the function with bracket notation for proper handling in r.js
     */
    return ['$scope', '$q', '$window', '$filter', 'serviceName1',
        function($scope, $q, $window, $filter, serviceName1) {

            /**
             * @ngdoc property
             * @name _variable1
             * @propertyOf module1.controller:controller1
             * @description
             * Variable (private)
             * @returns {Object} Example variable object
             * @private
             */
            var _variable1 = {};

            /**
             * @ngdoc method
             * @name _function1
             * @propertyOf module1.controller:controller1
             * @description
             * Example private function
             * @returns {object} Promise object
             */
            function _function1(){
                var d = $q.defer();

                serviceName1.serviceMethod()
                    .success(function(){
                        d.resolve('something');
                    });

                return d.promise;
            }

            /**
             * @ngdoc property
             * @name variable2
             * @propertyOf module1.controller:controller1
             * @description
             * Variable within the scope
             * @returns {boolean} Example flag
             */
            $scope.variable2 = true;

            /**
             * @ngdoc method
             * @name function2
             * @methodOf module1.controller:controller1
             * @description
             * Example method in the scope
             */
            $scope.function2 = function() {

            };

            /**
             * @ngdoc event
             * @name event-name
             * @eventOf module1.controller:controller1
             * @description
             * Example event
             */
            $scope.$on('event-name', function(event, data) {

            });


            angular.element(document).ready(function() {
                _function1();
            });

        }];

});