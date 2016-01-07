'use strict';

import {element} from 'angular';

const templateUrl = require('js/features/common/ui/accordian.tpl.html');
/**
 * AccordianDirective a directive for the accordian feature.
 * Handles event delegation between child directives
 */
export default class AccordianDirective {
	/**
	 * Constructor for Accordian Directive 
	 */	
	constructor() {
		this.templateUrl = templateUrl;
		this.restrict = 'E';
		this.replace = true;
		this.require = '^teamDetailsDirective';
		this.transclude = true;
	}

	/**
	 * Link function for the accordian directive, contains JQuery for handeling toggle of accordian
	 * TODO: optomize for JQlite
	 */
	link() {
		$('.js-accordion-trigger').bind('click', function (e) {
			$(this).parent().find('.submenu').slideToggle('fast'); // apply the toggle to the ul
			$(this).parent().toggleClass('is-expanded');
			e.preventDefault();
		});
	}
}