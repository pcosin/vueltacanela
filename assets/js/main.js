$(document).ready(function () {

	$(window).scroll(function () {
		if ($(window).scrollTop() >= 90) {
			$('.header').addClass('fixed-header');
		} else {
			$('.header').removeClass('fixed-header');
		}
	});

	$(".bars i").click(function () {
		$(".header-menu .menu").removeClass('opened')
	})
	$(".close-btn i").click(function () {
		$(".header-menu .menu").addClass('opened')
	})

});

// Preloader
 window.addEventListener("load", () => {
 	document.querySelector(".preloader").classList.add("fade-out");
 	setTimeout(() => {
 		document.querySelector(".preloader").style.display = "none";
 	}, 600)
 })


