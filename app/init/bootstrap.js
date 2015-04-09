/*
 ••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
 Refer to /www/app/config/config.js to set and modify GLOBALS.
 ••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
 */


import 'jquery';
import angular from 'angular';
import 'jcanvas';

import mav from 'app/init/maverick';
import 'app/controller';
import 'app/directives';
import 'app/services';
import 'app/factories';

angular.bootstrap(document, ['maverick']);