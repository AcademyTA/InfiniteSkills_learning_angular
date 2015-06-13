var app = angular.module('app', []);

app.controller('MainController', function($scope, $filter) {

  $scope.myobjectdata = {arr: [{name: "Zach", age: 18}, {name: "Raul", age: 25}, {name: "Martine", age: 69}, {name: "Zed", age: 23}, {name: "Rudy", age: 32}, {name: "Moesha", age: 21}, {name: "Avdi", age: 44}]}

}) 

app.filter('charlimit', function(){
  return function(input, length){
    if(!length){
      length = 10
    }
    if(!input){
      imput = ""
    }
    if(input.length <= length){
      return length
    } else {
      return input.substring(0,length) + "..."
    }
  }
})

app.filter('candrink', function(){
  return function(data, minage){
    filtered = []
    if(!minage){
      minage = 21
    }
    for(var i = 0; i < data.length; i++){
      var value = data[i]
      if(value.age > minage){
        filtered.push(value)
      }
    }
    return filtered
  }
})