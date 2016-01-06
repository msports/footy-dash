const INIT = new WeakMap();
const FootballService = new WeakMap();
const TIMEOUT = new WeakMap();
const SCOPE = new WeakMap();

class PlayerDetailsController {
	/*@ngInject*/
	constructor($timeout, FootballDataService, $scope, $filter) {
		var vm = this;
		TIMEOUT.set(this, $timeout);
		SCOPE.set(this, $scope);
		FootballService.set(this, FootballDataService);

		this.players = {};
		this.filter = $filter;
		this.addListeners();
	}

	addListeners() {
		this.playerDetailsListener = SCOPE.get(this).$on('FOOTBALL_SERVICE_GET_TEAM_PLAYERS', (event, data) => {
			this.getTeamPlayers.apply(this, [event, data])
		});
	}

	getTeamPlayers(event, data) {
		//console.log('Getting team players: '+data.teamID);
		let teamID = data.teamID;
		FootballService.get(this).makeAPICall('http://api.football-data.org/v1/teams/' + teamID + '/players').then(
			//Success handler 
			response => {
				this.players = response.players;
				if (this.initLoad === 1) {
					this.initLoad = 0;
				}
			},
			//Error handler
			response => {
				console.log('FootballService error: ' + response.data);
			}
		);
	}

	run() {
		return 'PlayerDetailsController';
	};
}

export default PlayerDetailsController;
