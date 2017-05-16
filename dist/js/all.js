$(document).on('click',function(){
$('.collapse').collapse('hide');
}) //A sloppy workaround that hides the dropdown menu when no longer used.

$("#navbar").find("li").on("click", function(){
$("#navbar").find("li").removeClass("active");
$(this).addClass("active");
});// finds all children of the #navbar that are in a list, removes active class and adds it to the one you clicked on
app.controller('mainCtrl', function($scope) {
        $scope.showCookies = false;
        checkCookie();
    
        var X = document.cookie
        console.log(X);
    
    $scope.rejectCookies = function(){ //this functions just hides the cookie prompt
        $scope.showCookiePrompt = false;
        console.log("reject")
    };
    
    $scope.acceptCookies = function(){ //This function makes a permanent cookie for the website
        document.cookie = "wantsCookies=true; expires=Thu, 02 Jan 2116 00:00:00 UTC";
        $scope.showCookies = true;
        $scope.showCookiePrompt = false;
        console.log("accept")
    };
    
    


    function getCookie(cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for(var i = 0; i <ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0)==' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length,c.length);
            }
        }
        return "";
    } 

    function checkCookie() {
        var cookieCheck = getCookie("wantsCookies");
        if (cookieCheck=="true") {
            $scope.showCookies = true;
            $scope.showCookiePrompt = false;
        }
        else {
            $scope.showCookiePrompt = true; 
        }
    } ;


    });

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
		url: '/jezero',
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
	  url: '/jezero/:scrollTo',  
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

