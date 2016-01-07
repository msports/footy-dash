import {element} from 'angular';
import TeamDetailsController from '../controller/TeamDetailsController';

const templateUrl = require('js/features/common/team_details/partials/team.details.tpl.html');
/**
 * TeamDetailsDirective a directive for the team details feature/tab.
 */
export default class TeamDetailsDirective {
	/*@ngInject*/
	constructor($scope) {
		this.templateUrl = templateUrl;
		this.restrict = 'E';
		this.replace = true;
		this.scope = true;
		this.bindToController = {
			teamDetails: '=',
			teamStats: '='
		};
		this.controller = TeamDetailsController;
		this.controllerAs = 'vm';
	}

	link() {

	}
}
