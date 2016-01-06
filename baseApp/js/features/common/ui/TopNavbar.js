/**
 *  Defines the TopNavbar Module.
 *
 *  @author  Chip
 *  @date    January 6, 2015
 *
 */
'use strict';

import { element } from 'angular';
import FeatureBase from 'lib/FeatureBase';
import TopNavbarController from '../controllers/TopNavbarController';
import TopNavbarDirective from '../directives/TopNavbarDirective';

class Feature extends FeatureBase {

    constructor() {
        super('TopnavModule');        
		this.$body = element(document.body);
		
   }

    beforeStart() {
        this.$body.prepend('<top-navbar-directive></top-navbar-directive>');
    }
    /*@ngInject*/
    templateCaching($templateCache) {
       //$templateCache.put('topNavTpl', topNavTpl);
    }

    execute() {
        //this.run(this.templateCaching);

        this.controller('TopNavbarController', TopNavbarController);
		this.directive('topNavbarDirective', () => new TopNavbarDirective());		
    }
}

export default Feature;
