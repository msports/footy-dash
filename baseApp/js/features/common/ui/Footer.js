/**
 *  Defines the Footer Module.
 *
 *  @author  Chip
 *  @date    January 6, 2015
 *
 */
'use strict';
import FeatureBase from 'lib/FeatureBase';
import { element } from 'angular';
import FooterDirective from '../directives/FooterDirective';

class Feature extends FeatureBase {

    constructor() {
        super('FooterModule');
        this.$body = element(document.body);
    }

    beforeStart() {
        this.$body.append('<footer-directive></footer-directive>');
    }
    /*@ngInject*/
    FooterCtrl($scope) {

    }

    execute() {
        this.mod.controller('FooterCtrl', this.FooterCtrl);
		this.directive('footerDirective', () => new FooterDirective());
    }
}

export default Feature;
