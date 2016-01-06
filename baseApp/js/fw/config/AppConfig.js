/**
 *  AppConfig is the configuration of the whole application, in case
 *  you have different stuff for each env
 *
 *
 *  @author  Chip
 *  @date    January 6, 2015
 *
 */
'use strict';
import ConfiguratorBase from 'lib/ConfiguratorBase';
import __config from 'etc/config';
/**
 * Configurator. Initializes config file 
 * and assigns it to this.config
 * @extends {ConfiguratorBase}
 */
class Configurator extends ConfiguratorBase {
    constructor(features, app) {
        super(features, app);
        this.config = __config;
    }

    execute() {
        this.constant('CONF', this.config);
    }
}

export default Configurator;
