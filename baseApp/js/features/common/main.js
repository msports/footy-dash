/**
 *  Entrance of common service
 *
 *
 *  @author  Chip
 *  @date    January 6, 2015
 *
 */
import ui from './ui/main';
import leagueTable from './league_table/main';
import teamDetails from './team_details/main';
import playerDetails from './player_details/main';
import rssFeed from './rss_feed/main'

export default [leagueTable, teamDetails, playerDetails, rssFeed, ...ui];
