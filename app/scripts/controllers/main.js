'use strict';

/**
 * @ngdoc function
 * @name sassApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sassApp
 */
angular.module('sassApp')
  .controller('MainCtrl', function ($scope) {
  	var _s  = $scope;
    _s.myInterval = 2000;
    _s.sideSlides = './images/slide';
	_s.noWrapSlides = false;
	_s.active = 0;
	_s.slides = [];
	_s.allProducts = [];
	_s.allBrands = [];
	_s.sections = ["Men","Women","Kids","Accessories","Sale","LookBook","Blog"];
	_s.addSlide = function(index) {
		_s.slides.push({
			image: './images/product'+index+'.png',
		    text: [1000,800,1200,500,200,900][_s.slides.length % 4],
		    id: index
		});
		_s.allProducts.push({
			image: './images/pro'+index+'.png',
		});
		_s.allBrands.push({
			image: './images/brand'+index+'.png',
		});
	};
	for (var i = 0; i < 8; i++) {
		_s.addSlide(i);
	}
});
