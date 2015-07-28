// JavaScript Document

var DC_ListB = angular.module("DC_ListB", []);

DC_ListB.controller("DC_ControllerB", function DC_ControllerB($scope, $http)
{
	$http.get("http://explosivedesigns.net/DC-B/JS/DC_Comics_B.json").success(function(data)
	{
		$scope.comicsDCB = data;
	});
});

DC_ListB.controller("BatgirlController", function BatgirlController($scope, $http, $routeParams)
{
	$http.get("http://explosivedesigns.net/DC-B/JS/DC_Comics_B.json").success(function(data)
	{
		$scope.comicsDCB = data;
		$scope.whichItem = $routeParams.batgirlDetails;
	});
});