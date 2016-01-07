const INIT = new WeakMap();
const FootballService = new WeakMap();
const TIMEOUT = new WeakMap();
const SCOPE = new WeakMap();
/**
 * TeamDetailsController a controller for the team details feature/tab.
 * Fetches basic team details team name, market value, fixtures
 * DIsplays detailed team stats recieved from table via 'FOOTBALL_SERVICE_GET_TEAM_DETAILS' eventHandler
 * which are then displayed in accordian directive 
 */
class TeamDetailsController {
	/**
	 * [[Description]]
	 * @param {WeakMap]} $timeout        - Timeout used for timing out service requests
	 * @param {[[Type]]} FootballDataService - Retrieves the team details and fixtures from http://api.football-data.org/
	 * @param {[[Type]]} $scope  - Local scope object
	 * @param {[[Type]]} $filter - Filter
	 */
	/*@ngInject*/
	constructor($timeout, FootballDataService, $scope, $filter) {
		var vm = this;
		TIMEOUT.set(this, $timeout);
		FootballService.set(this, FootballDataService);

		this.teamDetails = {};
		this.teamStats = {};
		this.filter = $filter;
		this.teamID = 0;
		
		this.name = 'TeamDetailsController'
		
		SCOPE.set(this, $scope);
		
		this.addListeners();

	}
	/**
	 * Adds event listeners for retrieving team details and fixtures
	 */
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
	 * @param {object} event - Event object
	 * @param {object} data  Event data object. Contains team ID (+data.teamID) & team stats (data.teamStats)
	 */
	getTeamDetails(event, data) {
		//console.log('Getting details: '+data.teamID+' stats: '+data.teamStats);
		this.teamStats = data.teamStats;
		//console.log('TeamStats goals: '+this.teamStats.goals)
		this.teamID = data.teamID; 

		FootballService.get(this).makeAPICall('http://api.football-data.org/v1/teams/' + data.teamID).then(
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
	/**
	 * Retrieves the team fixtures from http://api.football-data.org/
	 * @param {object} event - Event object
	 * @param {object} data  Event data object. Contains team ID (+data.teamID)
	 */
	getTeamFixtures(event, data) {		
		FootballService.get(this).makeAPICall('http://api.football-data.org/v1/teams/' +data.teamID + '/fixtures').then(
			//Success handler 
			response => {
				this.teamFixtures = response.fixtures;
            },
			//Error handler
			response => {
				console.log('FootballService error: Team Fixtures: ' + response.data);
			}
		);
	}
	/**
	 * Returns name of TeamDetailsController
	 * @returns {string} 'TeamDetailsController'
	 */
	run() {
		return 'TeamDetailsController';
	};
}

export default TeamDetailsController;
