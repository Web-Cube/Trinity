var defaults = {
	
	tabs: (e) => {
			
		var tabId = $(e.currentTarget).attr('href');

		$('.js-tab.is-active').removeClass('is-active');
		$(e.currentTarget).addClass('is-active');

		$('.js-tab-item:visible').hide();
		$('.js-tab-item'+tabId).fadeIn(500);

		return false;
		
	},
	

	init: () => {
		
		$('.js-toggle-menu').click(function(){
			
			$(this).toggleClass('is-active');
			$(this).closest('.js-menu-parrent').find('.js-menu').fadeToggle(300);
			$('html, body').toggleClass('is-lock');
			
		});
		
		$('.js-more').click(function(){
			$('.js-more-content p').not(".js-more-content p:first-child").slideToggle(300);
			return false;
		});
		
		$(document).on('click', '.js-tab', defaults.tabs);

	}
}

export { defaults }