/**
 * ******************************************************************************************************
 *
 *   Defines RouteIndicator service
 *
 *  @author  Chip
 *  @date    Jan 27, 2016
 *
 * ******************************************************************************************************
 */
'use strict';


import { element } from 'angular';
import pluck from 'lib/Pluck';
import FeatureBase from 'lib/FeatureBase';
/**
 * HomeController a controller for the home feature/tab.
 * Handles event delegation between child directives
 */
export default class Feature extends FeatureBase {
	/**
	 * Constructor for route indicator feature
	 */
	constructor() {
		super('RouteIndicator');
		this.$body = element(document.body);
	}
	/**
	 * Route indicator
	 * @param {object} $rootScope - Global root scope object
	 * @param {Object} Routes     - ROutes object
	 */
	/*@ngInject*/
	indicator($rootScope, Routes) {
		var _this = this;
		var classes = pluck(Routes, 'id').join(' ');
		$rootScope.$on('$routeChangeSuccess', function (e, route) {
			_this.$body.removeClass(classes);
			if (route && route.$$route && route.$$route.id) {
				_this.$body.addClass(route.$$route.id);
			}
		});
	}
	/**
	 * Executes by app Main
	 */
	execute() {
		var indicator = this.indicator.bind(this);
		indicator.$inject = ['$rootScope', 'Routes'];
		this.run(indicator);
	}
}
