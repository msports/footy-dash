/**
 *  Defines the HomeService
 *
 *  @author  Chip
 *  @date    Dec 31, 2015
 *
 */
'use strict';
/**
 * AppHttpResponseInterceptor. 
 * @request
 * @requestError
 * @response
 * @responseError
 */
class AppHttpResponseInterceptor {
	constructor($q) {
		
		return {
			/**
			 * Sets response headers before http request
			 * Return the config or wrap it in a promise if blank
			 * @param   {Object} config [http request configuration]
			 */
			request(config) {
				return config || $q.when(config);
			  },
			  /**
			   * On request failure return the promise rejection.
			   * @param   {Object} rejection [http request error object]
			   * @returns {Object} [http request error promise rejection]
			   */
			  requestError(rejection) {
				// console.log(rejection); // Contains the data about the error on the request.
				return $q.reject(rejection);
			  },

			  /**
			   * On response success return the response or promise.
			   * @param   {Object} response [http success response object]
			   * @returns {Object} [http response object]
			   */
			  response(response) {
				//console.log(response); // Contains the data from the response.
				return response || $q.when(response);
			  },

			  /**
			   * Returns response error on response failture
			   * @param   {Object} rejection [http error response object. Contains the data about the error.]
			   * @returns {Object} [http response error returns the promise rejection.]
			   */
			  responseError(rejection) {
				  console.log(rejection); 
				return $q.reject(rejection);
			  }
		}
		
    };
    /*@ngInject*/
	static httpAuthFactory($q) {
       return new AppHttpResponseInterceptor($q);
    }

};

export default AppHttpResponseInterceptor;
