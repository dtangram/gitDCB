// JavaScript Document

var myAppDCB = angular.module("myAppDCB", ["ngRoute", "DC_ListB"]);

myAppDCB.config(["$routeProvider", function($routeProvider)
{
	$routeProvider.
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
	});
}]);