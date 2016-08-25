$(document).ready(function(){

	var overlay = $('.js-modal-overlay');
	$('.js-show-modal1').on("click", function(event){
		$('.js-modal1').addClass('is-visible')
		overlay.addClass('is-visible');
  });

	$('.js-show-modal2').on("click", function(event){
		event.preventDefault();
		$('.js-modal2').addClass('is-visible')
		.animate($({'top': '1000px'}));

		overlay.addClass('is-visible');
  });
	$('.js-show-modal3').on("click", function(event){
		event.preventDefault();
		$('.js-modal3').addClass('is-visible')
		overlay.addClass('is-visible');
  });

	$('.js-show-modal4').on("click", function(event){
		event.preventDefault();
		$('.js-modal4').addClass('is-visible')
		overlay.addClass('is-visible');
  });

	$('.js-show-modal5').on("click", function(event){
		event.preventDefault();
		$('.js-modal5').addClass('is-visible')
		overlay.addClass('is-visible');
  });
	$('.js-show-modal6').on("click", function(event){
		event.preventDefault();
		$('.js-modal6').addClass('is-visible')
		overlay.addClass('is-visible');
  });

	$('.js-show-modal7').on("click", function(event){
		event.preventDefault();
		$('.js-modal7').addClass('is-visible')
		overlay.addClass('is-visible');
  });


	$('.js-show-modal8').on("click", function(event){
		event.preventDefault();
		$('.js-modal8').addClass('is-visible')
		overlay.addClass('is-visible');
  });

	$('.js-show-modal9').on("click", function(event){
		event.preventDefault();
		$('.js-modal9').addClass('is-visible')
		overlay.addClass('is-visible');
  });




  $('.js-modal-overlay').on('click', function() {
    $('.js-modal1').removeClass('is-visible')
    $('.js-modal2').removeClass('is-visible')
    $('.js-modal3').removeClass('is-visible')
    $('.js-modal4').removeClass('is-visible')
    $('.js-modal5').removeClass('is-visible')
    $('.js-modal6').removeClass('is-visible')
    $('.js-modal7').removeClass('is-visible')
    $('.js-modal8').removeClass('is-visible')
    $('.js-modal9').removeClass('is-visible')
    overlay.removeClass('is-visible');
  });


  

});