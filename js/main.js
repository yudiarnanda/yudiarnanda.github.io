(function($) {
"use strict";

/*-------------------------------------------
  jQuery MeanMenu
--------------------------------------------- */
// menu toggle
$(".navbar-toggle").on('click', function () {
    $(".navbar-nav").addClass("mobile_menu");
});
$(".navbar-nav li a").on('click', function () {
    $(".navbar-collapse").removeClass("show");
});

/*-------------------------------------------
Sticky Header
--------------------------------------------- */
$(window).on('scroll', function(){
    if( $(window).scrollTop()>80 ){
        $('#sticky').addClass('stick');
    } else {
        $('#sticky').removeClass('stick');
    }
}); 

/*-------------------------------------------
Slideshow
--------------------------------------------- */
  $("#owl-demo").owlCarousel({
 
	navigation : true,
	navigationText: [
	   "<i class='fa fa-arrow-left' aria-hidden='true'></i>",
	   "<i class='fa fa-arrow-right' aria-hidden='true'></i>"
	],
	slideSpeed : 300,
	paginationSpeed : 400,
	singleItem:true,
	dots: true,
	nav: true
 
      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false
 
  });

/*-------------------------------------------
Sticky Header
--------------------------------------------- */
$(window).on('scroll', function(){
    if( $(window).scrollTop()>80 ){
        $('#sticky').addClass('stick');
    } else {
        $('#sticky').removeClass('stick');
    }
}); 

})(jQuery);