myApp.controller('Home', ['$scope', 'DataFactory', function($scope, DataFactory) {
    $scope.dataFactory = DataFactory;
    $scope.animal = '';
    $scope.search = false;

    $scope.animalSearch = function() {
        // check option value
        if($scope.animal != '') {
            $scope.dataFactory.defineAnimal($scope.animal);
            //console.log($scope.dataFactory.returnAnimal());
            $scope.search = true;
        } else {
            // invalid, reset bool
            $scope.search = false;
        }
    }
}]);

