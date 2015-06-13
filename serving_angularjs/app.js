var app = angular.module('app', []);

app.controller('MainController', function($scope,myFactory) {
  console.log(myFactory.getdata())
  console.log(myFactory.mydata)
  // cannot access mydata, only the getdata() function can.
})

app.factory('myFactory',function() {
  var mydata = "this is some other data"
  var myfunc = function() {}
  return {
    getdata: function() {
      return mydata
    }  
  }
})