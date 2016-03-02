myApp.controller('Favorites', ['$scope', 'DataFactory', function($scope, DataFactory) {
    $scope.dataFactory = DataFactory;
    $scope.animals = [];

    $scope.dataFactory.retrieveData().then(function() {
        $scope.animals = $scope.dataFactory.animalData();
        console.log($scope.animals);
        console.log('Working');
    });


    //if($scope.dataFactory.animalData() === undefined) {
    //    // initial load
    //
    //} else {
    //    $scope.animals = $scope.dataFactory.animalData();
    //}
}]);