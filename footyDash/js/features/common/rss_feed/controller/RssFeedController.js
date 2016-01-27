/**
 * ******************************************************************************************************
 *
 *   Defines a RssFeedController
 *
 *  @author  Chip
 *  @date    Jan 27, 2016
 *
 * ******************************************************************************************************
 */
'use strict';

const FeedService = new WeakMap();
const TIMEOUT = new WeakMap();
/**
 * RssFeedController a controller for the RSS feature/tab.
 * Retrieves rss feed from http://feeds.bbci.co.uk/sport/0/football/rss.xml?edition=int
 * TODO: make feed url dynamic for reuse with other feeds
 * TODO: Add timeout for feed service
 */
export default class RssFeedController {
	/**
	 * Constructor for RssFeedService
	 * @param {[[Type]]} $timeout    [[Description]]
	 * @param {[[Type]]} RSSServicee [[Description]]
	 */
	/*@ngInject*/
	constructor($timeout, RSSService) {
		var vm = this;
		TIMEOUT.set(this, $timeout);
		FeedService.set(this, RSSService);
		this.feeds = [];
		this.getRssFeed();
 
	}
	/**
	 * Retrieves RSS feed
	 */	
	getRssFeed() {
		FeedService.get(this).parseFeed('http://feeds.bbci.co.uk/sport/0/football/rss.xml?edition=int').then(
			response => {
				this.feeds = response.data.responseData.feed.entries;
			}
		);
	}
	/**
	 * Returns name of RssFeedController
	 * @returns {string} - 'RssFeedController'
	 */
	run() {
		return 'RssFeedController';
	};
}
