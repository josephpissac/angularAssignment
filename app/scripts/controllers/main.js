'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
 */

function init() {
  window.initGapi(); // Calls the init function defined on the window
}

angular.module('sbAdminApp')
  .controller('MainCtrl', function($scope,$position, $sce, $window, googleService) {
      $window.initGapi = function() {
        $scope.$apply($scope.getChannel);
      };

      $scope.getChannel = function () {
        googleService.googleApiClientReady().then(function (data) {
          $scope.channel = data;
        }, function (error) {
          console.log('Failed: ' + error)
        });
      };

      $scope.getChannel();


  });
