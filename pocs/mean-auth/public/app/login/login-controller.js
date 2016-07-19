angular.module('MyApp')
  .controller('LoginController', ['$scope', function($scope, LoginService) {
  
    $scope.credentials = {
      username: '',
      password: ''
    };
    
    $scope.register = function() {
      LoginService.register($scope.credentials)
        .success(function(data) {
          console.log(data);
        })
        .error(function(data) {
          console.log(data);
        });
    };
    
    $scope.authenticate = function() {
      LoginService.authenticate($scope.credentials)
        .success(function (data) {
          console.log('sucess: ' + data);
        })
        .error(function (data) {
          console.log('error: ' + data);
        });
     };
}]);