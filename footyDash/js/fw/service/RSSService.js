'use strict';

class RSSService {
	constructor($http) {
      this.http = $http;
	}
	parseFeed(url) {
			return this.http.jsonp('//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=50&callback=JSON_CALLBACK&q=' + encodeURIComponent(url));
		}
		/*@ngInject*/
	static RSSServiceFactory($http) {
		return new RSSService($http);
	}
}

export default RSSService;
