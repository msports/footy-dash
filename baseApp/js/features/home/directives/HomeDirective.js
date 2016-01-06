/**
 * This is an example of a "component" directive which encapsulates a template.
 */
import {
	element
}
from 'angular';
import HomeController from '../controller/HomeController';

const templateUrl = require('js/features/home/partials/home.tpl.html');

class HomeDirective {
	/*@ngInject*/
	constructor($scope) {
		this.templateUrl = templateUrl;
		this.restrict = 'E';
		this.replace = true;
		this.scope = {};
		this.transclude = true;
		this.bindToController = {
			title: '=',
			tables: '=',
			players: '=',
			teamDetails: '=',
			teamFixtures: '='
		};
		this.controller = HomeController;
		this.controllerAs = 'vm';
	}

	link() {}
}

export default HomeDirective;
