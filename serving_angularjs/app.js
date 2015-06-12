var app = angular.module('app', []);

app.controller('MainController', function($scope) {
  $scope.mydata = {arr: ["Zach", "Raul", "Martine", "Zed", "Rudy", "Moesha", "Avdi"]}
  $scope.myobjectdata = {arr: [{name: "Zach", age: 18}, {name: "Raul", age: 25}, {name: "Martine", age: 69}, {name: "Zed", age: 23}, {name: "Rudy", age: 32}, {name: "Moesha", age: 21}, {name: "Avdi", age: 44}]}
}) 

