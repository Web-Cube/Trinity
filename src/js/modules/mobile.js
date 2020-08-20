var mobile = {
	
	open: () => {
		
		$('.js-mobile-open').click(function(){
			let mobile = $(this).data('mobile');
			
			$('.js-mobile-close.is-active').removeClass('is-active');
			$(this).parent().find('.js-mobile-close').addClass('is-active');
			
			$('.mobile__container:visible').hide();
			$('.mobile__container'+mobile).show();
			
			$('body').addClass('js-lock');
			
		});
		
	},
	
	close: () => {
		
		$('.js-mobile-close').click(function(){
			$(this).removeClass('is-active');
			$('.mobile__container:visible').hide();
			$('body').removeClass('js-lock');
		});
		
	},
	
	toggleCategory: () => {
	
		$('.js-submenu-toggle').click(function(){
			
			let parrent = $(this).closest('.mobile-category__item');
			
			if ( parrent.hasClass('is-active') ) {
				
				parrent.removeClass('is-active');
				parrent.find('.mobile-category__sub:visible').slideUp(300);
				
			} else {
				
				$('.mobile-category__item.is-active').removeClass('is-active').find('.mobile-category__sub:visible').slideUp(300);
				
				parrent.addClass('is-active');
				parrent.find('.mobile-category__sub').slideDown(300);
				
			}
			
			return false;
			
		});
		
	},
	
	toggleSidebar: () => {
		
		$('.js-show-sidebar').click(function(){
			let id = $(this).attr('href');
			
			$(id).toggleClass('is-active');
			$(this).toggleClass('is-active');
			$('body').toggleClass('js-lock');
			
			return false;
		});
		
	},

	init: () => {
		
		mobile.open();
		mobile.close();
		mobile.toggleCategory();
		mobile.toggleSidebar();
		
	}
}

export { mobile }