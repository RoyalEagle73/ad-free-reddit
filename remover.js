setInterval(function(){
	
	var ads = document.querySelectorAll('[data-before-content="advertisement"]');
	var promotions = document.querySelectorAll('[class*="promoted"]');
	
	ads = [...ads,...promotions];
	
	for(i=0; i<ads.length; i++){
   	 		ads[i].outerHTML = "";
			//console.log("Ad removed, Ads remaining = " + ads.length);
	}

	}
,3000)
