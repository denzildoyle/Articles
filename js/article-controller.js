var app = angular.module('app', []);

app.controller('articleCtrl', function($scope, $location, $http) {

	var url = "https://getpocket.com/v3/get?consumer_key=64324-50c92e1b5146fdf04e9671f7&access_token=6672e060-6f27-1c01-057a-939be6&state=archive&favorite=1&sort=newest&detailType=complete";

    $http.get(url)
        .then(function(response){
            $scope.recommendations = response.data.list;
        });
});