// JavaScript Document

var myAppDCB = angular.module("myAppDCB", ["ui.router", "DC_ListB"]);

myAppDCB.config(["$urlRouterProvider", "$stateProvider", function($urlRouterProvider, $stateProvider)
{
	$urlRouterProvider.otherwise("/");
	
	$stateProvider
		.state("#home", {
			url: "/#home",
			templateUrl: "index.html"
		})
		.state("#batgirl", {
			url: "/#batgirl",
			templateUrl: "Partials/dc_b_list.html",
			controller: "DC_ControllerB",
			resolve: {
				comicsDCB: ["$http", function DC_ControllerB($http) {
					return $http.get("JS/DC_Comics_B.json").then(function(response) {
						return response.data;
					});
				}]
			}
		})
		.state("batgirlDetails", {
			url: "/batgirlComics/:comicsDCBList",
			templateUrl: "Partials/batgirl.html",
			controller: "BatgirlController",
			resolve: {
				comicsDCB: ["$http", function DC_ControllerB($http) {
					return $http.get("JS/DC_Comics_B.json").then(function(response) {
						return response.data;
					});
				}]/*,
				comicsDCB1: ["$http", function DC_ControllerB($http) {
					return $http.get("JS/DC_Comics_B.json").then(function(response) {
						return response.data;
					});
				}],
				comicsDCB2: ["$http", function DC_ControllerB($http) {
					return $http.get("JS/DC_Comics_B.json").then(function(response) {
						return response.data;
					});
				}],
				comicsDCB3: ["$http", function DC_ControllerB($http) {
					return $http.get("JS/DC_Comics_B.json").then(function(response) {
						return response.data;
					});
				}],
				comicsDCB4: ["$http", function DC_ControllerB($http) {
					return $http.get("JS/DC_Comics_B.json").then(function(response) {
						return response.data;
					});
				}],
				comicsDCB5: ["$http", function DC_ControllerB($http) {
					return $http.get("JS/DC_Comics_B.json").then(function(response) {
						return response.data;
					});
				}]*/
			}
		})
		
	
	/*$stateProvider.
	when("DC-B/index.html",
	{
		templateUrl: "Partials/dc_b_list.html",
		controller: "DC_ControllerB"
	}).
	when("/batgirl.html:batgirlDetails",
	{
		templateUrl: "Partials/batgirl.html",
		controller: "BatgirlController"
	}).
	otherwise(
	{
		templateUrl: "Partials/dc_b_list.html",
		controller: "DC_ControllerB"
	});*/
}]);