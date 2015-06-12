var app = angular.module('app', ['controllers']);

angular.module('controllers', []).controller('MainController', function($scope) {
  $scope.myarr = [1,2,3,4,5,5] // the extra 5 will break the code, need to add $index
  $scope.users = [{name: "Kyle", age: 28}, {name: "Demar", age: 26}, {name: "Jonas", age: 25}, {name: "Greivis", age: 29}]
  $scope.ob = {name: "Michael", age:50, position:"Shooting Guard"}
})