angular.module('app',[])
	.controller('PasswordController', function($scope) {
		$scope.password = '';
		$scope.grade = function() {
			var size = $scope.password.length;
			if(size > 8) {
				$scope.strength = "Strong";
			} else if(size > 3) {
				$scope.strength = "Medium";
			} else {
				$scope.strength = "Weak";
			}
		};

		$scope.gradeNew = function(pwd) {
			var size = pwd.length;
			if(size > 8) {
				return "Strong";
			} else if(size > 3) {
				return "Medium";
			} else {
			  return "Weak";
			}
		};
	});
