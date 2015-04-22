'use strict';

/**
 * @ngdoc function
 * @name panthaProfileApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the panthaProfileApp
 */
angular.module('panthaProfileApp')
  .controller('MainCtrl', function ($scope, $modal) {

  // fires on click of contact button
  $scope.contact = function () {
    $modal.open({
      templateUrl: 'views/contactModal.html',
      controller: function ($scope, $modalInstance) {

			  $scope.ok = function () {
			    $modalInstance.dismiss('cancel');
			  };

			  $scope.cancel = function () {
			    $modalInstance.dismiss('cancel');
			  };
      }
    });
  };

});
