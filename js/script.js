$(document).ready(function(){

	$('.slider').slick({
		dots: false,
		arrows: true
	});

	$('.product__list-index').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		prevArrow: '<button type="button" class="slick-prev"></button>',
		nextArrow: '<button type="button" class="slick-next"></button>',
		responsive: [
		{
			breakpoint: 1279,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 967,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 745,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
		]
	});

	$('.product__list-inner').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		prevArrow: '<button type="button" class="slick-prev"></button>',
		nextArrow: '<button type="button" class="slick-next"></button>',
		responsive: [
		{
			breakpoint: 1279,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 967,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			}
		}
		]
	});
	
	$('.product-viewed').slick({
		slidesToShow: 6,
		slidesToScroll: 1,
		prevArrow: '<button type="button" class="slick-prev"></button>',
		nextArrow: '<button type="button" class="slick-next"></button>',
		responsive: [
		{
			breakpoint: 1279,
			settings: {
				slidesToShow: 6,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 991,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 742,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1
			}
		},
		,
		{
			breakpoint: 321,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			}
		}
		]
	});

	// Fancybox

	$('.fancybox').fancybox({
		helpers: {
			overlay: {
				locked: false
			}
		}
	});  

	if ($('.quick-view.lnk-fancybox').length){
		$('.quick-view.lnk-fancybox').fancybox({
			wrapCSS: "quick-view_fancy-popup",
			helpers: {
				overlay: {
					locked: false
				}
			},
			"padding" : 30,
			"autoSize": true,
			"frameHeight" : 787, 
			"overlayOpacity" : 0.5, 
			"centerOnScroll" : true,
			"overlayColor" : '#fff',
			'width'   : 1005,
			afterShow: function () {
				$('.quick-view__preview').slick('reinit');
			}
		});
	}; 

	if ($('.write-review.lnk-fancybox').length){
		$('.write-review.lnk-fancybox').fancybox({
			wrapCSS: "write-review_fancy-popup",
			helpers: {
				overlay: {
					locked: false
				}
			},
			"padding" : 35,
			"autoSize": true,
			"frameHeight" : 787, 
			"overlayOpacity" : 0.5, 
			"centerOnScroll" : true,
			"overlayColor" : '#fff',
			'width'   : 548
		});
	}; 

	if ($('.sertification__lnk.lnk-fancybox').length){
		$('.sertification__lnk.lnk-fancybox').fancybox({
			wrapCSS: "sertification__fancy-popup",
			helpers: {
				overlay: {
					locked: false
				}
			},
			"padding" : 30,
			"autoSize": true,
			"frameHeight" : 787, 
			"overlayOpacity" : 0.5, 
			"centerOnScroll" : true
		});
	}; 


	/* детальный просмотр */


	$('.quick-view__whole').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		infinite: true,
		asNavFor: '.quick-view__preview'
	});

	$('.quick-view__preview').slick({
		slidesToShow: 6,
		slidesToScroll: 1,
		asNavFor: '.quick-view__whole',
		dots: false,
		arrows: true,
		centerMode: false,
		infinite: true,
		focusOnSelect: true,
		responsive: [
		{
			breakpoint: 470,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 1
			}
		}
		]
	});  


	$('.quick-view__preview > .slick-prev.slick-arrow').html("<i class='fa fa-angle-left'></i>"); 
	$('.quick-view__preview > .slick-next.slick-arrow').html("<i class='fa fa-angle-right'></i>"); 

	/* timer */

  $('#coutner').timeTo({
  	timeTo: new Date('Fri May 30 2016 09:00:00 GMT+0300 (RTZ 2 (лето))'),
  	displayDays: 2,
  	lang: 'ru',
    theme: "white",
    displayCaptions: true,
    fontSize: 32.45,
    captionSize: 14
  });

  

	/* more text */

	$('.read-more-content').addClass('hide')
	$('.read-more-show, .read-more-hide').removeClass('hide')

	$('.read-more-show').on('click', function(e) {
		$(this).next('.read-more-content').removeClass('hide');
		$(this).addClass('hide');
		e.preventDefault();
	});

	$('.read-more-hide').on('click', function(e) {
		var p = $(this).parent('.read-more-content');
		p.addClass('hide');
		p.prev('.read-more-show').removeClass('hide'); 
		e.preventDefault();
	});

	$('.city__name').click(function(){
		$(this).closest('.city__item').toggleClass('opened');
		$(this).siblings('.address__wrap').slideToggle(300);
		return false;
	});


	/*Fade label*/
	$('.review__wrap-row input').val('');
	$('.review__wrap-row textarea').val('');
	$('.review__wrap-row label').click(function(){
		$(this).fadeOut(200);
		$(this).siblings('input,textarea').focus();
	});
	$('.review__wrap-row input').blur( function () {
		if(!$(this).val()){
			$(this).siblings('label').fadeIn(200);
		}
	});
	$('.review__wrap-row textarea').blur( function () {
		if(!$(this).val()){
			$(this).siblings('label').fadeIn(200);
		}
	});
	$('.review__wrap-row input').focus( function () {
		$(this).siblings('label').fadeOut(200);
	});
	$('.review__wrap-row textarea').focus( function () {
		$(this).siblings('label').fadeOut(200);
	});


	/* select */
	$('.slct').click(function(){
		/* Заносим выпадающий список в переменную */
		var dropBlock = $(this).parent().find('.drop');

		/* Делаем проверку: Если выпадающий блок скрыт то делаем его видимым*/
		if( dropBlock.is(':hidden') ) {
			$(this).addClass('hide');
			dropBlock.slideDown();

			/* Выделяем ссылку открывающую select */
			$(this).addClass('active');

			/* Работаем с событием клика по элементам выпадающего списка */
			$('.drop').find('li').click(function(){

					/* Заносим в переменную HTML код элемента
					списка по которому кликнули */
					var selectResult = $(this).html();

					/* Находим наш скрытый инпут и передаем в него
					значение из переменной selectResult */
					$(this).parent().parent().find('input').val(selectResult);

					/* Передаем значение переменной selectResult в ссылку которая
					открывает наш выпадающий список и удаляем активность */
					$(this).parent().parent().find('.slct').removeClass('active');

					/* Скрываем выпадающий блок */
					dropBlock.slideUp();
				});

			/* Продолжаем проверку: Если выпадающий блок не скрыт то скрываем его */
		} else {
			$(this).removeClass('active');
			dropBlock.slideUp();
		}

		/* Предотвращаем обычное поведение ссылки при клике */
		return false;
	});

	/* верхнее меню адаптив */

		$('.nav-top__responsive').click(function() {
        $(this).toggleClass('opened');
        $('.nav-top__list').slideToggle("fast");
    });  

  $('.nav-btn__responsive').click(function (){
  	$('.nav-responsive').addClass('opened'); 
  	$('body').addClass('overlay');    	
  });
  $('.nav-responsive__close').click(function (){
  	$('.nav-responsive').removeClass('opened'); 
  	$('body').removeClass('overlay');     	
  });

  /* верхнее меню адаптив */

  $(".header-main__responsive").click(function() {
  	$(this).toggleClass('opened-menu');
  	$(".nav-header__list").slideToggle("fast");
  });

  /* левое меню */

  $(".nav__left-lnk").click(function(){
    if ($(this).hasClass('noslide'))
      return true;
		$(this).parent().toggleClass("droping");
     	$(this).siblings(".nav-left__sublist").slideToggle();
      return false;
  });


  function window_resize(){
  	var page_w = $(window).width();

  	if (page_w <= 1180) {
  		$('.slider-product_card .quick-view').html('');
  	} 
  	if (page_w <= 480) {
  		$('.paginator__lnk_prev').html('');
  		$('.paginator__lnk_next').html('');
  	}
  	if (page_w >= 745) {
  		$(".nav-header__item").hover(function(){
		  	if ($(this).hasClass('noslide'))
		  		return true;
		  	$(this).toggleClass("droping-hover");
		  	return false;
		  });
  	}
  	if (page_w < 745) {
  		$(".nav-header__lnk").click(function(){
		  	if ($(this).hasClass('noslide'))
		  		return true;
		  	$(this).parent().toggleClass("droping");
		  	$(this).siblings(".nav-header__sublist").slideToggle();
		  	return false;
		  });
  	}


  }

  window_resize();



});
