var app = angular.module("TranslateApp", ["pascalprecht.translate"]);

app.config(["$translateProvider", function($translateProvider) {
	$translateProvider.useStaticFilesLoader({
		prefix: "locale-",
		suffix: ".json"
	});
	$translateProvider.preferredLanguage("en");
}]);