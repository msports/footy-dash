/**
 * This is an example of a "component" directive which encapsulates a template.
 */
import {
	element
}
from 'angular';
import AccordianController from '../controllers/AccordianController';

class AccordianDirective {
	/*@ngInject*/
	constructor($scope) {
		this.templateUrl = '/js/features/common/ui/accordian.tpl.html';
		this.restrict = 'E';
		this.replace = true;
		this.scope = {};
		this.bindToController = true;
		this.controller = AccordianController;
		this.controllerAs = 'vm';
	}


	/*@ngInject*/
	link(scope, element, attributes, controller) {
		$('.js-accordion-trigger').bind('click', function (e) {
			$(this).parent().find('.submenu').slideToggle('fast'); // apply the toggle to the ul
			$(this).parent().toggleClass('is-expanded');
			e.preventDefault();
		});
	}
}

export default AccordianDirective;
