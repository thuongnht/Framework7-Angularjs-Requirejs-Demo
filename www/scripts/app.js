define(['angularAMD', 'angular-route','angular-animate'], function (angularAMD) {
    var app = angular.module("app", ['ngRoute','ngAnimate']);
	
	app.config(function ($routeProvider) {
		
        $routeProvider.when("/", angularAMD.route({ templateUrl: '../pages/login.html',controller: 'UserController'}));
		$routeProvider.when("/login", angularAMD.route({ templateUrl: '../pages/home.html', controller: 'UserController'}));
    });
    
    return angularAMD.bootstrap(app);
});