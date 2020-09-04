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
	
	toggleFilter: () => {
		
		$('.js-show-filter').click(function(){
			$(this).fadeOut(300);
			$('.js-filter').slideDown(300);
		});
		
		$('.js-close-filter').click(function(){
			$('.js-filter').slideUp(300);
			$('.js-show-filter').fadeIn(300);
		});
		
	},

	init: () => {
		
		mobile.header();
		mobile.toggleFilter();
		
	}
}

export { mobile }