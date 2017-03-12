var app = angular.module('app', []);

app.controller('articleCtrl', function($scope, $location, $http) {

	var url = "http://localhost/articles/api.php";

    $http.get(url)
        .then(function(response){
            $scope.recommendations = response.data.list;
        });
});

app.filter( 'domain', function () {
	return function (input) {
		var parser = document.createElement('a');
		parser.href = input;
		return parser.hostname;
	};
});

app.filter('toArray', function () {
  return function (obj, addKey) {
    if (!angular.isObject(obj)) {return obj;}
    if ( addKey === false ) {
      return Object.keys(obj).map(function(key) {
        return obj[key];
      });
    } else {
      return Object.keys(obj).map(function (key) {
        var value = obj[key];
        return angular.isObject(value) ?
          Object.defineProperty(value, '$key', { enumerable: false, value: key}) :
          { $key: key, $value: value };
      });
    }
  };
});