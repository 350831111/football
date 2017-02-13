function homeController($scope,$http,services){
	services.access_Data("data/data.json","get")
			.then(function(data){
				$scope.data=data.data.data;
			})
}
function findController(){
	
}
function photoController(){
	
}
function myController(){
	
}
function signOutController(){
	
}
function detailsController($scope,$http,services,$stateParams){
	//console.log($stateParams)
	services.access_Data("data/data.json","get")
			.then(function(data){
				$scope.Data=data.data.data[$stateParams.data];
			})
}


angular.module("myApp")
		.controller("homeController",homeController)
		.controller("findController",findController)
		.controller("photoController",photoController)
		.controller("myController",myController)
		.controller("signOutController",signOutController)
		.controller("detailsController",detailsController);