(function($) {
  "use strict";
  
 // menu 
  $('.siteBar-btn').click( function (){ 
    $('.mobile-menu').toggleClass('siteBar');   
  }); 

  $(window).scroll( function(){
    $('.slide').each( function(i){

        var top_of_elem = $(this).offset().top;
        var top_of_window = $(window).scrollTop();

        if (top_of_elem < top_of_window + 900) {
          $(this).animate({'opacity':'1'},2000);
        }

    });
});

  var $grid = $('.grid').masonry({
    // options...
  });

 
})(jQuery);
