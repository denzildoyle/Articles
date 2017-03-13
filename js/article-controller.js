var app = angular.module('app', ['ngProgress']);

app.controller('articleCtrl', function($scope, $location, $http,ngProgressFactory) {
	$scope.progressbar = ngProgressFactory.createInstance();
	$scope.progressbar.setHeight('3px');
	$scope.progressbar.setColor('#BF3133');
	$scope.progressbar.start();

	var url = "http://localhost/articles/api.php";

    $http.get(url)
        .then(function(response){
            $scope.recommendations = response.data.list;
			$scope.progressbar.complete();
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

app.filter('trim', function () {
    return function (value, wordwise, max, tail) {
        if (!value){return '';}

        max = parseInt(max, 10);
        if (!max){return value;}
        if (value.length <= max){ return value;}

        value = value.substr(0, max);
        if (wordwise) {
            var lastspace = value.lastIndexOf(' ');
            if (lastspace !== -1) {
              //Also remove . and , so its gives a cleaner result.
              if (value.charAt(lastspace-1) === '.' || value.charAt(lastspace-1) === ',') {
                lastspace = lastspace - 1;
              }
              value = value.substr(0, lastspace);
            }
        }

        return value + (tail || ' …');
    };
});