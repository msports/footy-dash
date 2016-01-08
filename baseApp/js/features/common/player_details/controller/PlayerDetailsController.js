/**
 * ******************************************************************************************************
 *
 *   Defines a PlayerDetailsController
 *
 *  @author  Chip
 *  @date    Jan 7, 2016
 *
 * ******************************************************************************************************
 */
'use strict';

const INIT = new WeakMap();
const FootballService = new WeakMap();
const TIMEOUT = new WeakMap();
const SCOPE = new WeakMap();
/**
 * PlayerDetailsController a controller for the player details feature/tab.
 * Handles retrivail and display of player details from http://api.football-data.org/ via the FootballDataService
 */
export default class PlayerDetailsController {
	/*@ngInject*/
	constructor($timeout, FootballDataService, $scope, $filter) {
		var vm = this;
		TIMEOUT.set(this, $timeout);
		SCOPE.set(this, $scope);
		FootballService.set(this, FootballDataService);

		this.players = {};
		this.filter = $filter;
		//this.sort = {column: this.filter('playerMarketValue')(this.players.marketValue), descending: true};
		this.sort = {column: '-marketValue | playerMarketValue', descending: false};
		this.addListeners();
	}
	/**
	 * Adds a lsitener for the 'FOOTBALL_SERVICE_GET_TEAM_PLAYERS' event which triggers the get team players function
	 */
	addListeners() {
		this.playerDetailsListener = SCOPE.get(this).$on('FOOTBALL_SERVICE_GET_TEAM_PLAYERS', (event, data) => {
			this.getTeamPlayers.apply(this, [event, data])
		});
	}
	/**
	 * Gets the players for the specified team ID from http://api.football-data.org/ via the FootballDataService
	 * @param {Object]} event [[Description]]
	 * @param {Object}   data  [[Description]]
	 */
	getTeamPlayers(event, data) {
		//console.log('Getting team players: '+data.teamID);
		FootballService.get(this).makeAPICall('http://api.football-data.org/v1/teams/' + data.teamID + '/players').then(
			//Success handler 
			response => {
				this.players = response.players;
			},
			//Error handler
			response => {
				console.log('FootballService error: Player Details' + response.data);
			}
		);
	}
	/**
	 * Change the sorting for the player details table
	 * @param {[[Type]]} column [[Description]]
	 */
	changeSorting(column) {
		let sort = this.sort;
        if (sort.column === column) {
            sort.descending = !sort.descending;
        } else {
            sort.column = column;
            sort.descending = false;
        }
    };
	/**
	 * Returns name of PlayerDetailsController
	 * @returns {string} - 'PlayerDetailsController'
	 */
	run() {
		return 'PlayerDetailsController';
	};
}
