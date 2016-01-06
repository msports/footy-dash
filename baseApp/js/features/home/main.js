/**
 * ******************************************************************************************************
 *
 *   Defines a home feature
 *
 *  @author  Chip
 *  @date    Dec 21, 2015
 *
 * ******************************************************************************************************
 */
'use strict';
import {element} from 'angular';
import FeatureBase from 'lib/FeatureBase';
import Routes from './Routes';
import HomeController from './controller/HomeController';
import RSSService from 'fw/service/RSSService';
//import CustomFilters from 'fw/service/CustomFilters';
import HomeDirective from './directives/HomeDirective';


class Feature extends FeatureBase {

	constructor() {
		super('home'); 
		this.routes = Routes;
	}

	beforeStart() {

	}
	/*@ngInject*/
	templateCaching($templateCache) {
		// $templateCache.put('homeTpl', homeTpl);
	}

	execute() {
		this.factory('RSSService', RSSService.RSSServiceFactory);
		

		
		this.controller('HomeController', HomeController);
		this.directive('homeDirective', () => new HomeDirective());
		
		//this.run(this.templateCaching);
		
	}
}

export default Feature;
