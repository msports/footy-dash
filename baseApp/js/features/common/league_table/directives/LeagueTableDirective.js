/**
 * This is an example of a "component" directive which encapsulates a template.
 */
import {
	element
}
from 'angular';
import LeagueTableController from '../controller/LeagueTableController';

class LeagueTableDirective {
	/*@ngInject*/
	constructor($scope) {
		this.templateUrl = '/js/features/common/league_table/partials/league.table.tpl.html';
		this.restrict = 'E';
		this.replace = true;
		this.scope = {};
		this.bindToController = {
			tables: '='
		};
		this.controller = LeagueTableController;
		this.controllerAs = 'vm';
	}


	/*@ngInject*/
	link(scope, element, attributes, controller) {

	}
}

export default LeagueTableDirective;
