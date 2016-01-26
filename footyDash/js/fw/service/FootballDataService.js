/**
 *  Defines the FootballDataService
 *
 *  @author  Chip
 *  @date    January 6, 2015
 *
 */
'use strict';
import events from 'fw/service/Events';
import apiKeys from 'apiKey/apiKeys';

const HTTP = new WeakMap();

class FootballDataService {
	constructor($http, utils, $q, $location) {
		this.apiKeys = apiKeys;
		$http.defaults.headers.common['X-Auth-Token'] = this.apiKeys['api.football-data'];
		HTTP.set(this, $http);
		this.utils = utils;
	}

	//Catch all API call
	makeAPICall(endPoint) {
			return HTTP.get(this).get(this.utils.getExternalApi(endPoint)).then(result => result.data);
		}
		/*@ngInject*/
	static FootballDataFactory($http, utils) {
		return new FootballDataService($http, utils);
	}

	execute() {}

};

export default FootballDataService;