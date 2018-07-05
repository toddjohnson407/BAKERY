
function navbar() {
  console.log("test");
  $(function(){
    'use strict';


    //calculate body padding top depend on navbar height
    $('body').css('paddingTop' , $('.navbar').innerHeight());


    //smoothly scroll to element
    $('.navbar li a').click(function(e){
      e.preventDefault();
      $('html , body').animate({
        scrollTop : $('#' + $(this).data('scroll')).offset().top +1
      },1000);
  });


    //add active class on navbar link and remove from siblings
    $('.navbar li a').click(function(){
      $(this).addClass('active').parent().siblings().find('a').removeClass('active');
    });
    ''


    $(window).scroll(function(){

      //sync navbar links with sections
      $('.block').each(function(){
        if ($(window).scrollTop() > $(this).offset().top){
          var blockID = $(this).attr('id');
          $('.navbar a').removeClass('active');
          $('.navbar li a[data-scroll="' + blockID + '"]').addClass('active');
        }
      });

      //scroll to top button
      var scrollToTop = $('.scroll-to-top');
      if ($(window).scrollTop() >= 1000){
        if(scrollToTop.is(':hidden')){
        scrollToTop.fadeIn(400);
        }
      }else{
        scrollToTop.fadeOut(400);
      }
    });
    //click on scroll to top button
    $('.scroll-to-top').click(function(event){
      event.preventDefault();
      $('html , body').animate({
        scrollTop : 0
      },1000)
    });

    //popup
    $('.show-popup').click(function(){
      $('.' + $(this).data('popup')).fadeIn();
    });
    $('.popup').click(function(){
      $(this).fadeOut();
    });
    $('.popup .inner').click(function(e){
      e.stopPropagation();
    });
    $('.popup .close').click(function(e){
      e.preventDefault();
      $(this).parentsUntil('.popup').parent().fadeOut();
    });
    $(document).keydown(function(e){
      if (e.keyCode == 27){
        $('.popup').fadeOut();
      }
    });

    //buttons with effects
    $('.from-left').hover(function(){
      $(this).find('span').eq(0).animate({
        width : '100%'
      }, 300);
    }, function(){
      $(this).find('span').eq(0).animate({
        width : 0
      }, 300);
    });
  });

};

document.app = {
  navbar
};

export { navbar };
