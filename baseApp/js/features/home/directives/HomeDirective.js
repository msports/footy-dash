/**
 * This is an example of a "component" directive which encapsulates a template.
 */
import {
	element
}
from 'angular';
import HomeController from '../controller/HomeController';

class HomeDirective {
	/*@ngInject*/
	constructor($scope) {
		this.templateUrl = '/js/features/home/partials/home.tpl.html';
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
		this.controller = HomeController;
		this.controllerAs = 'vm';
	}


	/*@ngInject*/
	link(scope, element, attributes, controller) {
		/*scope.$on('SERVICES_LOADED', function () {
			//$('.teamRow').on('click', handleClick);			
		});


		scope.clickTeam = function ($event) {
			console.log('function in link click team: ' + $event.currentTarget.id);
		}

		function handleClick($event) {
			console.log('click: ' + $event.target.id);
			var teamID = $event.target.parentElement.id;
			scope.$apply(
				function changeViewModel() {
					//console.log('teamID: ' + teamID);
					controller.getTeamDetails(teamID);
				}
			);
		}*/
	}
}

export default HomeDirective;
