// JavaScript Document

var DC_ListB = angular.module("DC_ListB", []);

DC_ListB.controller("DC_ControllerB", ["$scope", "comicsDCB", function DC_ControllerB($scope, comicsDCB)
{
	$scope.comicsDCB = comicsDCB;
}]);

DC_ListB.controller("BatgirlController", ["$scope", "comicsDCB", /*"comicsDCB1", "comicsDCB2", "comicsDCB3", "comicsDCB4", "comicsDCB5",*/ "$http", "$stateParams", function BatgirlController($scope, comicsDCB, /*comicsDCB1, comicsDCB2, comicsDCB3, comicsDCB4, comicsDCB5,*/ $http, $stateParams)
{
	$http({
		url: "JS/DC_Comics_B.json",
		method: "get",
		params: {comicsDCBList: $stateParams.comicsDCBList}									
	})
	.then(function()
	{
		$scope.comicsDCB = comicsDCB;
	});
}]);