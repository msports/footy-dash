const FootballService = new WeakMap();
const TIMEOUT = new WeakMap();
/**
 * LeagueTableController a controller for the league tables.
 * Fetches league table data, allows users to switch between leagues
 * Sends team information with table loaded event or when user clicks
 * on a team to get sepcific details
 */
export default class LeagueTableController {
	/*@ngInject*/
	constructor($timeout, FootballDataService, $scope, $filter, CONF) {
		var vm = this;
		TIMEOUT.set(this, $timeout);
		FootballService.set(this, FootballDataService);
		this.tables = {};
		this.title = '';
		this.filter = $filter;
		this.config = CONF;
		this.scope = $scope;
		
		this.leagues = CONF.footBallLeagues;
		this.selectedLeague = this.leagues[0].id;
		
		this.getLeagueTable();
	}
	/**
	 * Gets a league table then calls a function to retrieve the team ID at the top of the table
	 */
	getLeagueTable() {		
		FootballService.get(this).makeAPICall('http://api.football-data.org/v1/soccerseasons/'+this.selectedLeague+'/leagueTable').then(
			//Success handler 
			response => {
				this.tables = response.standing;
				this.title = response.leagueCaption;
				this.getTableTopper();
			},
			//Error handler
			response => {
				console.log('FootballService error: ' + response.data);
			}
		);
	}
	/**
	 * Gets the first place team, notifys parent controller and sends their teamID & stats with the event
	 */
	getTableTopper() {
		for (let i = 0; i < this.tables.length; i++) {
			if (this.tables[i].position === 1) {
				let teamID = this.filter('teamIDFilter')(this.tables[i]._links.team.href);
				let teamStats =  this.getTeamStats(teamID);
				this.scope.$emit('FOOTBALL_SERVICE_TABLE_LOADED', {teamID:teamID, teamStats: teamStats});
				break;
			}
		}
	}
	/**
	 * Gets top level team details, name, crest, team value
	 * @param {string} teamID [The id of the teams details to get]
	 */
	getTeamDetails(teamID){
		//console.log('Get team details: '+teamID);
		let teamStats =  this.getTeamStats(teamID);
		//console.log('Table stats: '+teamStats);
		this.scope.$emit('FOOTBALL_SERVICE_TEAM_DETAILS', {teamID : teamID, teamStats:teamStats});
	}
	/**
	 * Team data such as wins, draws, goals etc. is already stored in league table. 
	 * Rather than having team details fetch it agian as needed pass it back out through event data when requested.
	 * @param {string} teamID [The id of the teams details to get]
	 */
	getTeamStats(teamID){
		//console.log('Finding and passing team data: '+data.teamID);
		for (let i = 0; i < this.tables.length; i++) {
			let teamNum = this.filter('teamIDFilter')(this.tables[i]._links.team.href);
			if (teamNum === teamID) {
				return this.tables[i];
				break;
			}
		}
	}
	/**
	 * Returns the Name of this controller
	 * @returns {string} ['LeagueTableController']
	 */
	run() {
		return 'LeagueTableController';
	};
}
