var map = {
	
	load: () => {
		var map_load = false;
		
		function map_create() {
			map_load = true
			$.getScript( 'https://api-maps.yandex.ru/2.1/?lang=ru_RU', function( data, textStatus, jqxhr ) {
				ymaps.ready(function () {
					$('.js-map').each(function() {

						var position1 = $(this).data('len');
						var position2 = $(this).data('lng');

						let len = Number(position1), lng = Number(position2), thisID = $(this).attr('id');
						var myMap = new ymaps.Map(thisID, {
							// 
							center: [len, lng],
							zoom: 16,
							controls: []
						}, {
							searchControlProvider: 'yandex#search'
						}),

						myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
						}, {
							iconLayout: 'default#image',
							iconImageHref: '/app/img/mark.png',
							iconImageSize: [80, 108],
							iconImageOffset: [-50, -110]
						});

						myMap.geoObjects.add(myPlacemark);
						myMap.behaviors.disable('scrollZoom');
						myMap.controls.remove('trafficControl').remove('searchControl').remove('typeSelector').remove('geolocationControl').remove('fullsxreenControl').remove('rullerControl');

						myMap.controls.add('zoomControl', {
							float: 'none',
							position: {
								right: 10,
								top: 50
							}
						});

						myMap.container.fitToViewport();				
					})			

				});
			});  
		}
		
		map_create();
		
		$(window).on('load', function(){
	
			setTimeout(function(){
				map_create();
			},1000);
		});	
	},
	
	tabs: () => {
		
		$(document).on('click', '.js-address', function(){
			
			var position = $(this).attr('href');

			$('.js-address.is-active').removeClass('is-active');
			$(this).addClass('is-active');

			$('.js-tab:visible').hide();
			$('.js-tab'+position).fadeIn(500);

			return false;
			
		});
		
	},

	init: () => {
		
		map.load();
		map.tabs();
		
	}
}

export { map }