/**
 * ******************************************************************************************************
 *
 *   Defines a PlayerDetailsDirective 
 *
 *  @author  Chip
 *  @date    Jan 27, 2016
 *
 * ******************************************************************************************************
 */
'use strict';
import {element}from 'angular';
import PlayerDetailsController from '../controller/PlayerDetailsController';

const templateUrl = require('js/features/common/player_details/partials/player.details.tpl.html');

export default  class PlayerDetailsDirective {
	/**
	 * Constructor for the player details directive
	 */
	constructor() {
		this.templateUrl = templateUrl;
		this.restrict = 'E';
		this.replace = true;
		this.scope = {};
		this.bindToController = {
			players: '=',
			changeSort: '&'
		};
		this.controller = PlayerDetailsController;
		this.controllerAs = 'vm';
	}

	/**
	 * Link function for the player details directive
	 */
	link(scope) {
		scope.changeSort = function(column){
			console.log('Dir Sort: '+column);
		}
	}
}
