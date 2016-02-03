app.controller("LocaleController", ["$scope", "$translate", function($scope, $translate) {
	$scope.localeData = {
		"name": "RedPoint"
	};

	$scope.changeLanguage = function(language) {
		$translate.use(language);
	};
}]);