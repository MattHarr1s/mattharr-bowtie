app.controller("LocaleController", ["$scope", "$translate", function($scope, $translate) {
	$scope.localeData = {
		"name": "Your Name"
	};

	$scope.changeLanguage = function(language) {
		$translate.use(language);
	};
}]);