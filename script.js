$(document).ready(function(){

///////////////Animation/slide from sides when load///////////////////
	$('h1').animate({left: 0});
	$('.logo').animate({right: 0});
	$('.odd').animate({left: 0});
	$('.even').animate({right: 0});
	/////////////////////////////////////
	
	$('.viewButton').on('click', function(event){
		var photos = $(this).siblings('div');
		event.preventDefault();
		photos.slideToggle('slow');
	});

	$('img').hover(function(){
		var text = $(this).siblings('span');
		text.toggle();
	});

	$('span').hover(function(event){
		$(this).toggle();
	});
});