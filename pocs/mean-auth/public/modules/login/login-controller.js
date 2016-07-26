angular.module('MyApp')
  .controller('LoginController', ['$scope', 'LoginService', function($scope, LoginService) {

    $scope.credentials = {
      username: '',
      password: ''
    };

    $scope.action = {
      header: 'Access',
      description: 'try to access the site'
    };

    $scope.successful = false;

    $scope.register = function() {
      LoginService.register($scope.credentials)
        .success(function(data) {
          console.log(data);
        })
        .error(function(err) {
          console.log(err);
        });
    };

    $scope.authenticate = function() {
      LoginService.authenticate($scope.credentials)
        .success(function (data) {
          console.log('sucess: ' + data);
          $scope.action.header = 'Authenticate';
          $scope.action.description = 'is authenticated';
          $scope.successful = true;
        })
        .error(function (err) {
          console.log('error: ' + err);
        });
     };

     $scope.access = function(){
       LoginService.access()
       .success(function (data) {
         console.log('success: ' + data);
       })
       .error(function (err) {
         console.log('error: ' + err);
       });
     };
}]);
