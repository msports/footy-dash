/**
 * ******************************************************************************************************
 *
 *   main.js manage the whole application.
 *
 *  @author  Chip
 *  @date    Jan 7, 2016
 *
 * ******************************************************************************************************
 */
'use strict';

import angular from 'angular';
import Initializers from 'init/main';
import Extensions from 'ext/main';
import Configurators from 'config/main';
import Services from 'service/main';
import Features from 'features/main';
import Splash from 'splash-screen';
/**
 * This is the main App Class. Instantiates application
 * and processes all features and subclasses. 
 */
class App {
    /**
     * Constructor
     */
    constructor() {
        this.appName = 'baseApp';
        this.features = [];
        
		Features.forEach(function(Feature) {
			//console.log(this.features);
            this.features.push(new Feature());
        }, this);
    }
    /**
     * Proccesses all app features and pushes them to 
     * a array od dependecies
     */
    findDependencies() {
        this.depends = Extensions.slice(0);
        var featureNames = this.features.filter(function(feature) {
            //console.log('FE: '+feature.export);
			return feature.export;
        })
            .map(function(feature) {
                return feature.export;
            });
        this.depends.push(...featureNames);
    }
    /**
     * Initializes before start method of all app features
     */
    beforeStart() {
        Initializers.forEach(function(Initializer) {
            (new Initializer(this.features)).execute();
        }, this);

        this.features.forEach(function(feature) {
            feature.beforeStart();
        });
    }
    /**
     * CreateApp
     */
    createApp() {
        this.features.forEach(function(feature) {
            feature.execute();
        });
        this.app = angular.module(this.appName, this.depends);
    }
    /**
     * Proccesses application configurations
     */
    configApp() {
        Configurators.forEach(function(Configurator) {
            (new Configurator(this.features, this.app)).execute();
        }, this);
    }
    /**
     * Registers all applications services. 
     * Events, Utils, Global services etc.
     */
    registerService() {
        Services.forEach(function(Service) {
            (new Service(this.features, this.app)).execute();
        }, this);
    }
    /**
     * After app has finished proccessing/loading 
     * destroys splash screen/spinner
     */
    destroySplash() {
        var _this = this;
        Splash.destroy();
        require('splash-screen/splash.min.css').unuse();
        setTimeout(function() {
            if (Splash.isRunning()) {
                _this.destroySplash();
            }
        }, 100);
    }
    /**
     * Launches app after all initial proccessing is done
     */
    launch() {
        angular.bootstrap(document, [this.appName]);
    }
    /**
     * Runs intial app proccessing
     */
    run() {
        this.findDependencies();
        this.beforeStart();
        this.createApp();
        this.configApp();
        this.registerService();
        this.destroySplash();
        this.launch();
    }

}

export default App;
