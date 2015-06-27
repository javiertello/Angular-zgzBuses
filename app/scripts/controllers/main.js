'use strict';

/**
 * @ngdoc function
 * @name tareasApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tareasApp
 */
angular.module('tareasApp')
  .controller('MainCtrl', function ($scope, $sce, $http) {
  	var urlBase = 'http://www.urbanosdezaragoza.es/frm_esquemaparadatime.php?poste=';
  	
  	$scope.poste = null;
  	$scope.url = urlBase + $scope.poste;

  	$scope.trustSrc = function(src) {
   		return $sce.trustAsResourceUrl(src);
    };
  	$scope.invalido = false;
  	$scope.mostrar = false;

  	$scope.obtener = function (){
  		if(!angular.isNumber($scope.poste)){
  			$scope.invalido = true;
  			$scope.mostrar = false;
  		} else{
  			if($scope.poste > 0 && $scope.poste < 9999){
  				$scope.invalido = false;
  				$scope.url = urlBase + $scope.poste;
  				$scope.mostrar = true;
  			} else{
  				$scope.invalido = true;
  				$scope.mostrar = false;
  			}
  		}
  	};

 	});
