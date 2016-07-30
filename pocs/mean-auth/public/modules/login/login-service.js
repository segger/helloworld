angular.module('MyApp')
  .factory('LoginService', function($http, $sessionStorage) {
    return {
      register: function(credentials) {
        return $http.post('/auth/signup', credentials)
          .then(function(response) {
            return response.data;
          }, function(err) {
            console.log(err);
          });
      },
      authenticate: function(credentials) {
        return $http.post('/auth/authenticate', credentials)
          .then(function(response) {
            if(response.data.success) {
              $sessionStorage.token = response.data.token;
              console.log($sessionStorage.token);
            }
            return response.data;
          }, function(err) {
            console.log(err);
          });
      },
      clearToken: function() {
        delete $sessionStorage.token;
      },
      access: function() {
        var config = {
          headers: {
            'Authorization': $sessionStorage.token
          }
        };
        return $http.get('/auth/memberinfo', config)
          .then(function(response) {
            return response.data;
          }, function(err) {
            console.log(err);
          });
      }
    }
  });
