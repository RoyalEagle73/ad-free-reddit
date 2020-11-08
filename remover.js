setInterval(function(){
	
	// Finding ads
	var ads = document.querySelectorAll('[data-before-content="advertisement"]');
	var promotions = document.querySelectorAll('[class*="promoted"]');	
	var rpan = document.querySelectorAll('[class="_1EG7_Cm18ANvUvJ4rJdRgQ _3Qkp11fjcAw9I9wtLo8frE hrQ5rXDbyl6t3TIXxENXB scrollerItem"]');

	// Concatenating all ads in one
	ads = [...ads, ...promotions, ...rpan];
	//console.log("Found total " + ads.length + " ads");

	// Deleting all ads
	for(i=0; i<ads.length; i++){
   	 		ads[i].outerHTML = "";
			//console.log("Ad removed, Ads remaining = " + ads.length);
	}

} ,2000)
