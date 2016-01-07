const FeedService = new WeakMap();
const TIMEOUT = new WeakMap();

class RssFeedController {
	/*@ngInject*/
	constructor($timeout, RSSService, $scope) {
		var vm = this;
		TIMEOUT.set(this, $timeout);
		FeedService.set(this, RSSService);
		this.feeds = [];
		this.getRssFeed();

	}
	
	getRssFeed() {
		FeedService.get(this).parseFeed('http://feeds.bbci.co.uk/sport/0/football/rss.xml?edition=int').then(
			response => {
				this.feeds = response.data.responseData.feed.entries;
			}
		);
	}

	run() {
		return 'RssFeedController';
	};
}

export default RssFeedController;
