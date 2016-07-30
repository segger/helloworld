angular.module('MyApp')
  .controller('LoginController', ['$scope', 'LoginService', function($scope, LoginService) {

    $scope.credentials = {
      username: '',
      password: ''
    };

    $scope.register = function() {
      $scope.successful = false;
      LoginService.register($scope.credentials)
        .then(function(data) {
            console.log(data);
            $scope.message = data.msg;
            $scope.successful = data.success;
        });
    };

    $scope.authenticate = function() {
      $scope.successful = false;
      LoginService.authenticate($scope.credentials)
        .then(function (data) {
          console.log(data);
          $scope.successful = data.success;

        });
     };

     $scope.access = function(){
       $scope.successful = false;
       LoginService.access()
       .then(function (data) {
         console.log(data);
         $scope.successful = data.success;
         $scope.message = data.msg;
       });
     };

     $scope.reset = function() {
       LoginService.clearToken();
     };
}]);
