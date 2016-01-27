/**
 * ******************************************************************************************************
 *
 *   Defines a PlayerDetails feature
 *
 *  @author  Chip
 *  @date    Jan 27, 2016
 *
 * ******************************************************************************************************
 */
'use strict';

import {element} from 'angular';
import FeatureBase from 'lib/FeatureBase';
import PlayerDetailsController from './controller/PlayerDetailsController';
import PlayerDetailsDirective from './directives/PlayerDetailsDirective';
import FootballDataService from 'fw/service/FootballDataService';
//import CustomFilters from 'fw/service/CustomFilters';


/**
 * Main class for PlayerDetails component
 * Assigns controller, service, creates new instance of  PlayerDetailsDirective and assigns it to .diective
 */
export default class Feature extends FeatureBase {
	/**
	 * Constructor for player details feature component
	 */
	constructor() {
		super('playerDetails');
	}

	beforeStart() {	}
	/**
	 * Executing and assigning functions by main app class
	 * @returns {[[Type]]} [[Description]]
	 */
	execute() {		
		//TODO Move filters to external class
		this.filter('teamIDFilter', () => {
			return function (teamURl) {
				//console.log('Filter Called: ' + teamURl)
				let teamID = teamURl.slice(teamURl.lastIndexOf('/') + 1);
				return teamID;
			};
		});
		this.filter('playerMarketValue',  () => {
			//Filters players market value and returns number alue
			return function (marketValue) {
				let mv = (marketValue === null) ? 0 : Number(marketValue.replace(/\D/g, ''));
				return mv;
			}
		});
		
		this.factory('FootballDataService', FootballDataService.FootballDataFactory);		
		this.controller('PlayerDetailsController', PlayerDetailsController);
		this.directive('playerDetailsDirective', () => new PlayerDetailsDirective());		
	}
}
