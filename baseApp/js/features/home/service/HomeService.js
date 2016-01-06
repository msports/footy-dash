/**
 *  Defines the HomeService
 *
 *  @author  Chip
 *  @date    Dec 12, 2015
 *
 */
'use strict';
import events from 'fw/service/Events';


const HTTP = new WeakMap();

class HomeService {
	constructor($http, utils, $q, $location) {
		HTTP.set(this, $http);
		this.utils = utils;
		this.name = 'HomeService';
	}
	

   getRegistrants(){
	   return HTTP.get(this).get(this.utils.getApi('registrants')).then(result => result.data);	   
	}
	
	static homeFactory($http, utils){
	    return new HomeService($http, utils);
	}
	
	execute() {
    }

};

HomeService.homeFactory.$inject = ['$http', 'utils'];


export default HomeService;