const INIT = new WeakMap();
const FootballService = new WeakMap();
const FeedService = new WeakMap();
const TIMEOUT = new WeakMap();

class LeagueTableController {
	/*@ngInject*/
	constructor($timeout, FootballDataService, $scope, $filter, events) {
		var vm = this;
		TIMEOUT.set(this, $timeout);
		FootballService.set(this, FootballDataService);
		this.tables = {};
		this.title = '';
		this.filter = $filter;
		this.events = events;
		
		this.scope = $scope;
		
		this.getLeagueTable();

	}
	
	//Gets a league table then calls a function for the team ID at the top of the table
	getLeagueTable() {
		FootballService.get(this).makeAPICall('http://api.football-data.org/v1/soccerseasons/398/leagueTable').then(
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
    //Calls get team details for team at the top of particular league table
	getTableTopper() {
		for (let i = 0; i < this.tables.length; i++) {
			if (this.tables[i].position === 1) {
				this.scope.$emit('FOOTBALL_SERVICE_TABLE_LOADED', {teamID:this.filter('teamIDFilter')(this.tables[i]._links.team.href)});
				//this.events.emit('FOOTBALL_SERVICE_TABLE_LOADED', {topTeam:this.filter('teamIDFilter')(this.tables[i]._links.team.href)});
				break;
			}
		}
	}
	
	getTeamDetails(teamID){
		//console.log('Get team details: '+teamID);
		this.scope.$emit('FOOTBALL_SERVICE_TEAM_DETAILS', {teamID : teamID});
	}


	run() {
		return 'LeagueTableController';
	};
}

export default LeagueTableController;
