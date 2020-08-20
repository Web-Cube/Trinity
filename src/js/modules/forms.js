import Inputmask from "inputmask";
import validate from "jquery-validation";
import { config } from "../config";

var forms = {
	mask: () => {
		var selector = document.querySelectorAll("input[name='phone']");

		var im = new Inputmask({
			mask: "+7 (999) 999-99-99",
			clearMaskOnLostFocus: true,
			clearIncomplete: true,
		});
		
		var creditCard = new Inputmask({
			mask: "9999-9999-9999-9999"
		});
		
		var expiration = new Inputmask({
			mask: "99/99"
		});
		
		var cvv = new Inputmask({
			mask: "999"
		});

		//im.mask(selector);
		
		creditCard.mask('.js-credit-card');
		expiration.mask('.js-expiration');
		cvv.mask('.js-cvv');
	},

	validate: () => {
		$("form").each((i, el) => {
			var $form = $(el);

			$form.validate({
				errorPlacement: function (error, element) {
					//just nothing, empty
				},
				highlight: (element, errorClass, validClass) => {
					$(element)
						.parent()
						.addClass(errorClass)
						.removeClass(validClass);
				},
				unhighlight: (element, errorClass, validClass) => {
					$(element)
						.parent()
						.removeClass(errorClass)
						.addClass(validClass);
				},
				submitHandler: (form) => {
					var data = $(form).serialize();
					var thank = $(form).data('thank');
					
					if ( thank ) {
						sucsess(thank);
					}
					
					if ( $(form).hasClass('order__form') ) {
			
						$('.order__section-inside:visible').closest('.order__section').addClass('is-complete is-sucsess').next().removeClass('is-closed');
						
					}
					
					if ( $(form).hasClass('order__returing') ) {
						
						$('.order__returing-step:visible').not('.order__returing-step:last-child').hide().next().fadeIn(500);
						
					}
					
					$.ajax({
						type: "POST",
						url: $(form).attr("action"),
						data: data,
						success: function (data) {
							$(form)[0].reset();
						},
					});
				},
				rules: {
					email: {
						required: true,
						minlength: 5,
					},
				},
			});
		});
		
		function sucsess(name) {
			$.magnificPopup.open({
				tClose: 'Закрыть',
				removalDelay: 600,
				fixedContentPos: true,
				fixedBgPos: true,
				overflowY: 'hidden',			
				closeMarkup: '<div class="modals__close close js-close-modal"><svg class="icon icon-close" viewBox="0 0 17 17"><use xlink:href="/app/icons/sprite.svg#close"></use></svg></div>',
				mainClass: 'css-modal-animate',				
				items: {
					src: name,
					type: 'inline'
				},
				callbacks: {
					beforeOpen: () => {
					},

					beforeClose: () => {
					}
				}
			}, 0);
		}
	},

	events: () => {
		$(".input__field")
			.on("focus", (e) => {
				let $input = $(e.target);
				$input.parent().addClass("is-focus");
			})
			.on("blur change", (e) => {
				let $input = $(e.target);

				if ($input.val() == "") $input.parent().removeClass("is-focus");
			});
		
		$('.order__head').click(function(){
			let parent = $(this).closest('.order__section');
			
			if ( parent.hasClass('is-complete') ) {
				parent.toggleClass('is-sucsess');
			}
			
		});
		
		$('.js-pets-add').click(function(){
			
			let name = $('.js-pets-name').val();
			
			$('.js-pets-container').prepend(`<div class="order__column order__column_small">
                                                <div class="order__pet">
                                                    <div class="order__pet-icon">
                                                        <svg class="icon icon-paw" viewBox="0 0 23 23">
                                                            <use xlink:href="/app/icons/sprite.svg#paw"></use>
                                                        </svg>
                                                    </div>
                                                    <div class="order__pet-text p">${name}</div>
                                                    <div class="order__pet-delete">
                                                        <svg class="icon icon-close" viewBox="0 0 17 17">
                                                            <use xlink:href="/app/icons/sprite.svg#close"></use>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>`)
			
		});
		
		$(document).on("click", ".order__pet-delete", function() {
			$(this).closest('.order__column').remove();
		});
		
		$('.js-customer').change(function(){
			
			if ( $(this).val() == 'old' ) {
				$('.order__section').hide();
				$('.order__returing').fadeIn(500);
			} else {
				$('.order__returing').hide();
				$('.order__section').fadeIn(500);
			}
			
		});
		
		$('.js-show-adress').change(function(){
			
			$('.order__section_adress').fadeToggle(500);
			
		});
		
		$('.js-dublicate-adress').change(function(){
			
			$('.js-billing-adress').fadeToggle(300);
			
		});
		
	},

	init: () => {
		forms.mask();
		forms.validate();
		forms.events();
	},
};

export { forms };
