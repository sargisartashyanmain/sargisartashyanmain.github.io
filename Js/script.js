//debugger;

//Burger Menu Js
const body = document.querySelector('body');
const burgerMenu = document.querySelector('#burger_menu');
const adaptMenu = document.querySelector('.adapt_menu');

burgerMenu.addEventListener('click', (e) => {
  burgerMenu.classList.toggle('_active');
  burgerMenu.classList.toggle('_fixed');
  adaptMenu.classList.toggle('_active');

  let w = window.innerWidth;
  if (w < 415) {
    body.classList.toggle('_block');
  }
});

//--------------------------------
//
//Slider
//Start
$(document).ready(function(){
  $('.slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 3000,
    variableWidth: true,
    arrows: true,
    prevArrow: $('#prev'),
    nextArrow: $('#next'),
    dots: true,
    customPaging : function(slider, i) {
      let thumb = jQuery(slider.$slides[i]).data();
      return '<a>'+('0'+(i+1)).slice(-2)+'</a>';
    },
    responsive: [
                  {
                    breakpoint: 1140,
                    settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1
                    }
                  },
                  {
                    breakpoint: 1008,
                    settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1
                    }
                  },
                  {
                    breakpoint: 800,
                    settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1,
                      arrows: true,
                      dots: true,
                    }
                  }

                ]
  });
});
//End

$(function(){

  $('#to_first_section').on('click', function(e){
    $('html,body').stop().animate({ scrollTop: $('#first_section').offset().top }, 1000);
    e.preventDefault();
  });

  $('#to_second_section').on('click', function(e){
    $('html,body').stop().animate({ scrollTop: $('#second_section').offset().top }, 1000);
    e.preventDefault();
  });

  $('#to_third_section').on('click', function(e){
    $('html,body').stop().animate({ scrollTop: $('#third_section').offset().top }, 1000);
    e.preventDefault();
  });

  $('#to_footer').on('click', function(e){
    $('html,body').stop().animate({ scrollTop: $('#footer').offset().top }, 1000);
    e.preventDefault();
  });




  $('#to_first_section_ad').on('click', function(e){
    $('html,body').stop().animate({ scrollTop: $('#first_section').offset().top }, 1000);
    e.preventDefault();
  });

  $('#to_second_section_ad').on('click', function(e){
    $('html,body').stop().animate({ scrollTop: $('#second_section').offset().top }, 1000);
    e.preventDefault();
  });

  $('#to_third_section_ad').on('click', function(e){
    $('html,body').stop().animate({ scrollTop: $('#third_section').offset().top }, 1000);
    e.preventDefault();
  });

  $('#to_footer_ad').on('click', function(e){
    $('html,body').stop().animate({ scrollTop: $('#footer').offset().top }, 1000);
    e.preventDefault();
  });
});