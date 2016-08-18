
app.config(function($stateProvider, $urlRouterProvider){


// the known route, with missing '/' - let's create alias
	$urlRouterProvider.when('', '/');
//  If a user goes to an url that doesn't have a valid state assigned
	$urlRouterProvider.otherwise('/error');

	$stateProvider.state('home',
	{
		url: '/',
		templateUrl: "templates/home.html",
	});

	$stateProvider.state('error',
	{
		url: '/error',
		templateUrl: "templates/error.html"
	});

	$stateProvider.state('ljubljana',
	{
		url: '/ljubljana',
		templateUrl: "templates/ljubljana.html"
	});
    
    $stateProvider.state('barje',
	{
		url: '/notranje-gorice',
		templateUrl: "templates/barje.html"
	});
    
    $stateProvider.state('koledar',
	{
		url: '/koledar',
		templateUrl: "templates/koledar.html"
	});
    
    $stateProvider.state('kontakt',
	{
		url: '/kontakt',
		templateUrl: "templates/kontakt.html"
	});
    
    $stateProvider.state('medvode',
	{
		url: '/medvode',
		templateUrl: "templates/medvode.html"
	});
    
    $stateProvider.state('onas',
	{
		url: '/onas',
		templateUrl: "templates/onas.html"
	});

	$stateProvider.state('novice',
	{
		url: '/novice',
		templateUrl: "templates/novice.html"
	});


	$stateProvider.state('ljubljanaSub', {
	  url: '/ljubjana/:scrollTo',  
	  controller: 'ljubljanaCtrl', 
	  templateUrl: 'templates/ljubljana.html',
	});

	$stateProvider.state('medvodeSub', {
	  url: '/medvode/:scrollTo',  
	  controller: 'medvodeCtrl', 
	  templateUrl: 'templates/medvode.html',
	});

	$stateProvider.state('barjeSub', {
	  url: '/notranje-gorice/:scrollTo',  
	  controller: 'barjeCtrl', 
	  templateUrl: 'templates/barje.html',
	});

});


app.run(function($rootScope, $location, $anchorScroll, $stateParams, $timeout) { //this code allows moving to specfic locations inside the page using ui-routes. source: http://plnkr.co/edit/gAK2thwsEVE0x083tFJf?p=preview
  $rootScope.$on('$stateChangeSuccess', function(newRoute, oldRoute) {
    $timeout(function() { 
      $location.hash($stateParams.scrollTo);
      $anchorScroll()
    }, 100)
  });
})
