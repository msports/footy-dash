/**
 *
 *  config.js which contains the configuration of app, and it should never be cached
 *
 *  @author  Chip
 *  @date    January 6, 2015
 *
 **/
'use strict';

export default {
    'appname': 'baseApp',
    'base': '/footy-dash/',
    'version': '1.0.0',
    'icp': 'ICP here',
    'protocol': 'https://raw.githubusercontent.com/leftstick/generator-es6-angular/master/LICENSE',
    'api': '',
	'externalApi': '',
	'footBallLeagues' :  [
		{'name': 'Premier League', 'id':'398'}, 
	    {'name': 'Primera Division', 'id':'399'},
		{name: 'Bundesliga', id:'394'},
		{name: 'Ligue 1', id:'396'},
		{name: 'Serie A', id: '401'},
		{name: 'Primeira Liga', id: '402'}
	]
};
