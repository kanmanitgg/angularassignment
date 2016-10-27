angular.module('app', [])

.controller('ctrl', ['$scope', function($scope) {

  // List data and initial item
  $scope.listItems = {
    xs: "Short",
    sm: "Tall",
    md: "Grande",
    lg: "Venti",
    xl: "Trenta"
	}
  $scope.currentItem = $scope.listItems.md;

  // Natural Language Form control
  $scope.nlFieldOpen = false;
  $scope.nlFieldOpenToggle = function( key ){
    if ( key ) {
      $scope.currentItem = $scope.listItems[key];
    }
    $scope.nlFieldOpen = !$scope.nlFieldOpen;
  };
}])
