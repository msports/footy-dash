/**
 * ******************************************************************************************************
 *
 *   Defines a LeagueTable feature
 *
 *  @author  Chip
 *  @date    Jan 27, 2016
 *
 * ******************************************************************************************************
 */
'use strict';

import {element}from 'angular';
import FeatureBase from 'lib/FeatureBase';
import LeagueTableController from './controller/LeagueTableController';
import FootballDataService from 'fw/service/FootballDataService';
//import CustomFilters from 'fw/service/CustomFilters';
import LeagueTableDirective from './directives/LeagueTableDirective';
/**
 * Main class for a league table component
 */
export default class Feature extends FeatureBase {
	/**
	 * COnstructor function for LeagueTable class
	 */
	constructor() {
		super('leagueTable');
	}

	beforeStart() {

	}
	/**
	 * Executes feature properties, assigns service, controller, and creates new isntance of directive and assigns it
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
		this.filter('playerMarketValue', () => {
			//Filters players market value and returns number alue
			return function (marketValue) {
				let mv = (marketValue === null) ? 0 : Number(marketValue.replace(/\D/g, ''));
				return mv;
			}
		});
		this.factory('FootballDataService', FootballDataService.FootballDataFactory);
		this.controller('leagueTableController', LeagueTableController);
		this.directive('leagueTableDirective', () => new LeagueTableDirective());


	}
}

