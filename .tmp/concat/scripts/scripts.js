'use strict';

/**
 * @ngdoc overview
 * @name sassApp
 * @description
 * # sassApp
 *
 * Main module of the application.
 */
angular
  .module('sassApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap'
  ])
  .config(["$routeProvider", "$locationProvider", function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(false).hashPrefix('');
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);

'use strict';

/**
 * @ngdoc function
 * @name sassApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sassApp
 */
angular.module('sassApp')
  .controller('MainCtrl', ["$scope", function ($scope) {
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
}]);

angular.module('sassApp').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('views/main.html',
    "<div class=\"homePageView\"> <div class=\"row\"> <div class=\"col-xs-8\"> <div style=\"height: 305px\"> <div uib-carousel active=\"active\" interval=\"myInterval\" no-wrap=\"noWrapSlides\"> <div uib-slide ng-repeat=\"slide in slides track by $index\" index=\"$index\"> <img style=\"height: 300px\" ng-src=\"{{slide.image}}\"> <div class=\"carousel-caption\"> <h4>Product {{$index+1}}</h4> <p>{{slide.text | currency:\"&#8377;\":0}}</p> </div> </div> </div> </div> </div> <div class=\"col-xs-4\" style=\"top: 20px\"> <div class=\"MainDiv\"> <div class=\"imageDiv\"> <div ng-repeat=\"slide in slides | limitTo:4 track by $index\" class=\"ImageClass\"> <div class=\"modalContainer\" ng-style=\"{'background-image': 'url({{sideSlides+$index+'.png'}})'}\"> </div> </div> </div> </div> </div> <div class=\"row\"> <div class=\"col-xs-12\"> <div class=\"displayCss\"> <div class=\"imgContSize\" ng-repeat=\"product in allProducts\"> <div class=\"proContainer\"> <img ng-src=\"{{product.image}}\"> </div> </div> </div> <div class=\"brandContainerCss\"> <div class=\"displayBrandCss\" ng-repeat=\"brand in allBrands | limitTo:7\"> <div class=\"brandContainer\"> <img ng-src=\"{{brand.image}}\"> </div> </div> <div class=\"displayBrandCss\"> <div class=\"brandContainer\"> <span class=\"brandNumber\">274</span> <span class=\"brandsText\">All Brands</span> </div> </div> </div> </div> </div> <div class=\"row\"> <div class=\"col-xs-12\"> </div> </div> </div> <div class=\"footer\"> <div class=\"container\"> <div class=\"row\"> <div class=\"col-xs-12\"> <div class=\"varietiesCss\" ng-repeat=\"type in sections track by $index\"> <span>{{type}}</span> <span class=\"separatorCss\" ng-show=\"{{$index < sections.length-1}}\">.</span> </div> </div> </div> <div class=\"row\"> <div class=\"col-xs-3\"> <div class=\"rightsCss\"> <p class=\"compName\">BuyBlue</p> <span><span class=\"glyphicon glyphicon-copyright-mark\"></span> 2015 DivanRaj UI Kit. All rights reserved.</span> </div> </div> <div class=\"col-xs-6\"> <div class=\"footerSearchCss\"> <div class=\"footerSearchOptions\"> <span class=\"glyphicon glyphicon-envelope msgCss\"></span> <span class=\"glyphicon glyphicon-arrow-right rightIconCss\"></span> <input type=\"text\" placeholder=\"Sign up for style news\" name=\"\"> </div> <div class=\"footerOptions\"> <span>Privacy & Cookies</span> <span>Terms & Conditions</span> <span>Accessibility</span> </div> </div> </div> <div class=\"col-xs-3\"> <div class=\"socialIcon\"> <span class=\"fa fa-twitter\"></span> <span class=\"fa fa-instagram\"></span> <span class=\"fa fa-pinterest-p\"></span> <span class=\"fa fa-facebook\"></span> </div> <div class=\"paymentLogo\"> <span class=\"fa fa-cc-visa\"></span> <span class=\"fa fa-cc-discover\"></span> <span class=\"fa fa-cc-paypal\"></span> </div> </div> </div> </div> </div></div>"
  );

}]);
