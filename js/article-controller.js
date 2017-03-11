var app = angular.module('app', []);

app.controller('articleCtrl', function($scope, $location, $http) {

	var url = "http://localhost/articles/api.php";

    $http.get(url)
        .then(function(response){
            $scope.recommendations = response.data.list;
        });
});