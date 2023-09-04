// Плавный скроллинг к якорю
$(document).ready(function () {
	$("a.scroll").click(function () {
		elementClick = $(this).attr("href")
		destination = $(elementClick).offset().top - 60;
		$("html:not(:animated),body:not(:animated)").animate({ scrollTop: destination }, 600);
		return false;
	});
});
// релакс
$(document).ready(function () {
	var rellax = new Rellax('.rellax', {
		breakpoints: [576, 768, 1201]
	});
});
// Активация галереи
$(document).ready(function () {
	Fancybox.bind("[data-fancybox]");
});
// collapse
$(document).ready(function () {
	$('.btn-collapse').click(function () {
		let id = $(this).attr('data-collapse');
		$('.btn-collapse[data-collapse=' + id + ']').toggleClass('active');
		$('.box-collapse[data-collapse=' + id + ']')
			.toggleClass('open')
			.slideToggle(100);
		return false;
	});
});
$(document).ready(function () {
	if ($('body').width() < 992) {
		$('.nav__spisok a').click(function () {
			$('.btn-collapse[data-collapse="nav"]').removeClass('active');
			$('.box-collapse[data-collapse="nav"]')
				.removeClass('open')
				.slideUp(100);
			return false;
		});
	}
});
// tab
$(document).ready(function () {
	$('.btn-tab').click(function () {
		let id = $(this).attr('data-tab');

		$('.btn-tab.active').removeClass('active');
		$(this).addClass('active');

		$('.box-tab.active').removeClass('active');
		$('.box-tab[data-tab="' + id + '"]').addClass('active');
		return false;
	});
});
// Карусель
$(document).ready(function () {
	$('.owl-carousel').owlCarousel({
		loop: true,
		margin: 20,
		dots: false,
		autoplay: true,
		autoplayTimeout: 3000,
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 3
			},
			1000: {
				items: 5
			}
		}
	})
});
// Скроллинг вверх в футоре
$(document).ready(function () {
	$('.slider-top').click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 500);
		return false;
	});
});