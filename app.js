(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LCController);

LCController.$inject = ['$scope', '$filter'];

function LCController($scope, $filter) {

//$scope.displayMessage ="test";
  $scope.chkLunch = function () {

	//this could have been done in a function which returned number of items or 0 for no item/error case
	if ($scope.lunchlist === undefined || $scope.lunchlist == "")
	{
		$scope.displayMessage ="Please enter data first";
		return false;
	}
  
	var lunchItemsList = $scope.lunchlist.split(',');
	
    //display array test
	//console.log( $scope.lunchlist);
	//display count test
	//console.log( a.length);
	
	if (lunchItemsList.length<=3)
	{
		$scope.displayMessage ="Enjoy!";
	}
	else
	{
		$scope.displayMessage ="Too much!";
	}
	
  };
  
}

})();
