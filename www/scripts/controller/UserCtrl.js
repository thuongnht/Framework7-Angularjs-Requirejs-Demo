define(['app', 'WebCallManager'], function (app) {
    app.controller('UserController', function ($scope,$location,webcallService) {
       
		$scope.loginUser = function(){
			console.log("Login User Called...");
			$location.path('/login').replace();
			console.log("View Navigated...");
		};
		
		
		$scope.slidePanel = function(){
			 f7.openPanel('left');
		};
		
		
		$scope.doWebCall = function(){
		    console.log("Doing the Web Call...");
			webcallService.sendGetRequest();
		};
    });
});


