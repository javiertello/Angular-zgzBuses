"use strict";angular.module("tareasApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch","ui.bootstrap"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("tareasApp").controller("MainCtrl",["$scope","$sce","$http",function(a,b,c){var d="http://www.urbanosdezaragoza.es/frm_esquemaparadatime.php?poste=";a.poste=null,a.url=d+a.poste,a.trustSrc=function(a){return b.trustAsResourceUrl(a)},a.invalido=!1,a.mostrar=!1,a.obtener=function(){angular.isNumber(a.poste)&&a.poste>0&&a.poste<9999?(a.invalido=!1,a.url=d+a.poste,a.mostrar=!0):(a.invalido=!0,a.mostrar=!1)}}]),angular.module("tareasApp").controller("AboutCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]);