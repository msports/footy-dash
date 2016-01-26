/**
 * This is an example of a 'component' directive which encapsulates a template.
 */
import {
	element
}
from 'angular';
import LeagueTableController from '../controller/LeagueTableController';

const templateUrl = require('js/features/common/league_table/partials/league.table.tpl.html');

class LeagueTableDirective {
	/*@ngInject*/
	constructor($scope) {
		this.templateUrl = templateUrl;
		this.restrict = 'E';
		this.replace = true;
		this.scope = {};
		this.bindToController = {
			tables: '=',
			leagues: '='
		};
		this.controller = LeagueTableController;
		this.controllerAs = 'vm';
;
	}


	/*@ngInject*/
	link(scope, element, attributes, controller) {
		$(document).ready(function () {
			$('.dropdown-button').click(function () {
				var $button, $menu;
				$button = $(this);
				$menu = $button.siblings('.dropdown-menu');
				$menu.toggleClass('show-menu');
				$menu.children('li').click(function () {
					$menu.removeClass('show-menu');
					$button.html($(this).html());
				});
			});
		});

	}
}

export default LeagueTableDirective;
