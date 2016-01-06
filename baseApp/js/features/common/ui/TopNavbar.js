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
import NavbarController from '../controllers/NavbarController';
import NavigationDirective from '../directives/NavigationDirective';
import topNavTpl from './TopNavbar.html';


class Feature extends FeatureBase {

    constructor() {
        super('TopnavModule');
        this.$body = element(document.body);
		
   }

    beforeStart() {
        this.$body.prepend(topNavTpl);
    }
    /*@ngInject*/
    templateCaching($templateCache) {
        $templateCache.put('topNavTpl', topNavTpl);
    }

    execute() {
        this.run(this.templateCaching);

        this.controller('NavbarController', NavbarController);
		this.directive('navigationDirective', () => new NavigationDirective());		
    }
}

export default Feature;
