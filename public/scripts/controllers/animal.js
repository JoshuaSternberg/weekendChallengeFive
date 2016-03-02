myApp.controller('Animal', ['$scope', '$http', 'DataFactory', function($scope, $http, DataFactory) {
    $scope.dataFactory = DataFactory;
    $scope.animal = {};

    function petFinder() {
        // API key
        var key = '6be29517cbfd2083dc09cc2ab2132baa';

        var baseURL = 'http://api.petfinder.com/';
        var query = 'pet.getRandom';
        query += '?key=' + key;
        query += '&animal=' + $scope.dataFactory.returnAnimal();
        query += '&size=XL';
        query += '&location=55303';
        query += '&output=basic';
        query += '&format=json';

        var request = baseURL + encodeURI(query) + '&callback=JSON_CALLBACK';
        console.log(request);

        $http.jsonp(request).then(
            function(response) {
                tempAnimal = response.data.petfinder.pet;
                $scope.animal.photo = tempAnimal.media.photos.photo[2].$t;
                $scope.animal.name = tempAnimal.name.$t;
                $scope.animal.description = tempAnimal.description.$t;
                console.log($scope.animal);
            }
        );
    }
    petFinder();

    $scope.sendFavorite = function(animal){
        console.log("Help!");
        $scope.dataFactory.sendFavorite(animal);
    }
}]);