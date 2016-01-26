/**
 * This is an example of a "component" directive which encapsulates a template.
 */
import { element } from 'angular';

const templateUrl = require('js/features/common/ui/topNavbar.tpl.html');

class NavigationDirective {
    constructor() {
		this.templateUrl = templateUrl;
        this.restrict = 'E';
        this.replace = false;
    }

    link(scope, element) {		
		let mobileMenu = $('#js-mobile-menu');
        let navMenu =    $('#js-navigation-menu');
		let menuToggle = mobileMenu.unbind();
		let navLink = $('.nav-link');
		
		navMenu.removeClass('show');
		
		menuToggle.on('click', function(e) {
			e.preventDefault();
			navMenu.slideToggle(function(){
			  if(navMenu.is(':hidden')) {
				navMenu.removeAttr('style');
			  }
			});
	    });
		
		navLink.on('click', (e)=>{
			angular.forEach($('.nav-link'), (v, k)=>{
				if($(v).hasClass('active-nav-item'))
					$(v).removeClass('active-nav-item');
			});
			$(e.currentTarget).addClass('active-nav-item');
		});
    }
}

export default NavigationDirective;

