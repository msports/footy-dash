/**
 * This is an example of a "component" directive which encapsulates a template.
 */
import {element} from 'angular';

class ButtonGroupDirective {
	constructor() {
			this.templateUrl = '/js/features/common/ui/ButtonGroup.tpl.html';
			this.restrict = 'E';
			this.replace = true;
			this.scope = {};
			this.bindToController = true;
			this.controller = ButtonGroupController;
			this.controllerAs = 'vm';

		}
		/*@ngInject*/
	link(scope, element, attributes, controller) {
		element.on('click', handleClick);

		function handleClick($event) {
			var teamID = $event.target.parentElement.id;
			scope.$apply(
				function changeViewModel() {
					//console.log('teamID: ' + teamID);
					controller.getTeamDetails(teamID);
				}
			);
		}
	}
}

export default ButtonGroupDirective;
