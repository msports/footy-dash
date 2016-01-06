/**
 *  Defines the TopAccordian Module.
 *
 *  @author  Chip
 *  @date    January 6, 2015
 *
 */
'use strict';

import { element } from 'angular';
import FeatureBase from 'lib/FeatureBase';
import AccordianController from '../controllers/AccordianController';
import AccordianDirective from '../directives/AccordianDirective';


class Feature extends FeatureBase {

    constructor() {
        super('accordianModule');
        this.$body = element(document.body);
		
   }

    beforeStart() {
       
    }
    /*@ngInject*/
    templateCaching($templateCache) {
        //$templateCache.put('topNavTpl', topNavTpl);
    }

    execute() {
        this.run(this.templateCaching);

        this.controller('AccordianController', AccordianController);
		this.directive('accordianDirective', () => new AccordianDirective());		
    }
}

export default Feature;
