/**
 * ******************************************************************************************************
 *
 *   Defines a PlayerDetails feature
 *
 *  @author  Chip
 *  @date    Dec 21, 2015
 *
 * ******************************************************************************************************
 */
'use strict';
import {
	element
}
from 'angular';
import FeatureBase from 'lib/FeatureBase';
import PlayerDetailsController from './controller/PlayerDetailsController';
import FootballDataService from 'fw/service/FootballDataService';
//import CustomFilters from 'fw/service/CustomFilters';
import PlayerDetailsDirective from './directives/PlayerDetailsDirective';

class Feature extends FeatureBase {

	constructor() {
		super('playerDetails');
	}

	beforeStart() {

	}
	/*@ngInject*/
	templateCaching($templateCache) {
		// $templateCache.put('PlayerDetailsTpl', PlayerDetailsTpl);
	}

	execute() {
		this.factory('FootballDataService', FootballDataService.FootballDataFactory);
		
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
		
		this.controller('PlayerDetailsController', PlayerDetailsController);
		this.directive('playerDetailsDirective', () => new PlayerDetailsDirective());
		
		this.run(this.templateCaching);
		
	}
}

export default Feature;
