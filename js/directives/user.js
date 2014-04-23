'use strict';

maverick.directive('user', function(){
	return {
		controller: function($scope){
			$scope.user = {
				health: 50,
				x: 25,
				y: 25,
				width: 50,
				height: 50,
				fill: 'black'
			}
		},

		link: function(scope, element){
			var up = angular.element($('#upBtn'));
			up.bind('click', function(e){
				scope.user.health++;
				scope.$apply();
			});

			var down = angular.element($('#downBtn'));
			down.bind('click', function(e){
				scope.user.health--;
				scope.$apply();
			});

			angular.element(document).bind("keyup", function(event){
				switch(event.which){
					case 37:
						if(scope.user.x >= 50) scope.user.x -= 50;
						break;
					case 38:
						if(scope.user.y >= 50) scope.user.y -= 50;
						break;
					case 39:
						if(scope.user.x <= 450) scope.user.x += 50;
						break;
					case 40:
						if(scope.user.y <= 450) scope.user.y += 50;
						break;
					default:
						break;
				}
				scope.$apply();
				$('#canvas').clearCanvas().drawRect({
					fillStyle: scope.user.fill,
					x: scope.user.x, 
					y: scope.user.y,
					width: scope.user.width,
					height: scope.user.height
				});
			});
		}
	}
})