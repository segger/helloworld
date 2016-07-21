angular.module('MyApp')
    .factory('NerdService', ['$http', function($http) {
        return {
            get: function() {
                return $http.get('/api/nerds');
            },
            create: function(nerdData) {
                return $http.post('/api/nerds', nerdData);
            },
            delete: function(id) {
                return $http.delete('/api/nerds/' + id);
            }
        }
    }]);
