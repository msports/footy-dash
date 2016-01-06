/**
 * This is an example of a "component" directive which encapsulates a template.
 */
import {
	element
}
from 'angular';
import TeamDetailsController from '../controller/TeamDetailsController';

const templateUrl = require('js/features/common/team_details/partials/team.details.tpl.html');

class TeamDetailsDirective {
	/*@ngInject*/
	constructor($scope) {
		this.templateUrl = templateUrl;
		this.restrict = 'E';
		this.replace = true;
		this.scope = {};
		this.bindToController = {
			teamDetails: '='
		};
		this.controller = TeamDetailsController;
		this.controllerAs = 'vm';
	}


	/*@ngInject*/
	link(scope, element, attributes, controller) {

	}
}

export default TeamDetailsDirective;
