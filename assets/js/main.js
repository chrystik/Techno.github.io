//barfiller
$(document).ready(function(){
	$('#bar1').barfiller({ duration: 7000 });
	$('#bar2').barfiller({ duration: 7000 });
	$('#bar3').barfiller({ duration: 7000 });
});

//accordion
(function($) {
    $('.accordion > li:eq(0) a').addClass('active').next().slideDown();

    $('.accordion a').click(function(j) {
        var dropDown = $(this).closest('li').find('p');

        $(this).closest('.accordion').find('p').not(dropDown).slideUp();

        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        } else {
            $(this).closest('.accordion').find('a.active').removeClass('active');
            $(this).addClass('active');
        }

        dropDown.stop(false, true).slideToggle();

        j.preventDefault();
    });
})(jQuery);

//window scroll
$(window).on('scroll', function () {
    var scrolled = $(window).scrollTop();
    if (scrolled > 300) $('.go-top').addClass('active');
    if (scrolled < 300) $('.go-top').removeClass('active');
});

$('.go-top').on('click', function () {
    $("html, body").animate({
        scrollTop: "0"
    }, 1200);
});

//main js

jQuery(document).ready(function (o) {
    0 < o(".offset-side-bar").length &&
        o(".offset-side-bar").on("click", function (e) {
            e.preventDefault(), e.stopPropagation(), o(".cart-group").addClass("isActive");
        }),
        0 < o(".close-side-widget").length &&
            o(".close-side-widget").on("click", function (e) {
                e.preventDefault(), o(".cart-group").removeClass("isActive");
            }),
        0 < o(".navSidebar-button").length &&
            o(".navSidebar-button").on("click", function (e) {
                e.preventDefault(), e.stopPropagation(), o(".info-group").addClass("isActive");
            }),
        0 < o(".close-side-widget").length &&
            o(".close-side-widget").on("click", function (e) {
                e.preventDefault(), o(".info-group").removeClass("isActive");
            }),
        o("body").on("click", function (e) {
            o(".info-group").removeClass("isActive"), o(".cart-group").removeClass("isActive");
        }),
        o(".xs-sidebar-widget").on("click", function (e) {
            e.stopPropagation();
        }),
        0 < o(".xs-modal-popup").length && o(".xs-modal-popup").magnificPopup({
                type: "inline",
                fixedContentPos: !2,
                fixedBgPos: !0,
                overflowY: "auto",
                closeBtnInside: !2,
                callbacks: {
                    beforeOpen: function () {
                        this.st.mainClass = "my-mfp-slide-bottom xs-promo-popup";
                    },
                },
    });
});