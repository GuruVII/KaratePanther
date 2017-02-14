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