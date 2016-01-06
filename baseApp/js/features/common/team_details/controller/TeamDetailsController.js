const INIT = new WeakMap();
const FootballService = new WeakMap();
const TIMEOUT = new WeakMap();
const SCOPE = new WeakMap();

class TeamDetailsController {
	/*@ngInject*/
	constructor($timeout, FootballDataService, $scope, $filter, events) {
		var vm = this;
		TIMEOUT.set(this, $timeout);
		FootballService.set(this, FootballDataService);

		this.teamDetails = {};
		this.filter = $filter;
		this.events = events;
		
		SCOPE.set(this, $scope);
		
		this.addListeners();

	}

	addListeners() {
		this.teamDetailsListener = SCOPE.get(this).$on('FOOTBALL_SERVICE_GET_TEAM_DETAILS', (event, data) => {
			this.getTeamDetails.apply(this, [event, data])
		});
		
		this.teamFixturesListener = SCOPE.get(this).$on('FOOTBALL_SERVICE_GET_TEAM_FIXTURES', (event, data) => {
			this.getTeamFixtures.apply(this, [event, data])
		});
	}
	/**
	 * [[Description]]
	 * @param {object} event [[Description]]
	 * @param {object} data  [[Description]]
	 */
	getTeamDetails(event, data) {
		//console.log('Getting details: '+data.teamID);
		
		let teamID = data.teamID;

		FootballService.get(this).makeAPICall('http://api.football-data.org/v1/teams/' + teamID).then(
			//Success handler 
			response => {
				this.teamDetails = response;				
			},
			//Error handler
			response => {
				console.log('FootballService error: Team Details: ' + response.data);
			}
		);
	}
	
	getTeamFixtures(event, data) {
		let teamID = data.teamID;
		
		FootballService.get(this).makeAPICall('http://api.football-data.org/v1/teams/' + teamID + '/fixtures').then(
			//Success handler 
			response => {
				this.teamFixtures = response.fixtures;
                //SCOPE.get(this).$emit('FOOTBALL_SERVICE_TEAM_PLAYERS', {teamID: teamID});
			},
			//Error handler
			response => {
				console.log('FootballService error: Team Fixtures: ' + response.data);
			}
		);
	}

	run() {
		return 'TeamDetailsController';
	};
}

export default TeamDetailsController;
