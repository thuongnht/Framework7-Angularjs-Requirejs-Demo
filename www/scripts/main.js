(function() {
	require.config({
		baseUrl: "scripts",    
		
		// alias libraries paths
		paths: {
			'angular': '../libs/angular',
			'angular-route': '../libs/angular-route',
			'angular-animate':'../libs/angular-animate',
			'angularAMD': '../libs/angularAMD.min',
			'Framework7':'../libs/framework7',
			'UserController':'controller/UserCtrl',
			'WebCallManager':'services/WebCallManager'
		},
		
		// Add angular modules that does not support AMD out of the box, put it in a shim
		shim: { 
			'angularAMD': ['angular'],
			'angular-route': ['angular'],
			'angular-animate':['angular'],
			'Framework7':{exports: 'Framework7'}
		},
		
		//kick start application
		deps: ['app']
	});

	require(['Framework7'], function(Framework7) {
		
		 f7 = new Framework7({
			modalTitle: 'Seed App',
			swipePanel: 'left',
			animateNavBackIcon: true
		});
	  
		return {
			f7: f7
		};
	});

})();