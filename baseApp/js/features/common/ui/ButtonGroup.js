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
import ButtonGroupController from '../controllers/ButtonGroupController';
import ButtonGroupDirective from '../directives/ButtonGroupDirective';
import buttonGroupTpl from './buttonGroup.tpl.html';


class Feature extends FeatureBase {

    constructor() {
        super('ButtonGroup');
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

        this.controller('ButtonGroupController', ButtonGroupController);
		this.directive('buttonGroupDirective', () => new ButtonGroupDirective());		
    }
}

export default Feature;
