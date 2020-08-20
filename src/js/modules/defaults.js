var defaults = {
	
	scrollTo: () => {
		$(".js-scroll-to").click(function() {
			var attrHref = $(this).attr("href");
			var dataHref = $(this).data("href");
			if ( dataHref ) {
				attrHref = dataHref;
			}
			$("html, body").animate({
				scrollTop: $(attrHref).offset().top + "px"
			}, {
				duration: 1000
			});
			return false;
		});
		
		if ( $(window).innerWidth() > 580 ) {
			$(window).scroll(function(){
				
				if ( $(window).scrollTop() > 35 ) {
					$('.header__wrap').addClass('is-fixed');
				} else {
					$('.header__wrap').removeClass('is-fixed');
				}
				
			});
		}
		
	},
	
	FAQ: () => {
		$('.faq-list__head').click(function() {
			
			var item = $(this).closest('.faq-list__item');
			
			if ( item.hasClass('is-active') ) {
				item.removeClass('is-active');
				item.find('.faq-list__content').slideUp(300);
			} else {
				$('.faq-list__item.is-active').removeClass('is-active');
				$('.faq-list__content:visible').slideUp(300);
				item.addClass('is-active');
				item.find('.faq-list__content').slideDown(300);
			}
			
		});
		
		$('.faq-list__item:first').addClass('is-active').find('.faq-list__content').show();
		
		$(".js-show-faq").click(function(){
			$(this).closest('.faq').toggleClass('is-hidden');
			$(this).toggleClass('is-active');
			return false;
		});
	},
	
	select: () => {
		$('.select__head').click(function(){
			$(this).closest('.select').toggleClass('is-active');
		});
		
		$('.select-bg').click(function(){
			$('.select').removeClass('is-active');
		});
		
		$('.select__close').click(function(){
			$('.select').removeClass('is-active');
		});
		
		$('.select__item').click(function(){
			let value = $(this).data('value');
			let parent = $(this).closest('.select');
			
			parent.find('.select__input').val(value);
			parent.find('.select__label').text(value);
			parent.removeClass('is-active');
			
			parent.find('.select__item.is-active').removeClass('is-active');
			$(this).addClass('is-active');
			
		});
	},
	
	cart: () => {
		
		$('.catalog__btn, .product__btn').click(function(){
			$('.js-cart-added').addClass('is-active');
			setTimeout(function(){
				$('.js-cart-added').removeClass('is-active');
			},3000);
		});
		
		$('.btn-cart').click(function(){
			$('.btn-cart__box').toggleClass('is-active');
		});
		
		$('.js-open-cart').click(function(){
			$('.mobile__nav-link[data-mobile="#cart"]').click();
		});
		
	},

	events: () => {
		
		$('.btn-select__head').click(function(){
			$(this).parent().toggleClass('is-active');
		});
		
		$('.search-form__btn-search').click(function(){
			$(this).closest('.search-form').addClass('is-active');
		});
		
		$('.search-form__close').click(function(){
			$(this).closest('.search-form').removeClass('is-active');
		});
		
	},
	

	init: () => {
		
		defaults.scrollTo();
		defaults.FAQ();
		defaults.select();
		defaults.events();
		defaults.cart();

	}
}

export { defaults }