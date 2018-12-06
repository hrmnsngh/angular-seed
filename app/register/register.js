'use strict';

angular.module('myApp.regist',['ngRoute'])

.config(['$routeProvider',function($routeProvider) {
    $routeProvider.when('/register',{
        templateUrl: 'register/register.html',
        controller: 'registerCtrl'
    });
}])

.controller('registerCtrl',['$scope',function($scope){
    $scope.username;
    $scope.password;
    $scope.fullName;
    $scope.addressLine1;
    $scope.addressLine2;
    $scope.city;
    $scope.pincode;
    
}])