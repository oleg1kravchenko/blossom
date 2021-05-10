$(document).ready(function() {

//плавный скролл
	$(".scroll_li a").mPageScroll2id({
		offset: 70
	});

//Попап менеджер FancyBox
	$(".fancybox").fancybox({
    helpers:  {
      overlay : {
        locked : false
      }
    }
  });

$('.tabs li.tab_li a').click(function(event) {
		event.preventDefault();
	});
	$('.tab_content:first').show();
	$('.tabs li.tab_li').click(function(event) {
		$('.tabs li.tab_li').removeClass('active');
		$(this).addClass('active');
		$('.tab_content').hide();

		var selectTab = $(this).find('a').attr("href");

		$(selectTab).fadeIn();
	});

	$(document).mouseup(function (e){ 
		var div = $(".menu"); 
		if (!div.is(e.target) 
		    && div.has(e.target).length === 0) { 
			div.slideUp(600);
		$(".list_nav li a, .sandwich").removeClass("active");
		}
	});




	//кнопка sandwich
	$(".btn_nav").click(function() {
		$(".menu").slideUp(600);
		$("#btn_menu_1, #btn_menu_2").removeClass("active");
		$(".sandwich").addClass("active");
		if ($("#menu_1").is(":hidden")) {
			$("#menu_1").slideDown(600);
			$("body").addClass("overflow_hidden");
		} else {
			$(".sandwich").removeClass("active");
			$("#menu_1").slideUp(600);
			$("body").removeClass("overflow_hidden");
		}
	});
	$("#btn_menu_1").click(function(e) {
		e.preventDefault();
		$(this).toggleClass("active");
		$(".menu").slideUp(600);
		$(".sandwich, #btn_menu_2").removeClass("active");
		if ($("#menu_2").is(":hidden")) {
			$("#menu_2").slideDown(600);
			$("body").addClass("overflow_hidden");
		} else {
			$("#menu_2").slideUp(600);
			$("body").removeClass("overflow_hidden");
		}
	});

	$("#btn_menu_2").click(function(e) {
		e.preventDefault();
		$(this).toggleClass("active");
		$(".menu").slideUp(600);
		$(".sandwich, #btn_menu_1").removeClass("active");
		if ($("#menu_3").is(":hidden")) {
			$("#menu_3").slideDown(600);
			$("body").addClass("overflow_hidden");
		} else {
			$("#menu_3").slideUp(600);
			$("body").removeClass("overflow_hidden");
		}
	});

	$(".line_cart").click(function() {
		$(".content_line_cart").slideUp(200);
		$(".line_cart").removeClass("active");
	$(this).siblings(".content_line_cart").slideToggle(200);
		$(this).toggleClass("active");
	});

	$(".min_title_catalog").click(function() {
		$(this).next(".list_catalog_sidebar").slideToggle(200);
	});

	$(document).mouseup(function (e){ 
		var div = $(".sorting_item"); 
		if (!div.is(e.target) 
		    && div.has(e.target).length === 0) { 
			$(".link_sorting").removeClass("active");
		$(".dropdown_block").slideUp(300);
		}
	});

	$(".link_sorting").click(function() {
		$(".link_sorting").removeClass("active");
		$(".dropdown_block").slideUp(300);
		if ($(this).siblings(".dropdown_block").is(":hidden")) {
			$(this).addClass("active");
			$(this).siblings(".dropdown_block").slideDown(300);
		} else {
			$(this).removeClass("active");
			$(this).siblings(".dropdown_block").slideUp(300);
		}
	});

	$('.content_line_cart input[type=radio]').change(function() {
    var val_input = $(this).siblings("span").html();
    $(this).parent().parent().parent().parent().find('.value_cart').html(val_input);
});



	{
 if ($(window).width() < 768) { 
 function heightDetect() {
		$('.menu').css("height", $(window).height() -$(".main_header").height());
	};
	heightDetect();
	$(window).resize(function() {
		heightDetect();
	});
 }
}


$(".phone_input").mask("+7 (999) 999-9999");
	//слайдер

	$('.slider_products').slick({
		dots: false,
		arrows: true,
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		responsive: [
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 3,
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
			}
		}
		]
	});

	$('.slider_brands').slick({
		dots: false,
		arrows: true,
		infinite: true,
		slidesToShow: 6,
		slidesToScroll: 1,
		responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 4,
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 3,
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
			}
		}
		]
	});



	$(".btn_top").click(function () {
		$("body, html").animate({
			scrollTop: 0
		}, 800);
		return false;
	});



});