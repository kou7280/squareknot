$(function() {

   // SCROLL SPY

   /*
   let   navLink = $('.navigation__nav-link'),
         sections = [];
   for (let i = 0; i < navLink.length; i++) {
      targetContent = navLink.eq(i).attr("href");
      if (targetContent.charAt(0) == "#") {
         let targetContentTop = $(targetContent).offset().top;
         let targetContentBottom = targetContentTop + $(targetContent).outerHeight(true);
         sections[i] = [targetContentTop, targetContentBottom];
      }
   }

   function currentCheck() {
      let windowScrollTop = $(window).scrollTop();
      for (let i = 0; i < sections.length; i++) {
         if(sections[i][0] < windowScrollTop && sections[i][1] > windowScrollTop) {
            navLink.removeClass('active');
            navLink.eq(i).addClass('active');
         }
      }
   }

   $(window).on('load, scroll', function() {
      currentCheck();
   });
   */

   // SMOOTH SCROLL

      $('a[href^="#"]').on('click', function() {
      let   speed = 300,
            href = $(this).attr("href"),
            target = $(href == "#" || href == "" ? "html" : href),
            position = target.offset().top + 15;
      $("html, body").animate({scrollTop:position}, speed, "swing");
      return false;
   });

   // SCROLL DOWN NAVIGATION
   let $main = $('#main'),
   $headNav = $(".navigation"),
   $distance = $main.offset().top,
   $navHeight = $headNav.outerHeight();

	$(window).on('load scroll', function () {

      if (window.matchMedia( "(min-width:992px)" ).matches) {
         if($(this).scrollTop() > $distance && $headNav.hasClass('navigation--fixed') == false) {
            
            $headNav.css({"top": -$navHeight});
   
            $headNav.addClass('navigation--fixed');
   
            $headNav.animate({"top": 0},600);
         
            $main.css({'margin-top': $navHeight});
         } else if($(this).scrollTop() < $distance && $headNav.hasClass('navigation--fixed') == true) {
         $headNav.removeClass('navigation--fixed');
         $main.css({'margin-top': 0});
         }
      }
		
   });

   $('.carousel-slider').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1500,
      responsive: [
         {
           breakpoint: 992,
           settings: {
             arrows: false,
             centerMode: true,
             centerPadding: '40px',
             slidesToShow: 1
           }
         }
       ]
   })
});
