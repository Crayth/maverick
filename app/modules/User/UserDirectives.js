

import mav from 'app/init/maverick';

mav.directive('user', function(){
    var initUser = function($scope){
        var sceneWidth = $('#mainScene').width();
        var sceneHeight = $('#mainScene').height();
        $scope.user = {
            health: 50,
            x: (sceneWidth*.1)/2,
            y: (sceneHeight*.1)/2,
            tileWidth: sceneWidth*.1,
            tileHeight: sceneHeight*.1,
            sceneWidth: sceneWidth,
            sceneHeight: sceneHeight,
            height: 50,
            fill: 'black',
            isFightingEnemy: false
        };

        redrawUserOnCanvas($scope);
    };

    var initBindings = function($scope){
        var up = angular.element($('#upBtn'));
        up.bind('click', function(){
            $scope.user.health++;
            $scope.$apply();
        });

        var down = angular.element($('#downBtn'));
        down.bind('click', function(){
            $scope.user.health--;
            $scope.$apply();
        });

        angular.element(document).bind("keyup", function(event){
            switch(event.which){
                case 37:
                    if($scope.user.x >= $scope.user.tileWidth) $scope.user.x -= $scope.user.tileWidth;
                    break;
                case 38:
                    if($scope.user.y >= $scope.user.tileHeight) $scope.user.y -= $scope.user.tileHeight;
                    break;
                case 39:
                    if($scope.user.x <= $scope.user.sceneWidth-$scope.user.tileWidth) $scope.user.x += $scope.user.tileWidth;
                    break;
                case 40:
                    if($scope.user.y <= $scope.user.sceneHeight-$scope.user.tileHeight) $scope.user.y += $scope.user.tileHeight;
                    break;
                case 32:
                    $('#canvas').toggle();
                    $('#battleScene').toggle();
                    break;
                default:
                    break;
            }

            $scope.$apply();
            redrawUserOnCanvas($scope);
        });
    };

    var redrawUserOnCanvas = function($scope){
        $('#canvas').clearCanvas().drawRect({
            fillStyle: $scope.user.fill,
            x: $scope.user.x,
            y: $scope.user.y,
            width: $scope.user.tileWidth,
            height: $scope.user.tileHeight
        });
    };

    return {
		controller: function($scope){
            initUser($scope);
            initBindings($scope);
		},

		link: function(scope){

		}
	};
});