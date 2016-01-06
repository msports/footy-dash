'use strict';

import {expect} from 'node_modules/chai/chai';
import HomeController from 'js/features/home/controller/HomeController';

let component;

describe('HomeController', function() {
    beforeEach(inject(function($rootScope) {
		let  $scope = $rootScope.$new();
        component = new HomeController($scope);
    }));

    it('Should not be null', function () {
        expect(component).not.to.equal(null);
    });
	it('Should have the name HomeController', function(){
		expect(component.name).to.equal('HomeController');
	});
	it('Run should return HomeController', function(){
		expect(component.run()).to.equal('HomeController');
	});


});



