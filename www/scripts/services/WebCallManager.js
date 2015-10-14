define(['app'], function (app) {
	app.service('webcallService', function() {
		var self = this;
		self.sendGetRequest = function() {
			console.log("Sending HTTP Get Request");
		}
		
		self.sendPostRequest = function() {
			console.log("Sending HTTP Post Request");
		}
	});
});