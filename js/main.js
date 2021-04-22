const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('nav');
  menuToggle.addEventListener('click', () => {
      if (nav.className != 'active') {nav.className = 'active';}
      else {nav.className = '';}
  });



$(document).ready(function(){
  $('.slider-big').slick({
    arrows:false,
    slidesToShow:1,
    infinite:true,
    autoplay:true,
    pauseOnFocus:true,
    adaptiveHeight:true,
    pauseOnHover:true,
    swipe:true,
    TouchMove:true,
    asNavFor:".slider-min",
    responsive:[
      {
        breakpoint: 768,
        settings:{
            arrows:false,
          slidesToShow:1,
        }
      }, {
        breakpoint: 922,
        settings:{
          arrows:false,
          slidesToShow:1,
        }
      }, {
        breakpoint: 480,
        settings:{
          arrows:false,
          slidesToShow:1
        }
      }
    ]
  });
  $('.slider-min').slick({
    slidesToShow:4,
    asNavFor  :".slider-big",
    responsive:[
      {
        breakpoint: 1200,
        settings:{
            arrows:false,
          slidesToShow:3,
        }
      },
      {
        breakpoint: 768,
        settings:{
            arrows:false,
          slidesToShow:2,
        }
      }, {
        breakpoint: 922,
        settings:{
          arrows:false,
          slidesToShow:3,
        }
      }, {
        breakpoint: 480,
        settings:{
          arrows:false,
          slidesToShow:1
        }
      }
    ]
    });
    });
