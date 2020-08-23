var mobile = {
	
	header: () => {
		
		$(window).scroll(function(){
			
			if ( $(window).scrollTop() > $('.header').innerHeight() ) {
				
				$('.header__top_clone').addClass('is-active');
				
			} else {
				$('.header__top_clone').removeClass('is-active');
			}
			
		});
		
	},

	init: () => {
		
		mobile.header();
		
	}
}

export { mobile }