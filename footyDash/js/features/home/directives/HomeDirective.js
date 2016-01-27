/**
 * ******************************************************************************************************
 *
 *  This is an example of a "component" directive which encapsulates a template.
 *
 *  @author  Chip
 *  @date    Jan 27, 2016
 *
 * ******************************************************************************************************
 */
'use strict';

import {element} from 'angular';
import HomeController from '../controller/HomeController';

const templateUrl = require('js/features/home/partials/home.tpl.html');
/**
 * HomeDirective a directive for the home feature/tab.
 */
export default class HomeDirective {
	/*@ngInject*/
	constructor($scope) {
		this.templateUrl = templateUrl;
		this.restrict = 'E';
		this.replace = true;
		this.controller = HomeController;
		this.controllerAs = 'vm';
	}

	link() {}
}

