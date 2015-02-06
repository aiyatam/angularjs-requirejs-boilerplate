define([
    'jquery',
    'angular',
    'text!./../data/frameworks.json',
    'angular-mocks',
    'jasmine-jquery',
    'modules/module1/app'
], function($, angular, frameworksData) {
    "use strict";

    var $scope,
        $q,
        $controller,
        $window,
        myPageController,
        frameworksServiceMock;

    describe('myPage controller:', function(){

        function createMockFrameworksService(){
            frameworksServiceMock = {
                getFrameworks: function(){
                    var d = $q.defer();

                    d.resolve(JSON.parse(frameworksData));

                    return d.promise;
                }
            };

            spyOn(frameworksServiceMock, "getFrameworks").andCallThrough();
        }

        function createController(){
            myPageController = $controller('controller1', {
                $scope: $scope,
                frameworksService: frameworksServiceMock
            });

            $scope.$digest();
        }

        beforeEach(module('module1', function($provide){
            $provide.value('$window', {
                location: {},
                document: window.document
            });
        }));

        beforeEach(inject(function($injector) {
            $scope = $injector.get('$rootScope');
            $controller = $injector.get('$controller');
            $q = $injector.get('$q');
            $window = $injector.get('$window');

            createMockFrameworksService();
        }));

        it("should load the $scope data", function(){
            createController();
            expect($scope.variable2).toBe(true);
        });

        it("should load the correct framework data", function(){
            createController();
            expect(frameworksServiceMock.getFrameworks).toHaveBeenCalled();
            expect($scope.frameworksContent.length).toBe(4);
        });

    });

});