(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LCController);

LCController.$inject = ['$scope', '$filter'];
function LCController($scope, $filter) {

//$scope.displayMessage ="test";
  $scope.chkLunch = function () {

	var a = $scope.lunchlist.split(',');
	
    //display array test
	//console.log( $scope.lunchlist);
	//display count test
	//console.log( a.length);
	
	if (a.length<=3)
		$scope.displayMessage ="Enjoy!";
	else
		$scope.displayMessage ="Too much!";
	
  };
  
}

})();
