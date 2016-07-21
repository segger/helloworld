angular.module('MyApp')
  .factory('LoginService', function($http) {
    return {
      register: function(credentials) {
        return $http.post('/auth/signup', credentials);
      },
      authenticate: function(credentials) {
        return $http.post('/auth/authenticate', credentials);
      }
    }
  });
