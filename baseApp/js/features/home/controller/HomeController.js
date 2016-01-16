/**
 * ******************************************************************************************************
 *
 *  Defines a HomeController
 *
 *  @author  Chip
 *  @date    Jan 7, 2016
 *
 * ******************************************************************************************************
 */
'use strict';

const SCOPE = new WeakMap();
/**
 * HomeController a controller for the home feature/tab.
 * Handles event delegation between child directives
 */
export default class HomeController {
	/**
	 * Home controller constructor function
	 * @param {[[Type]]} $scope     [[Description]]
	 */
	/*@ngInject*/
	constructor($scope) {
		var vm = this;
		SCOPE.set(this, $scope);
		this.addListeners();
	}
	/**
	 * adds listeners for football service event triggers
	 */
	addListeners() {
		//After league table is loaded and top team retrieved get top team info
		SCOPE.get(this).$on('FOOTBALL_SERVICE_TABLE_LOADED', (event, data) => {this.broadcastServiceEvent.apply(this, [event, data])});
		//User clicks on team, fetch team details
		SCOPE.get(this).$on('FOOTBALL_SERVICE_TEAM_DETAILS', (event, data) => {this.broadcastServiceEvent.apply(this, [event, data])});	
	}
	/**
	 * broadcasts service events to components using the football service
	 * @param {object} event [event object]
	 * @param {object}   data  [event object data. Contains the teamID (data.teamID) used by the football service to retrieve team information]
	 */
	broadcastServiceEvent(event, data) {
		//console.log('Broadcasting: event: '+event.name+' data: '+data.teamID);
		SCOPE.get(this).$broadcast('FOOTBALL_SERVICE_GET_TEAM_DETAILS', {teamID: data.teamID, teamStats: data.teamStats});
		SCOPE.get(this).$broadcast('FOOTBALL_SERVICE_GET_TEAM_PLAYERS', {teamID: data.teamID});
		SCOPE.get(this).$broadcast('FOOTBALL_SERVICE_GET_TEAM_FIXTURES', {teamID: data.teamID});
	}
	/**
	 * Returns name of HomeController
	 * @returns {string} - 'HomeController'
	 */
	run() {
		return 'HomeController';
	};
}
