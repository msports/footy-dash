/**
 *  SSOConfig set authorised configuration.
 *
 *  @author  Chip
 *  @date    January 6, 2015
 *
 */
'use strict';
import ConfiguratorBase from 'lib/ConfiguratorBase';
import AppHttpResponseInterceptor from 'lib/AppHttpResponseInterceptor';

class Configurator extends ConfiguratorBase {
    constructor(features, app) {
        super(features, app);
    }
    /*@ngInject*/
    httpConfig($httpProvider, $provide) {
        $httpProvider.defaults.headers.common.Accept = 'application/json;charset=utf-8';
        //$httpProvider.defaults.withCredentials = true;
		$provide.factory('authorizeInterceptor', AppHttpResponseInterceptor.httpAuthFactory);
		$httpProvider.interceptors.push('authorizeInterceptor');
    }

    execute() {
        this.config(this.httpConfig);
    }
}

export default Configurator;
