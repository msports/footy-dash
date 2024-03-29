/**
 * ******************************************************************************************************
 *
 *   Defines a RSSService feature
 *
 *  @author  Chip
 *  @date    Jan 27, 2016
 *
 * ******************************************************************************************************
 */
'use strict';
import {element} from 'angular';
import FeatureBase from 'lib/FeatureBase';
import RssFeedController from './controller/RssFeedController';
import RSSService from 'fw/service/FootballDataService';
//import CustomFilters from 'fw/service/CustomFilters';
import RssFeedDirective from './directives/RssFeedDirective';

class Feature extends FeatureBase {

	constructor(RSSService) {
		super('RssFeed');

	}

	beforeStart() {

	}
	/*@ngInject*/
	templateCaching($templateCache) {
		// $templateCache.put('leagueTableTpl', leagueTableTpl);
	}

	execute() {
		this.factory('RSSService', RSSService.RSSServiceFactory);
		this.controller('RssFeedController',RssFeedController);
		this.directive('rssFeedDirective', () => new RssFeedDirective());		
	}
}

export default Feature;
