setInterval(function(){
	
	var ads = document.querySelectorAll('[data-before-content="advertisement"]');
	
	console.log("ads detected = " + ads.length)
	
	for(i=0; i<ads.length; i++){
   	 	ads[i].outerHTML = "";
		}
	}
},3000)
