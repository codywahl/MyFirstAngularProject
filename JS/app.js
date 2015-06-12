(function(angular) {
	//use strict means JavaScript code should be executed in strict mode. 
	//strict mode "makes it easier to write secure JavaScript"
  'use strict';
	
	// Creates new anuglar module named ngCityHistory. Dependencies would go in the array parameter.
	// Seeing the module to a variable allows to assign controllers or other objects without the need of chaining.
	// The name of the module is used in the html's ng-app="nameOfModule".
	var app = angular.module('ngCityHistory', []);

	app.controller('cityController', ['$http', function($http) {
  		var cityHistory = this;

  		// Sets initial value, to prevent issues while waiting for the json data retrival
  		cityHistory.allCities = [];

  		//http.get method, retrieves the data from the json file passed in. 
  		$http.get('cities.json').success(function(data){
  			cityHistory.allCities = data;
  		});

	}]);

	app.directive('citiesContainer', function(){
		return{
			restrict: 'E',
			templateUrl: 'Views/city-container.html'
		};
	});

})(window.angular);