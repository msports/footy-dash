/**
 * ******************************************************************************************************
 *
 *   Defines a Accordian
 *
 *  @author  Chip
 *  @date    Jan 7, 2016
 *
 * ******************************************************************************************************
 */
'use strict';

import { element } from 'angular';
import FeatureBase from 'lib/FeatureBase';
import AccordianDirective from '../directives/AccordianDirective';
import events from 'fw/service/Events';
/**
 * Main class for Accordian module 
 * Creates instance of AccordianDirective and assigns it to the .directive property 
 */
export default  class Feature extends FeatureBase {
	/**
	 * Constructor for Accordian feature
	 * @param {[[Type]]} events [[Description]]
	 */	
	constructor() {
        super('accordianModule');	
   }

    beforeStart() {}
    /**
     * Execute class called by app Main. Creates new instance of AccordianDirective and assigns it to the .directive property
     */
    execute() {
		this.directive('accordianDirective', () => new AccordianDirective(events));		
    }
}

