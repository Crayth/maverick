'use strict';

maverick.directive('user', function(){
	return {
		controller: function($scope){
			$scope.user = {
				health: 50
			}
		},

		link: function(scope, element){
			var up = angular.element($('#upBtn'));
			up.bind('click', function(e){
				scope.user.health++;
				scope.$apply();
			})

			var down = angular.element($('#downBtn'));
			down.bind('click', function(e){
				scope.user.health--;
				scope.$apply();
			})
		}
	}
})