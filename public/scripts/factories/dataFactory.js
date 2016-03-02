myApp.factory('DataFactory', ['$http', function($http) {
    // PRIVATE
    var favorites = undefined;
    var animal = "";

    var getData = function() {
        console.log('getting data from server');
        var promise = $http.get('/data').then(function(response) {
            favorites = response.data;
            console.log('Async data response:', favorites);
        });

        return promise;
    };

    var addFavorite = function(animalData){
        console.log('getting data from server');
        var promise = $http.post('/data', animalData).then(function(response) {
        });
    };

    //PUBLIC
    var publicApi = {
        defineAnimal: function(animaltype){
            animal = animaltype;
        },
        returnAnimal: function(){
            return animal;
        },
        sendFavorite: function(animal){
            addFavorite(animal);
        },
        retrieveData: function() {
            return getData();
        },
        animalData: function() {
            return favorites;
        }
    };

    return publicApi;

}]);