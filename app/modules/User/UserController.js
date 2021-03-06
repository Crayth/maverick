'use strict';

import mav from 'app/init/maverick';

mav.controller('UserController',
	function UserController($scope){

		$scope.user = {
			health: 50
		};

		$scope.upHealth = function(user){
			user.health++;
		};

		$scope.downHealth = function(user){
			user.health--;
		};
	}
);