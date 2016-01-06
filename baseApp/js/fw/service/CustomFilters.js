/**
 *
 *  Defines `custom filters` service
 *
 *
 *  @author  Chip
 *  @date    January 6, 2015
 *
 */
'use strict';

import { filter } from 'angular';

class CustomFilters {

	constructor($FilterProvider) {
      console.log('New custom filters');
		$filterProvider.register('teamIDFilter', this.teamIDFilter);
	}

	//Filters team ID from team players detail URL
	teamIDFilter(teamURL) {
		var teamID = teamURl.slice(teamURl.lastIndexOf('/') + 1);
		return teamID;
	}

	//Filters players market value and returns number alue
	playerMarketValue(marketValue) {
		return Number(marketValue.replace(/\D/g, ''));
	}

	/*@ngInject*/
	static CustomFiltersFactory($FilterProvider) {
		return new CustomFilters();
	}

	execute() {
		
	}
}

//CustomFilters.CustomFiltersFactory.$inject['$filterProvider'];

export default CustomFilters;