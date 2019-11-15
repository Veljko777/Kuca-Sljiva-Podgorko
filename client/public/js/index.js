$(document).ready(function(){
    $('.gallery').slick({
      centerMode: true,
      slidesToShow: 4,
      dots:true,
      autoplay:true,
      autoplaySpeed:1500,
      speed:1000,
      arrows:false,
      responsive: [
        
        {
          breakpoint: 1280,
          settings: {
            arrows: false,
            centerMode: true,
            slidesToShow: 3
          }
        },
        {
          breakpoint: 980,
          settings: {
            arrows: false,
            centerMode: true,
            slidesToShow: 2
          }
        },
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            slidesToShow: 1
          }
        }
        
      ]
    });
  });