app.controller('barjeCtrl', function($scope) {
	$scope.currentPageURL = "jezero";
});
app.controller('karateCtrl', function($scope) {
	$scope.currentPageURL = "karate";
$scope.slovarGibi = [{word:"	Age	", translation:"	navzgor 	"},
{word:"	Ashi	", translation:"	noga oz. stopalo	"},
{word:"	Barate	", translation:"	hrbet prstov 	"},
{word:"	Chudan	", translation:"	srednji nivo	"},
{word:"	Empi	", translation:"	komolec	"},
{word:"	Gedan	", translation:"	spodnji nivo	"},
{word:"	Gyaku te	", translation:"	nasprotna roka	"},
{word:"	Haito	", translation:"	notranji rob dlani	"},
{word:"	Heisho	", translation:"	hrbet dlani 	"},
{word:"	Hidari	", translation:"	levo 	"},
{word:"	Hiji	", translation:"	tudi empi komolec 	"},
{word:"	Hiraken	", translation:"	drugi členek kazalca, sredinca in prstanca 	"},
{word:"	Hitosashi ippon ken	", translation:"	oblika pesti: členek kazalca 	"},
{word:"	Hiza	", translation:"	koleno	"},
{word:"	Hizagashira	", translation:"	pogačica	"},
{word:"	Ima	", translation:"	hitro	"},
{word:"	Ippon ken	", translation:"	oblika pesti: en členek sredinca iz pesti 	"},
{word:"	Ippon nukite	", translation:"	oblika pesti: iztegnjen kazalec	"},
{word:"	Jinchu	", translation:"	ciljna točka udarca tik nad zgornjo ustnico	"},
{word:"	Jodan	", translation:"	zgornji nivo.	"},
{word:"	Juji	", translation:"	križno 	"},
{word:"	Kaisho	", translation:"	odprta roka oz. hrbtna stran dlani. Ponavadi se nanaša na udarce z roko iz strani, pri katerih pest sploh ni ali ni do konca stisnjena.	"},
{word:"	Kakato	", translation:"	peta 	"},
{word:"	Kakuto	", translation:"	navzdol ukrivljeno zapestje. Udarna površina - pregib. 	"},
{word:"	Kanuki	", translation:"	prečno, počez 	"},
{word:"	Keage	", translation:"	trzaj 	"},
{word:"	Kekomi	", translation:"	potisk 	"},
{word:"	Kentsui	", translation:"	tudi Tetsui. 'roka kladivo' 	"},
{word:"	Koken	", translation:"	sklep zapestja	"},
{word:"	Kumade	", translation:"	'medvedja šapa' 	"},
{word:"	Mae	", translation:"	spredaj 	"},
{word:"	Mawate	", translation:"	obrat 	"},
{word:"	Migi	", translation:"	desno 	"},
{word:"	Mune	", translation:"	prsa 	"},
{word:"	Nihon nukite	", translation:"	oblika pesti: iztegnjena kazalec in sredinec	"},
{word:"	Nukite	", translation:"	konica prstov	"},
{word:"	Ojajubi	", translation:"	oblika pesti: prvi členek palca 	"},
{word:"	Sanbon nukite	", translation:"	dlan z iztegnjenimi prsti, ki tiščijo skupaj. Udarna površina so blazinice kazalca, sredinca in prstanca. 	"},
{word:"	Seika tanden	", translation:"	središče telesa 	"},
{word:"	Seiken	", translation:"	oblika pesti: ravna pest, udarec s prvima členkoma kazalca in sredinca	"},
{word:"	Seiryuto	", translation:"	'volova čeljust'	"},
{word:"	Seoi	", translation:"	hrbet 	"},
{word:"	Shiku	", translation:"	prijem. Nepopolnoma skrčeni prsti pripravljeni za prijem.  	"},
{word:"	Shuto	", translation:"	roka nož, zunanji rob dlani.	"},
{word:"	Sokuto	", translation:"	rob stopala 	"},
{word:"	Soto	", translation:"	zunanji 	"},
{word:"	Te	", translation:"	roka	"},
{word:"	Tanden	", translation:"	center telesa, 3 centimetre pod popkom	"},
{word:"	Tate	", translation:"	navpični 	"},
{word:"	Tate shuto	", translation:"	roka meč, zunanji rob dlani 	"},
{word:"	Tegatana	", translation:"	rob dlani 	"},
{word:"	Tegetana	", translation:"	rob dlani ob malem prstu (roka v obliki meča) 	"},
{word:"	Teisho	", translation:"	spodnji del dlani 	"},
{word:"	Tekubi	", translation:"	zapestje 	"},
{word:"	Tensho	", translation:"	spodnji rob baze dlani.	"},
{word:"	 Tetsui	", translation:"	oblika pesti: roka kladivo, udarec s spodnjim delom pesti 	"},
{word:"	Tobi	", translation:"	skok 	"},
{word:"	Toshi	", translation:"	spuščajoč se 	"},
{word:"	Uchi	", translation:"	notranji, noter	"},
{word:"	Ude	", translation:"	podlaket 	"},
{word:"	Uraken	", translation:"	oblika pesti: hrbtna stran pesti, udarec z zunanjim delom pesti s prvima dvema členkoma.	"},
{word:"	Waki	", translation:"	od strani 	"},
{word:"	Washide	", translation:"	'orlov kljun' - skupaj stisnjene blazinice vseh prstov na roki 	"},
{word:"	Yoko	", translation:"	na stran, stranski 	"},
{word:"	Yubi	", translation:"	prst 	"}
];


$scope.slovarStavi = [{word:"	Fudo dachi	", translation:"	podoben zenkutsu dachiju, le da je zadnja noga pokrčena, stav je krajši, zadnja noga pod kotom 45 stopinj, dolžina najmanj dve širini kolkov, širina ena širina kolkov (teža 50 : 50) 	"},
{word:"	Gankaku dachi	", translation:"	stav žerjava. Stopalo noge na podlagi pod kotom 45 stopinj, drugo stopalo za kolenom nosilne noge, koleno te noge pokrčeno (teža 100 na stoječi nogi). Tudi Tsuro ashi dachi ali Sagi ashi dachi.	"},
{word:"	Hachiji dachi	", translation:"	razkoračni stav z nogama pod kotom 45 stopinj in v širini ramen ter razširjenimi rokami (teža 50 : 50) 	"},
{word:"	Hangetsu dachi	", translation:"	stav polovice lune 	"},
{word:"	Heiko dachi	", translation:"	osnovni pripravni razkoračni stav	"},
{word:"	Heisoku dachi	", translation:"	Musubi dachi s paralelnimi stopali. Neformalni pripravni stav.	"},
{word:"	Horan no kamae	", translation:"	pripravni položaj 'jajce v gnezdu' uporabljen v določenih katah. Druga roka prekriva pest.	"},
{word:"	Hungetsu dachi	", translation:"	prednja noga pod kotom od 45 do 60 stopinj obrnjena navznoter, zadnja pod kotom 45 stopinj, rahlo pokrčeno (teža 50 : 50) 	"},
{word:"	 Iaigoshi dachi	", translation:"	prednja noga v liniji stava, zadnja v isti liniji na prstih, koleno pokrčeno na tleh pod kotom 90 stopinj (teža 60 : 40)	"},
{word:"	Kiba dachi	", translation:"	jahalni stav	"},
{word:"	Kokutsu dachi	", translation:"	zadnji stav.	"},
{word:"	Kosa dachi	", translation:"	stav s prekrižanimi nogami 	"},
{word:"	Koza dachi	", translation:"	(križni stav) uporabljamo predvsem kot zaključni ali prehodni stav pri udarjanju in blokiranju. Kot vsi stavi ima tudi ta veliko različic, ki so zelo uporabne v športni borbi, kot prehodni stav, iz katerega lahko izvajamo najrazličnejše napade. Zato bi moral vsak borec posvetiti več časa učenju uporabe tega stava v borbi. Pri tem stavu so noge prekrižane, s stopali pravokotno eno na drugo in s težiščen enakomerno porazdeljenim na obe nogi. Da dosežemo stabilnost, je potrebno nasloniti koleno ene noge v zadnji del kolena druge noge in spustiti težišče.	"},
{word:"	Musubi dachi	", translation:"	(stav mirno) se uporablja predvsem kot stav za pozdrav in meditacijo, preden začnemo ali končamo z izvajanjem tehnike.	"},
{word:"	Neko ashi dachi	", translation:"	(mačji stav). Veliko tehnik v karateju je nastalo tako, da so ljudje posnemali živali, ter nastale tehnike poimenovali po njih. Tako je verjetno tudi ta stav dobil ime mačji stav, saj spominja na položaj na obrambo pripravljene mačke. Pomembno pri stavu je, da je težišče telesa na zadnji nogi, sprednja noga pa se dotika tal samo s prsti. Odvisno od namena uporabe, je lahko zadnja noga obremenjena od 70 od 95 odstotkov telesne teže.	"},
{word:"	Reinoji dachi	", translation:"	položaj, kjer stopalo tvorijo črko L 	"},
{word:"	Renoji dachi	", translation:"	stopali narazen za dolžino stopalo, zadnje skoraj pod kotom 90 stopinj, sprednje naravnost (teža 10 : 90)	"},
{word:"	Sagi ashi dachi	", translation:"	stav na eni nogi. Tudi Gankaku dachi ali Tsuru ashi dachi. 	"},
{word:"	Sanchin dachi	", translation:"	je med redkimi stavi, ki se niso spreminjali skozi stoletja do današnjih dni, v vseh stilih karateja. Še posebej so ga negovale in uporabljale šole okinavskega karateja. Danes se ta stav uporablja predvsem za izvajanje dihalnih kat ali kot stav za borbo na pol distanci. Največ ga uporabljamo za izvajanjem krožnih blokad, polkrožnih udarcev z roko, udarcev s komolci ali koleni. Težišče telesa je enakomerno porazdeljeno na obe nogi, ki sta razmaknjeni za širino ramen. Nogi sta v kolenih rahlo pokrčeni, s stopali obrnjenimi navznoter.	"},
{word:"	Shiko ashi dachi	", translation:"	(medvedji stav) je med tistimi stavi, ki delajo učencu na začetku največ težav. Zaradi svoje velike širine in sedečega položaja, je v določenih mišičnih skupinah potrebno najprej izoblikovati statično moč, ki nam omogoča, da se v stavu ugodno počutimo. Uporabljamo ga predvsem kot obrambni stav, čeprav ga nekateri tekmovalci uporabljajo tudi kot borbeni stav. Njegove prednosti so velika stranska stabilnost, možnost hitrega izvajanja stranskih nožnih udarcev, ter velika stranska pasivna varnost. Noge so pri stavu razmaknjene za dvojno širino ramen, z enakomerno razporejenim težiščem na obeh stopalih, ki sta obrnjeni pod kotom 45° navzven.	"},
{word:"	Teiji dachi	", translation:"	stav s stopali v obliki črke T 	"},
{word:"	Tsuru ashi dachi	", translation:"	(stav žerjava). Ime stava izhaja iz položaja, ki je podoben na eni nogi stoječemu žerjavu. Danes ga v modernem karateju malo uporabljamo. Največkrat ga uporabljamo v katah kot blok stav ali prehodni stav pri nekaterih nožnih tehnikah.	"},
{word:"	Tsuruashi dachi	", translation:"	stopalo nosilne noge pod kotom od 30 - 45 stopinj, drugo stopalo pokrčene noge se s prsti dotika kolena nosilne noge (teža 100 na nosilni nogi)	"},
{word:"	Uchi hachiji dachi	", translation:"	razkrečeni nogi v širini bokov, stopala obrnjena navznoter za 30 stopinj, roki z dlanmi ob telesu (teža 50 : 50) 	"},
{word:"	Zenkutsu dachi	", translation:"	(naprej naslonjeni položaj). Dolžina stava je ena in pol dolžine normalnega koraka (ali malo več). Telesna teža ni enakomerno porazdeljena na obe nogi, temveč je več telesne teže na sprednji nogi. Stav uporabljamo kot zaključni stav pri napadu s premočrtnimi udarci ali kot blok stav, pri blokiranju z osnovnimi blokadami brez izmika.	"}
];

$scope.slovarRokeUdarci = [{word:"	Age tsuki	", translation:"	vzpenjajoč se udarec z roko 	"},
{word:"	Awase tsuki ali Morote tsuki	", translation:"	udarec v obliki črke U z obema rokama. 	"},
{word:"	Chudan tsuki age	", translation:"	udarec z roko od spodaj navzgor (aperkat) v srednji nivo.	"},
{word:"	Empi uchi tudi Hiji ate	", translation:"	udarec s komolcem.	"},
{word:"	Furi uchi jodan	", translation:"	krožni udarec s pestjo v glavo.	"},
{word:"	Gedan tsuki	", translation:"	udarec z roko v spodnji del telesa. 	"},
{word:"	Gyaku tsuki	", translation:"	ravni udarec s čelom pesti, z roko na strani zadnje noge.	"},
{word:"	Haishu uchi	", translation:"	udarec s hrbtom dlani 	"},
{word:"	Haito uchi	", translation:"	udarec z robom dlani 	"},
{word:"	Harai te	", translation:"	tehnika čiščenja z roko 	"},
{word:"	Hasami tsuki	", translation:"	udarec-škarje 	"},
{word:"	Heiko tsuki	", translation:"	dvojni, simultani udarec z rokama. 	"},
{word:"	Jodan tsuki age	", translation:"	udarec z roko od spodaj navzgor (aperkat) v zgornji nivo.	"},
{word:"	Jun tsuki	", translation:"	Wado ryu izraz za Oi tsuki 	"},
{word:"	Kagi tsuki	", translation:"	polkrožni kratki 'kroše' udarec s čelom pesti izpred telesa vzporedno s tlemi in telesom.	"},
{word:"	Kaiten shuto uchi	", translation:"	krožni udarec iz obrata z zunanjim robom dlani.	"},
{word:"	Kaiten tsuki jodan	", translation:"	krožni udarec s pestjo iz obrata v glavo.	"},
{word:"	Kakuto uchi	", translation:"	tudi Ko uchi. Udarec s sklepom navzdol ukrivljenega zapestja. 	"},
{word:"	Kizami tsuki	", translation:"	udarec z roko na kratki poti 	"},
{word:"	Mae empi	", translation:"	udarec s komolcem naprej 	"},
{word:"	Mawashi empi uchi - Mawashi hiji ate	", translation:"	krožni udarec s komolcem. 	"},
{word:"	Mawashi tsuki	", translation:"	krožni udarec z roko 	"},
{word:"	Morote empi uchi	", translation:"	udarec z obema komolcema.	"},
{word:"	Morote tsuki - Awase tsuki	", translation:"	udarec z obema rokama v obliki črke U. 	"},
{word:"	Morote tsuki jodan	", translation:"	dvojni udarec s čelom pesti v glavo.	"},
{word:"	Oi tsuki	", translation:"	udarec s čelom pesti z istočasnim izkorakom iste noge.	"},
{word:"	Otoshi empi uchi - Otoshi hiji ate	", translation:"	udarec s komolcem navzdol. 	"},
{word:"	Ren tsuki	", translation:"	udarec z izmeničnima rokama 	"},
{word:"	Shuto uchi	", translation:"	krožni udarec z zunanjim robom dlani.	"},
{word:"	Tate empi	", translation:"	udarec s komolcem navzgor 	"},
{word:"	Tate tsuki	", translation:"	navpičen udarec s pestjo 	"},
{word:"	Tate uraken uchi	", translation:"	navpičen udarec s hrbtnim delom pesti 	"},
{word:"	Teisho uchi	", translation:"	udarec s spodnjim delom dlani 	"},
{word:"	Tetsui uchi	", translation:"	udarec z zunanjim robom pesti.	"},
{word:"	Tetsui uchi jodan	", translation:"	udarec z zunanjim robom pesti v glavo.	"},
{word:"	Ura tsuki	", translation:"	zgornji udarec z roko, ki se uporablja na manjših distancah 	"},
{word:"	Ushiro empi uchi	", translation:"	udarec s komolcem nazaj 	"},
{word:"	Yama tsuki	", translation:"	dvojni udarec z rokama v obliki širokega U-ja 	"},
{word:"	Yoko mawashi empi uchi	", translation:"	udarec s komolcem v stran 	"},
{word:"	Yun tsuki	", translation:"	ravni udarec s čelom pesti, z roko na strani sprednje noge.	"}
];

$scope.slovarRokeBloki = [
{word:"	Age uke	", translation:"	zgornji blok z roko 	"},
{word:"	Awase uke	", translation:"	povezani blok z rokama 	"},
{word:"	Empi kaki wake	", translation:"	stranski blok z obema komolcema.	"},
{word:"	Empi uke	", translation:"	blok s komolci.	"},
{word:"	Gedan barai	", translation:"	spodnji blok 	"},
{word:"	Gedan ude uke	", translation:"	spodnji blok s podlaketom 	"},
{word:"	Haishu uke	", translation:"	blok s hrbtnim delom roke 	"},
{word:"	Haito gedan barai	", translation:"	polkrožni zunanji blok spodnjega nivoja z robom dlani.	"},
{word:"	Juji uke	", translation:"	X blok 	"},
{word:"	Kaiten morote uke	", translation:"	dvojni blok iz obrata.	"},
{word:"	Kaka te	", translation:"	'kroše' blok 	"},
{word:"	Kaki wake uke	", translation:"	dvojni zunanji polkrožni blok z odprtima rokama.	"},
{word:"	Kakiwake	", translation:"	blok z obema rokama z zunanjim delom zapestja za obrambo pred napadom z obema rokama 	"},
{word:"	Kakuto uke - Ko uke 	", translation:"	blok s sklepom navzdol ukrivljenega zapestja. 	"},
{word:"	Manji uke	", translation:"	dvojni blok z rokama, pri katerem ena izvede blok Gedan barai, druga pa blok Jodan Uchi uke (oz. Jodan Soto Yoko Te). 	"},
{word:"	Morote gedan barai	", translation:"	polkrožni zunanji blok spodnjega nivoja z zunanjim robom podlahti obeh rok.	"},
{word:"	Morote uke	", translation:"	podprti blok. Roka in pest ene roke podpira blok druge roke. 	"},
{word:"	Seiken chudan uchi uke	", translation:"	polkrožni zunanji blok srednjega nivoja (roka v pest) z notranjim robom podlahti.	"},
{word:"	Seiken gedan barai	", translation:"	polkrožni zunanji blok (roke v pest) spodnjega nivoja z zunanjim robom podlahti.	"},
{word:"	Seiken gedan juji uke	", translation:"	blok spodnjega nivoja s prekrižanimi rokami.	"},
{word:"	Seiken gedan soto uke	", translation:"	polkrožnji notranji blok spodnjega nivoja (roka v pest) z zunanjim robom podlahti.	"},
{word:"	Seiken jodan uke	", translation:"	polkrožni zunanji blok z notranjim robom podlahti zgornjega nivoja.	"},
{word:"	Seiken morote chudan uke	", translation:"	dvojni zunanji blok (roka v pest) srednjega nivoja z notranjim robom podlahti.	"},
{word:"	Seiken morote uke	", translation:"	dvojni blok (roka v pest).	"},
{word:"	Shuto gedan barai	", translation:"	polkrožni zunanji blok spodnjega nivoja z zunanjim robom dlani.	"},
{word:"	Shuto jodan juji uke	", translation:"	križni blok z odprtima rokama zgornjega nivoja.	"},
{word:"	Shuto uke	", translation:"	blok z zunanjim robom dlani.	"},
{word:"	Shuto uke chudan	", translation:"	blok srednjega nivoja z zunanjim robom dlani.	"},
{word:"	Soto uke	", translation:"	zunanji blok 	"},
{word:"	Sukui uke	", translation:"	blok z notranjim delom podlahti.	"},
{word:"	Teisho uke	", translation:"	blok s spodnjim delom dlani 	"},
{word:"	Tetsui otoshi uke	", translation:"	polkrožni blok od zgoraj navzdol z zunanjim robom pesti.	"},
{word:"	Uchi uke	", translation:"	notranji blok z roko 	"},
{word:"	Wa uke	", translation:"	polkrožni blok z dlanjo, katerega pot je podobna kot pri bloku yoko uke. Kot da bi z dlanjo pred sabo s polkrožnim gibom obrisali steno. Na koncu bloka je roka obrnjena rahlo navzven. 	"}
];
$scope.slovarNoge = [
{word:"	Ashi barai	", translation:"	čiščenje nasprotnika z nogo oz. stopalom 	"},
{word:"	Deashi barai	", translation:"	izbijanje nasprotnikove noge s podplatom	"},
{word:"	Fumikomi	", translation:"	udarec z nogo (sekira) ponavadi v koleno, goleno ali nart nasprotnika 	"},
{word:"	Gyaku mawashi geri	", translation:"	obrnjen krožni udarec z nogo 	"},
{word:"	Hiza geri	", translation:"	udarec s kolenom.	"},
{word:"	Kaiten geri barai	", translation:"	krožni udarec z nogo v nizki nivo (metanje).	"},
{word:"	Kakato geri	", translation:"	udarec s peto.	"},
{word:"	Mae geri	", translation:"	udarec z zadnjo nogo naravnost naprej. Pri udarcu so prsti noge potegnjeni nazaj.	"},
{word:"	Mae geri keage	", translation:"	tudi Mae keage. Trzajni udarec z nogo v smeri naprej.	"},
{word:"	Mae geri kekomi	", translation:"	tudi Mae kekomi. Potisni udarec z nogo v smeri naprej. 	"},
{word:"	Mawashi geri	", translation:"	krožni udarec z zadnjo nogo. Cilj udarca so navadno glava, vrat, ledvica ali stegno.	"},
{word:"	Mikatsuki geri	", translation:"	srpast udarec z nogo 	"},
{word:"	Uchi mawashi geri	", translation:"	notranji krožni udarec 	"},
{word:"	Ura mawashi geri	", translation:"	krožni udarec, pri katerem pot noge poteka v obratni smeri kot pri mawashi geriju.	"},
{word:"	Ushiro geri	", translation:"	udarec z nogo nazaj, običajno izveden s predhodnim obratom.	"},
{word:"	Ushiro mawashi geri	", translation:"	krožni udarec z nogo nazaj, običajno izveden s predhodnim obratom.	"},
{word:"	Yoko geri	", translation:"	stranski udarec z nogo.	"},
{word:"	Yoko geri keage	", translation:"	udarec z nogo v stran 	"},
{word:"	Yoko geri kekomi	", translation:"	sunek z nogo v stran 	"},
{word:"	Yoko tobi geri	", translation:"	stranski udarec z nogo v zraku 	"},
{word:"	Yun geri	", translation:"	udarec s sprednjo nogo naravnost naprej.	"}
];

$scope.slovarTekmovanje=[{word:"	Aiuchi	", translation:"	na tekmovanjih; istočasno izvedeni uspešni tehniki	"},
{word:"	Aka	", translation:"	na tekmovanjih; rdeči tekmovalec	"},
{word:"	Aka ippon	", translation:"	rdeči osvoji ippon - 1 točko 	"},
{word:"	Aka no kachi	", translation:"	rdeči zmaga! Sodnik poševno dvigne roko k zmagovalcu.	"},
{word:"	Atoshi Baraku	", translation:"	še 10 sekund do konca tekme	"},
{word:"	Autogani moto no ichi	", translation:"	tekmovalci naj se premaknejo na začetne položaje	"},
{word:"	Fojubun	", translation:"	premalo moči	"},
{word:"	Fokushin shugo	", translation:"	sodniški posvet 	"},
{word:"	Fukushin	", translation:"	sodnik na tekmi karateja 	"},
{word:"	Hantei	", translation:"	razsodba. Glavni sodnik s piščalko pozove sodnike, da podajo svojo razsodbo z znaki zastavic. 	"},
{word:"	Hantei kachi	", translation:"	zmagovalec po odločitvi 	"},
{word:"	Hikiwake	", translation:"	neodločen izid pri borbah. Sodnik najprej prekriža roke na prsih, nato pa jih odroči z dlanmi obrnjenimi navzgor.	"},
{word:"	Ippon	", translation:"	na tekmovanjih; ena točka.	"},
{word:"	Ippon shobu	", translation:"	tekma za eno točko (na prvenstvih) 	"},
{word:"	Jikan	", translation:"	čas	"},
{word:"	Jogai	", translation:"	na tekmovanjih; izhod z borišča (prestop). Sodnik s kazalcem pod kotom 45 stopinj pokaže na mejo dela borišča, ki pripada kršitelju.	"},
{word:"	Kachi	", translation:"	zmagovalec. Aka kachi oz. Ao kachi. 	"},
{word:"	Kiken	", translation:"	na tekmovanjih; predaja. Sodnik s kazalcem pokaže na tekmovalca.	"},
{word:"	Maai ga toh	", translation:"	nepravilna distanca 	"},
{word:"	Mienai	", translation:"	'Nisem mogel videti!'' Opomba sodnika, da izvedene tehnike iz njegovega zornega kota ni bilo mogoče videti. 	"},
{word:"	Moto no ichi	", translation:"	uporablja se na tekmovanjih, pomeni pa vrnitev tekmovalcev in sodnikov na izhodiščna mesta	"},
{word:"	Mubobi	", translation:"	na tekmovanjih; izguba kontrole nad seboj.	"},
{word:"	Muboubi	", translation:"	namerno opuščanje obrambe na tekmi	"},
{word:"	Mumobi	", translation:"	opozorilo v zvezi s pomanjkanjem pozornosti v okviru lastne varnosti. Sodnik s kazalcem vzdignjenim pod kotom 60 stopinj pokaže na stran kršitelja. 	"},
{word:"	Sanbon shobu	", translation:"	tekma na tri točke (na turnirjih) 	"},
{word:"	Shugo	", translation:"	poklic sodnikov 	"},
{word:"	Shushin	", translation:"	glavni sodnik na tekmi karateja (oz. juda)	"},
{word:"	Toranai	", translation:"	brez točke 	"},
{word:"	Torimasen	", translation:"	izraz, ki se uporablja na tekmovanjih; pomeni tehniko, ki ni za točkovanje (neveljavna tehnika)	"},
{word:"	Tsuzukete	", translation:"	bori se naprej. Poziv sodnika po nedovoljeni prekinitvi. 	"},
{word:"	Tsuzukete hajime	", translation:"	nadaljevanje borbe	"},
{word:"	Yoi	", translation:"	pripravljen	"}
];

$scope.slovarNazivi = [
{word:"	Hanshi	", translation:"	mojster. Častni naziv za nosilca najvišje stopnje črnega pasu v določeni organizaciji, ki poudarja posameznikovo globoko razumevanje in poznavanje te veščine. 	"},
{word:"	Kancho	", translation:"	predsednik (naziv za učitelja, velemojstra)	"},
{word:"	Kohai	", translation:"	učenec, nižji po pasu 	"},
{word:"	Kyoshi	", translation:"	'učena oseba'. Stopnja (za) učitelja. Ponavadi nosilci črnega pasu 6. (rokudan) oz 7. (schichidan) stopnje	"},
{word:"	Meijin	", translation:"	veliki mojster	"},
{word:"	Renshi	", translation:"	ekspertni inštruktor, ponavadi s 5. (yodan) oz. 6. (rokudan) stopnjo črnega pasu, naziv pred nazivom Kyoshi, 'nekdo, ki ima ime, ki ni le eden izmed mnogih' 	"},
{word:"	Sempai ali senpai	", translation:"	pomočnik glavnega učitelja	"},
{word:"	Sensei	", translation:"	tisti, ki je rojen pred vsemi, učitelj	"},
{word:"	Shidoin	", translation:"	formalni inštruktor, ki še ni postal Sensei. Inštruktor pomočnik. 	"},
{word:"	Shihan	", translation:"	'kompas', tisti, ki vodi, ki kaže pravo pot, inštruktor, učitelj učiteljev	"},
{word:"	Soke	", translation:"	mojster določenega stila borilne veščine, največkrat v pomenu vodje oz. edinega naslednika določenega stila oz. šole (karateja)	"},
{word:"	 Sosai	", translation:"	predsednik 	"},
{word:"	 Yudansha	", translation:"	nosilec črnega pasu (katerakoli stopnja)	"}
]
});
app.controller('klubCtrl', function($scope) {
	$scope.currentPageURL = "klub";
});
app.controller('kobudoCtrl', function($scope) {
	$scope.currentPageURL = "kobudo";
});
app.controller('ljubljanaCtrl', function($scope) {
	$scope.currentPageURL = "ljubljana";
});
app.controller('medvodeCtrl', function($scope) {
	$scope.currentPageURL = "medvode";
});
app.controller('noviceCtrl', function($scope) {
});
app.directive('navbarDirective', function() {
  return {
    templateUrl: "templates/navbar.html",
    restrict: 'E'
  };
});