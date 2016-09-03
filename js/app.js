

	var modal = document.querySelectorAll(".modal")[0];
		thumbs = document.querySelectorAll(".img-small");
		close = document.querySelectorAll(".modal-close")[0];
		overlay = document.querySelectorAll(".modal-overlay")[0];
		modalImg = document.querySelectorAll(".modal-image")[0];
		next = document.querySelectorAll(".modal.next")[0];
		link = document.querySelectorAll(".nav-link")[0];
	
	
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


	function showOverlay() {
		overlay.style.visibility = "visible";
		overlay.style.opacity = .9;
	}

	close.addEventListener("click", function(event) {
		event.preventDefault();
		hideModal();
	});

	for (var i=0; i<thumbs.length; i++) {
		thumbs[i].addEventListener("click", function(){
		showModal();
		showOverlay();
		modalImg.src = this.src.split(".jpg").join("Lg.jpg");
		});
	}

	



	




