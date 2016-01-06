(function () {
	angular
		.module('gulpAngular')
		//Filters team ID from team players detail URL
		.filter('teamIDFilter', function () {
			return function (teamURl) {
				var teamID = teamURl.slice(teamURl.lastIndexOf('/') + 1);
				return teamID;
			};
		})
		//Filters players market value and returns number alue
		.filter('playerMarketValue', function () {
			return function (marketValue) {
				return Number(marketValue.replace(/\D/g, ''));
			};
		});
})();

