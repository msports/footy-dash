const INIT = new WeakMap();
const FeedService = new WeakMap();
const TIMEOUT = new WeakMap();
const SCOPE = new WeakMap();

/**
 * HomeController a controller for the home feature/tab.
 * Handles event delegation between child directives
 */
class HomeController {

	/*@ngInject*/
	constructor($timeout, RSSService, $scope, $filter) {
		var vm = this;
		TIMEOUT.set(this, $timeout);
		FeedService.set(this, RSSService);
		this.RSSService = RSSService;

		this.feeds = [];

		this.filter = $filter;

		SCOPE.set(this, $scope);

		this.addListeners();

		this.getRSSFeed();
	}
	
	addListeners() {
		SCOPE.get(this).$on('FOOTBALL_SERVICE_TABLE_LOADED', (event, data) => {this.broadcastServiceEvent.apply(this, [event, data])});
		SCOPE.get(this).$on('FOOTBALL_SERVICE_TEAM_DETAILS', (event, data) => {this.broadcastServiceEvent.apply(this, [event, data])});		
        //SCOPE.get(this).$on('FOOTBALL_SERVICE_TEAM_PLAYERS', (event, data) => {this.broadcastServiceEvent.apply(this, [event, data])});
	}
	
	broadcastServiceEvent(event, data) {
		//console.log('Broadcasting: event: '+event.name+' data: '+data.teamID);
		SCOPE.get(this).$broadcast('FOOTBALL_SERVICE_GET_TEAM_DETAILS', {teamID: data.teamID});
		SCOPE.get(this).$broadcast('FOOTBALL_SERVICE_GET_TEAM_PLAYERS', {teamID: data.teamID});
		SCOPE.get(this).$broadcast('FOOTBALL_SERVICE_GET_TEAM_FIXTURES', {teamID: data.teamID});
		/*switch (event.name) {
			case 'FOOTBALL_SERVICE_TEAM_DETAILS': 
			case 'FOOTBALL_SERVICE_TABLE_LOADED':

			break;
			case 'FOOTBALL_SERVICE_TEAM_PLAYERS': 
				//SCOPE.get(this).$broadcast('FOOTBALL_SERVICE_GET_TEAM_PLAYERS', {teamID: data.teamID});
			break;
		}*/
	}

	getRSSFeed() {
		FeedService.get(this).parseFeed('http://feeds.bbci.co.uk/sport/0/football/rss.xml?edition=int').then(
			response => {
				this.feeds = response.data.responseData.feed.entries;
			}
		);
	}

	run() {
		return 'HomeController';
	};
}

export default HomeController;
