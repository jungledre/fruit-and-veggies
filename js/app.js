var foodApp = angular.module('FoodApp', []);

foodApp.run(function(){
  console.log('App Started');
});

function randomize(){
  return (Math.round(Math.random())-0.5);
}

foodApp.controller('FoodApp',['$scope', function($scope){
  $scope.fruit = []
  $scope.vegetables = []
  $scope.allFoods = fruit.concat(vegetables).sort(randomize)

  $scope.addFruit = function(currentIndex){
    $scope.fruit.unshift({name:$scope.allFoods[currentIndex]})
    $scope.allFoods.splice([currentIndex],1)
  }

  $scope.addVegetables = function(currentIndex){
    $scope.vegetables.unshift({name:$scope.allFoods[currentIndex]})
    $scope.allFoods.splice([currentIndex],1)
  }

  $scope.returnFruit = function(currentIndex){
    $scope.allFoods.unshift($scope.fruit[currentIndex].name)
    $scope.fruit.splice([currentIndex],1)
  }

  $scope.returnVegetables = function(currentIndex){
    $scope.allFoods.unshift($scope.vegetables[currentIndex].name)
    $scope.vegetables.splice([currentIndex],1)
  }
}]);

