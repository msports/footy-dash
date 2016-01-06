/**
 * This is an example of a "component" directive which encapsulates a template.
 */
import {
	element
}
from 'angular';
import PlayerDetailsController from '../controller/PlayerDetailsController';

const templateUrl = require('js/features/common/player_details/partials/player.details.tpl.html');

class PlayerDetailsDirective {
	/*@ngInject*/
	constructor($scope) {
		this.templateUrl = templateUrl;
		this.restrict = 'E';
		this.replace = true;
		this.scope = {};
		this.bindToController = {
			title: '=',
			tables: '=',
			players: '=',
			teamDetails: '=',
			teamFixtures: '='
		};
		this.controller = PlayerDetailsController;
		this.controllerAs = 'vm';
	}


	/*@ngInject*/
	link(scope, element, attributes, controller) {

	}
}

export default PlayerDetailsDirective;
