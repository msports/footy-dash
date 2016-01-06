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
import tpl from './Footer.html';
import __config from 'etc/config';

class Feature extends FeatureBase {

    constructor() {
        super('FooterModule');
        this.$body = element(document.body);
    }

    beforeStart() {
        this.$body.append(tpl);
    }
    /*@ngInject*/
    FooterCtrl($scope) {
        $scope.config = __config;
    }

    execute() {
        this.mod.controller('FooterCtrl', this.FooterCtrl);
    }
}

export default Feature;
