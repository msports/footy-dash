/**
 *
 *  Defines `events` service which helps developer
 *  control EVENT system
 *
 *
 *  @author  Chip
 *  @date    January 6, 2015
 *
 */
'use strict';
import ServiceBase from 'lib/ServiceBase';
import { isFunction } from 'angular';

class Service extends ServiceBase {
    constructor(features, app) {
        super(features, app);
    }
    /*@ngInject*/
    events($rootScope) {
        var factory = {};

        var listeners = {};

        factory.emit = function(eventName, data) {
           console.log('Heard Emit: '+eventName);
			if (!eventName) {
                return;
            }
            $rootScope.$broadcast(eventName, data);
        };

        factory.on = function(eventName, callback) {
            if (!listeners[eventName]) {
                listeners[eventName] = [];
                $rootScope.$on(eventName, function(event, data) {
                    listeners[eventName].forEach(function(listener) {
                        listener(data);
                    });
                });

            }
            if (isFunction(callback)) {
                listeners[eventName].push(callback);
            }
        };

        factory.off = function(eventName, callback) {
            if (!listeners[eventName]) {
                return;
            }
            var index = listeners[eventName].indexOf(callback);
            if (index > -1) {
                listeners[eventName].splice(index, 1);
            }
        };

        return factory;
    }

    execute() {
        this.factory('events', this.events);
    }
}

export default Service;
