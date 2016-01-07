/**
 * ******************************************************************************************************
 *
 *   Defines a Footer
 *
 *  @author  Chip
 *  @date    Jan 7, 2016
 *
 * ******************************************************************************************************
 */
'use strict';
import FeatureBase from 'lib/FeatureBase';
import { element } from 'angular';
import FooterDirective from '../directives/FooterDirective';
/**
 * HomeController a controller for the home feature/tab.
 * Handles event delegation between child directives
 */
export default class Feature extends FeatureBase {
    /**
     * Constructor for the footer module
     */
    constructor() {
        super('FooterModule');
        this.$body = element(document.body);
    }

    beforeStart() {
        this.$body.append('<footer-directive></footer-directive>');
    }
  
    execute() {
        this.directive('footerDirective', () => new FooterDirective());
    }
}
