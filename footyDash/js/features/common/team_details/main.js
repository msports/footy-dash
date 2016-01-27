/**
 * ******************************************************************************************************
 *
 *   Defines a TeamDetails feature
 *
 *  @author  Chip
 *  @date    Jan 27, 2016
 *
 * ******************************************************************************************************
 */
'use strict';
import {element} from 'angular';
import FeatureBase from 'lib/FeatureBase';

import TeamDetailsController from './controller/TeamDetailsController';
import FootballDataService from 'fw/service/FootballDataService';

//import CustomFilters from 'fw/service/CustomFilters';
import TeamDetailsDirective from './directives/TeamDetailsDirective';


class Feature extends FeatureBase {

	constructor() {
		super('teamDetails');
	}

	beforeStart() {

	}
	/*@ngInject*/
	templateCaching($templateCache) {
		// $templateCache.put('TeamDetailsTpl', TeamDetailsTpl);
	}

	execute() {
		this.factory('FootballDataService', FootballDataService.FootballDataFactory);
		
		
		this.controller('teamDetailsController', TeamDetailsController);
		this.directive('teamDetailsDirective', () => new TeamDetailsDirective());
		
		//this.run(this.templateCaching);
		
	}
}

export default Feature;
