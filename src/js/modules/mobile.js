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
	
	showFilter: (e) => {
		
		let filterName = $(e.currentTarget).data('filter');
		
		$(e.currentTarget).fadeOut(300);
		$(filterName).slideDown(300);
		
		return false;
		
	},
	
	closeFilter: (e) => {
		
		let closeName = $(e.currentTarget).data('close-filter');
		
		$(e.currentTarget).closest('.js-filter').slideUp(300);
		$(closeName).fadeIn(300);
		
		return false;
		
	},

	init: () => {
		
		mobile.header();
		$(document).on('click', '.js-show-filter', mobile.showFilter);
		$(document).on('click', '.js-close-filter', mobile.closeFilter);
		
	}
}

export { mobile }