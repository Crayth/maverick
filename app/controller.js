/*
 ••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
 Define our App's global Controller.
 ••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
 */

import mav from 'app/init/maverick';
import 'app/modules/user/userController';
import 'app/modules/user/userDirectives';

var MavController = function($scope){

};

mav.controller('MavController', ['$scope']);