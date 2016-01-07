/**
 * This is an example of a "component" directive which encapsulates a template.
 */
import {
	element
}
from 'angular';
import RssFeedController from '../controller/RssFeedController';

const templateUrl = require('js/features/common/rss_feed/partials/rss.feed.tpl.html');

class RssFeedDirective {
	/*@ngInject*/
	constructor($scope) {
		this.templateUrl = templateUrl;
		this.restrict = 'E';
		this.replace = true;
		this.scope = {};
		this.bindToController = {
			tables: '='
		};
		this.controller = RssFeedController;
		this.controllerAs = 'vm';
	}


	/*@ngInject*/
	link(scope, element, attributes, controller) {

	}
}

export default RssFeedDirective;
