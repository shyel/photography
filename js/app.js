window.addEventListener('load', function(){ 
      overlay.addEventListener("touchstart", function() {
		hideModal();
	});  

      close.addEventListener("click", function(event) {
		event.preventDefault();
		hideModal();
	});

	overlay.addEventListener("click", function() {
		hideModal();
	});

	modalImg.addEventListener("mouseover", function (){
		showControls();
	});

	modalImg.addEventListener("mouseout", function (){
		hideControls();
	});

	modalImg.addEventListener("touchstart", function (){
		hideModal();
	});

	modalImg.addEventListener("touchmove", function (){
		hideControls();
	});

	controls.addEventListener("mouseover", function (){
		showControls();
	});

	controls.addEventListener("mouseout", function (){
		hideControls();
	});


}, false)



console.log(window.location);
	var modal = document.querySelectorAll(".modal")[0];
		thumbs = document.querySelectorAll(".img-small");
		close = document.querySelectorAll(".modal-close")[0];
		overlay = document.querySelectorAll(".modal-overlay")[0];
		modalImg = document.querySelectorAll(".modal-image")[0];
		next = document.querySelectorAll(".modal-next")[0];
		previous = document.querySelectorAll(".modal-previous")[0];
		link = document.querySelectorAll(".nav-link")[0];
		controls= document.querySelectorAll(".controls")[0];
		var list=[];
 			
	function showModal() {
		modal.style.visibility = "visible";
		modal.style.opacity = 1;
		modal.style.transform = "translate(-50%, 0)"; 
		modal.style.position = "fixed";
	}

	function hideModal() {
		modal.style.visibility = "hidden";
		modal.style.opacity = 0;
		overlay.style.visibility = "hidden";
		overlay.style.opacity = 0;
		modal.style.transform = "translate(-50%, -5%)";
	}

	function showControls() {
		controls.style.visibility ="visible";
		controls.style.opacity = 1;
	}

	function hideControls() {
		controls.style.visibility ="hidden";
		controls.style.opacity = 0;

	}

	function showOverlay() {
		overlay.style.visibility = "visible";
		overlay.style.opacity = .9;
	}

	for (var i=0; i<thumbs.length; i++) {
		list.push(thumbs[i].src);

		thumbs[i].addEventListener("click", function(){
			showModal();
			showOverlay();
			modalImg.src = this.src.split(".jpg").join("Lg.jpg");
			currentIndex = list.indexOf(this.src);
 		});	
    }

	function leftArrowPressed() {
	   console.log(currentIndex);
	   		if (currentIndex===0){
			     currentIndex=list.length-1;
			} else {
			    currentIndex--;   
			}
		   modalImg.src=list[currentIndex].split(".jpg").join("Lg.jpg"); 
		    
	}

	function rightArrowPressed() {
		if (currentIndex===list.length-1){
 		     currentIndex=0;
		} else {
		    currentIndex++;   
		}

		modalImg.src=list[currentIndex].split(".jpg").join("Lg.jpg");   
	}

	
    next.addEventListener("click", function(){
		rightArrowPressed();
	});

	previous.addEventListener("click", function(){
		leftArrowPressed();
	});


	document.onkeydown = function(e) {
	    switch (e.keyCode) {
	        case 37:
	            leftArrowPressed();
	            break;
	        case 39:
	            rightArrowPressed();
	            break;
	    	case 27:
	    		hideModal();
	    		 break;
	    	}
	};

	





	
	



