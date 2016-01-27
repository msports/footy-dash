/**
 * ******************************************************************************************************
 *
 *   Defines a HomeController
 *
 *  @author  Chip
 *  @date    Jan 27, 2016
 *
 * ******************************************************************************************************
 */
'use strict';

import {element} from 'angular';
import RssFeedController from '../controller/RssFeedController';

const templateUrl = require('js/features/common/rss_feed/partials/rss.feed.tpl.html');
/**
 * RssFeedDirective a directive for the rss feature/tab.
 * Handles event delegation between child directives
 */
export default class RssFeedDirective {
	/*@ngInject*/
	constructor($scope) {
		this.templateUrl = templateUrl;
		this.restrict = 'E';
		this.replace = true;
		this.bindToController = {
			tables: '='
		};
		this.controller = RssFeedController;
		this.controllerAs = 'vm';
	}
	/**
	 * Link function for RSS directive
	 */
	link() {}
}
