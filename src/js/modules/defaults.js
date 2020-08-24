var defaults = {

	events: () => {
		
		$('.js-toggle-menu').click(function(){
			
			$(this).toggleClass('is-active');
			$(this).closest('.js-menu-parrent').find('.js-menu').fadeToggle(300);
			$('html, body').toggleClass('is-lock');
			
		});
		
	},
	

	init: () => {
		
		defaults.events();

	}
}

export { defaults }