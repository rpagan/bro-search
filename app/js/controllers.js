'use strict';

/* Controllers */

function BrotherListCtrl($scope, Brother) {
  $scope.brothers = Brother.query();
  $scope.orderProp = 'age';
}

//BrotherListCtrl.$inject = ['$scope', 'Brother'];



function BrotherDetailCtrl($scope, $routeParams, Brother) {
  $scope.brother = Brother.get({brotherId: $routeParams.brotherId}, function(brother) {
    $scope.mainImageUrl = brother.images[0];
  });

  $scope.setImage = function(imageUrl) {
    $scope.mainImageUrl = imageUrl;
  }
}

//BrotherDetailCtrl.$inject = ['$scope', '$routeParams', 'Brother'];
