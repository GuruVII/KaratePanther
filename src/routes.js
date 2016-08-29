
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
    
        $stateProvider.state('kobudo',
	{
		url: '/kobudo',
		templateUrl: "templates/kobudo.html"
	});
    
    $stateProvider.state('klub',
	{
		url: '/klub',
		templateUrl: "templates/klub.html"
	});
	$stateProvider.state('karate',
	{
		url: '/karate',
		templateUrl: "templates/karate.html"
	});

	$stateProvider.state('novice',
	{
		url: '/novice',
		templateUrl: "templates/novice.html"
	});
    
    	$stateProvider.state('piskotki',
	{
		url: '/piskotki',
		templateUrl: "templates/piskotki.html"
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

	$stateProvider.state('treningSub', {
	  url: '/index/:scrollTo',  
	  controller: 'mainCtrl', 
	  templateUrl: 'templates/home.html',
	});
	$stateProvider.state('klubSub', {
	  url: '/klub/:scrollTo',  
	  controller: 'klubCtrl', 
	  templateUrl: 'templates/klub.html',
	});
	$stateProvider.state('karateSub', {
	  url: '/karate/:scrollTo',  
	  controller: 'karateCtrl', 
	  templateUrl: 'templates/karate.html',
	});
    $stateProvider.state('kobudoSub', {
	  url: '/kobudo/:scrollTo',  
	  controller: 'kobudoCtrl', 
	  templateUrl: 'templates/kobudo.html',
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
