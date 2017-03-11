var app = angular.module('app', []);

app.controller('articleCtrl', function($scope, $location, $http) {

	var url = "http://localhost/articles/api.php";

    $http.get(url)
        .then(function(response){
            $scope.recommendations = response.data.list;
        });
});

app.filter( 'domain', function () {
	return function ( input ) {
		var parser = document.createElement('a');
		parser.href = input;
		return parser.hostname;
	};
});