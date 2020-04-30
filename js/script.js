$(document).ready(function () {
  $('.polar__carusel').slick({

    speed: 1200,

    prevArrow: '<button type="button" class="slick-prev"><img src="logo/left.svg" alt="0"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="logo/right.svg" alt="10"></button>',

    responsive: [{
      breakpoint: 891,
      settings: {
        slidesToShow: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000

      }
    }]

  });
  $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function () {
    $(this)
      .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
      .closest('div.conteiner').find('div.catalog__content').removeClass('catalog__content_active')
      .eq($(this).index()).addClass('catalog__content_active');
  });

  $('.catalog-item__link').each(function (i) {
    $(this).on('click', function (e) {
      e.preventDefault();
      $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active ');
      $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active ');

    });
  });

  $('.catalog-item__back').each(function (i) {
    $(this).on('click', function (e) {
      e.preventDefault();
      $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active ');
      $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active ');

    });
  });

  //Modal
  $('[data-modal=consultion]').on('click', function () {
    $('.overlay, #consultion').fadeIn('slow');
  });

  $('.modal__close').on('click', function () {
    $('.overlay, #consultion, #order').fadeOut();
  });
  $('.button_mini').each(function (i) {
    $(this).on('click', function () {
      $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
      $('.overlay, #order').fadeIn('slow');
    });

  });/*
  $( '#form-cosultion' ).validate({
    rules: {
    phone: "required",
    name: "required",
    email: {
      required: true,
      email: true
    }
  },
  messages: {
    phone: "Пожалуйста введите свой телефон",
    name: "Пожалуйста введите свое имя",
    email: {
      required: "Пожалуйста введите свою почту",
      email: "Введите правильно адрес почты "
    }
  }
  });

  $(' #consultion form').validate({
      rules: {
      phone: "required",
      name: "required",
      email: {
        required: true,
        email: true
      }
    },
    messages: {
      phone: "Пожалуйста введите свой телефон",
      name: "Пожалуйста введите свое имя",
      email: {
        required: "Пожалуйста введите свою почту",
        email: "Введите правильно адрес почты "
      }
    }
    });

  $('#order form').validate({
    rules: {
    phone: "required",
    name: "required",
    email: {
      required: true,
      email: true
    }
  },
  messages: {
    phone: "Пожалуйста введите свой телефон",
    name: "Пожалуйста введите свое имя",
    email: {
      required: "Пожалуйста введите свою почту",
      email: "Введите правильно адрес почты "
    }
  }
  });*/
/*  оптимизированная функция валлидации формы*/
  function valedateForms (form){
    $(form).validate({
      rules: {
      phone: "required",
      name: "required",
      email: {
        required: true,
        email: true
      }
    },
    messages: {
      phone: "Пожалуйста введите свой телефон",
      name: "Пожалуйста введите свое имя",
      email: {
        required: "Пожалуйста введите свою почту",
        email: "Введите правильно адрес почты "
      }
    }
    });
  }

  valedateForms('#form-cosultion');
  valedateForms('#consultion form');
  valedateForms('#order form');

  $("input[name=phone]").mask("+7 (999) 999-99-99");
  /* нужно убрать type из тега input  в html*/

  $('form').submit(function(e) {
		e.preventDefault();
		$.ajax({
			type: "POST",
			url: "mailer/smart.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			$('#consultion, #order').fadeOut();
			$('.overlay, #thanks').fadeIn('slow');
			
			$('form').trigger('reset');
		});
		return false;
  });
  
  /*  скролл*/
  $(window).scroll(function() {
    if ($(this).scrollTop() > 1600){
      $('.pageup').fadeIn();
    } else {
        $('.pageup').fadeOut();  // убрать начальное положение display: none
    }
    /*скрипт для плавного скрола из библиотеке*/
    
  });

  $("a[href^='#']").click(function(){
    var _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
    return false;
  });
  
});
 