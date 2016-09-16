window.addEventListener('load', function(){ 
      overlay.addEventListener("touchstart", function() {
		hideModal();
	});  
}, false)

	var modal = document.querySelectorAll(".modal")[0];
		thumbs = document.querySelectorAll(".img-small");
		close = document.querySelectorAll(".modal-close")[0];
		overlay = document.querySelectorAll(".modal-overlay")[0];
		modalImg = document.querySelectorAll(".modal-image")[0];
		nex = document.querySelectorAll(".modal-next")[0];
		previous = document.querySelectorAll(".modal-previous")[0];
		link = document.querySelectorAll(".nav-link")[0];
		controls= document.querySelectorAll(".controls")[0];
	
	
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

	close.addEventListener("click", function(event) {
		event.preventDefault();
		hideModal();
	});

	overlay.addEventListener("click", function() {
		hideModal();
	});



	for (var i=0; i<thumbs.length; i++) {
		thumbs[i].addEventListener("click", function(){
		showModal();
		showOverlay();
		modalImg.src=this.src.split(".jpg").join("Lg.jpg");
		});
	}


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




