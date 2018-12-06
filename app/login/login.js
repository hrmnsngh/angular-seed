'use strict';

angular.module('myApp.login', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/login', {
    templateUrl: 'login/login.html',
    controller: 'loginCtrl'
  });
}])

.controller('loginCtrl', ['$scope',function($scope) {
  $scope.username;
  $scope.password;
  $scope.showPassword=false;
  $scope.showPass = function () {
    $scope.showPassword = !$scope.showPassword;
  };
}]);