var defaults = {

	events: () => {
		
		$('.js-toggle-menu').click(function(){
			
			$(this).toggleClass('is-active');
			$(this).closest('.js-menu-parrent').find('.js-menu').fadeToggle(300);
			$('html, body').toggleClass('is-lock');
			
		});
		
		$('.js-more').click(function(){
			$('.js-more-content p').not(".js-more-content p:first-child").slideToggle(300);
			return false;
		});
		
		/*$(document).on('click', '.js-info', function(){
			
			var position = $(this).attr('href');

			$('.js-info.is-active').removeClass('is-active');
			$(this).addClass('is-active');

			$('.js-tab-content:visible').hide();
			$('.js-tab-content'+position).fadeIn(500);

			return false;
			
		});*/
		
	},
	
	tabs: () => {
		
		$(document).on('click', '.js-tab', function(){
			
			var tabId = $(this).attr('href');

			$('.js-tab.is-active').removeClass('is-active');
			$(this).addClass('is-active');

			$('.js-tab-item:visible').hide();
			$('.js-tab-item'+tabId).fadeIn(500);

			return false;
			
		});
		
	},
	

	init: () => {
		
		defaults.events();
		defaults.tabs();

	}
}

export { defaults }