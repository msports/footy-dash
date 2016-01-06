/**
 *  NotifierConfig set angular-sweetnotifier needed configuration
 *  Notifications
 *
 *  @author  Chip
 *  @date    January 6, 2015
 *
 */
'use strict';
import ConfiguratorBase from 'lib/ConfiguratorBase';

class Configurator extends ConfiguratorBase {
	constructor(features, app) {
			super(features, app);
		}
		/*@ngInject*/
	notifierConfig(notifierProvider) {
		notifierProvider.setPlacement('top', 'right');
		notifierProvider.setUseNativeWhileBlur(true);
	}

	execute() {
		this.config(this.notifierConfig);
	}
}

export default Configurator;
