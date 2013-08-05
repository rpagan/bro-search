'use strict';

/* App Module */

angular.module('brosearch', ['brosearchFilters', 'brosearchServices']).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/brothers', {templateUrl: 'partials/brother-list.html',   controller: BrotherListCtrl}).
      when('/brothers/:brotherId', {templateUrl: 'partials/brother-detail.html', controller: BrotherDetailCtrl}).
      otherwise({redirectTo: '/brothers'});
}]);
