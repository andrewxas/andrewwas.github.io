$(document).ready(function() {

	$("#portfolio_grid").mixItUp();

	$(".s_portfolio li").click(function() {
		$(".s_portfolio li").removeClass("active");
		$(this).addClass("active");
	});

	$(".popup").magnificPopup({
	    type: "image",
	    fixedContentPos: false,    // keep content position fixed for smooth animation
	    closeOnContentClick: true, // close when clicking on the image
	    preloader: false,          // disable default preloader for better fade effect
	    removalDelay: 800,         // delay before popup is removed
	    mainClass: "mfp-fade",     // CSS class to trigger fade animation
	    image: {
	        verticalFit: false
	    },
	    gallery: {
	        enabled: true,
	        arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>'
	    }
	});
	// Video popup with .video-popup class toggle
	$(".popup_video").magnificPopup({
		type: "iframe",
		mainClass: "mfp-fade",
		removalDelay: 300,
		preloader: false,
		fixedContentPos: false,
		callbacks: {
			open: function() {
				$(".mfp-content").addClass("video-popup");
			},
			close: function() {
				$(".mfp-content").removeClass("video-popup");
			}
		}
	});
	$(".popup_content").magnificPopup({
		type: "inline",
		fixedContentPos: false,
		removalDelay: 300,
		mainClass: "mfp-fade",
		midClick: true
	});

	$(".section_header").animated("fadeInUp", "fadeOutDown");

	$(".animation_1").animated("flipInY", "fadeOutDown");
	$(".animation_2").animated("fadeInLeft", "fadeOutDown");
	$(".animation_3").animated("fadeInRight", "fadeOutDown");
	
	

	$(".left .resume_item").animated("fadeInLeft", "fadeOutDown");
	$(".right .resume_item").animated("fadeInRight", "fadeOutDown");

	function heightDetect() {
		$(".main_head").css("height", $(window).height());
	};
	heightDetect();
	$(window).resize(function() {
		heightDetect();
	});

	$(".toggle_mnu").click(function() {
		$(".sandwich").toggleClass("active");
	});

	$(".top_mnu ul a").click(function() {
		$(".top_mnu").fadeOut(600);
		$(".sandwich").toggleClass("active");
		$(".top_text").css("opacity", "1");
	}).append("<span>");

	$(".toggle_mnu").click(function() {
		if ($(".top_mnu").is(":visible")) {
			$(".top_text").css("opacity", "1");
			$(".top_mnu").fadeOut(600);
			$(".top_mnu li a").removeClass("fadeInUp animated");
		} else {
			$(".top_text").css("opacity", ".1");
			$(".top_mnu").fadeIn(600);
			$(".top_mnu li a").addClass("fadeInUp animated");
		};
	});

	$(".portfolio_item").each(function(i) {
		$(this).find("a").attr("href", "#work_" + i);
		$(this).find(".podrt_descr").attr("id", "work_" + i);
	});

	$("input, select, textarea").jqBootstrapValidation();

	$(".top_mnu ul a").mPageScroll2id();

});
$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

	$(".top_text h1").animated("fadeInDown", "fadeOutUp");
	$(".top_text p").animated("fadeInUp", "fadeOutDown");
	$(".logo").animated("flipInX", "flipOutX");

}); 