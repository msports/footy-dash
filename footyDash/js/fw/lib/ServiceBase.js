/**
 *  ServiceBase class
 *
 *
 *  @author  Chip
 *  @date    January 6, 2015
 *
 */
'use strict';
class ServiceBase {

    constructor(features, app) {
        //console.log('Features: '+features);
		this.features = features;
        this.app = app;
        this.factory = app.factory;
        this.service = app.service;
		//console.log('New Service Base: '+features);
    }

    execute() {
    }
}

export default ServiceBase;
