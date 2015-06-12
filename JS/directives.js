(function(){
	var app = angular.module('directives', []);

	app.direective("testContainer", function(){
		return {
			restrict: 'E',
			templateUrl: "test-container.html"
		};
	});
});