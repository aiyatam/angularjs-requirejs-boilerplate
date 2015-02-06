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
    return ['$scope', '$q', 'frameworksService',
        function($scope, $q, frameworksService) {

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
             * @ngdoc property
             * @name myAwesomeHeading
             * @propertyOf module1.controller:controller1
             * @description
             * Stores the heading for my controller
             *
             * @returns {string} Heading for the controller
             */
            $scope.myAwesomeHeading = 'This is my awesome heading!';

            /**
             * @ngdoc property
             * @name frameworksContent
             * @propertyOf module1.controller:controller1
             * @description
             * Stores the content to show
             * @returns {object} Content for the frameworks
             */
            $scope.frameworksContent = [];

            /**
             * @ngdoc method
             * @name _init
             * @methodOf module1.controller:controller1
             * @description
             * Initializes the controller my calling the frameworks service
             * @private
             */
            function _init(){
                frameworksService.getFrameworks().then(function(response){
                    $scope.frameworksContent = response.content;
                });
            }

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

                /*serviceName1.serviceMethod()
                    .success(function(){
                        d.resolve('something');
                    });*/
                d.resolve('something');

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


            $scope.$evalAsync(_init);

        }];

});