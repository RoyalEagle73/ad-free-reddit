setInterval(function(){
	
	var ads = document.querySelectorAll('[data-before-content="advertisement"]');
	var promotions = document.querySelectorAll('[class*="promoted"]');

	//console.log("ads detected = " + ads.length)
	//console.log("promotions detected = " + promotions.length)

	for(i=0; i<ads.length; i++){
   	 		ads[i].outerHTML = "";
			//console.log("Ad removed, Ads remaining = " + ads.length);
		}

	for(i=0; i<promotions.length; i++){
   	 		promotions[i].outerHTML = "";
			//console.log("promotion removed, promotions remaining = " + promotions.length);
		}
	}
,3000)
