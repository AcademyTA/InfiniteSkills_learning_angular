var app = angular.module('app', []);

app.controller('MainController', function($scope, constService, valService, twitterAPI) {
  console.log(constService, valService())
  console.log(twitterAPI)
  twitterAPI.url = "newurl"
  console.log(twitterAPI)
})

app.constant('constService', {attr: "This is const data!"})

app.value('valService', function(){
  return "This is being returned from a function in valService"
})
app.constant('twitterAPI', {url: "api.twitter.com/v1/"})