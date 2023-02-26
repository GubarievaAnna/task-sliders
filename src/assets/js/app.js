$('.slider').slick({
    arrows: false,
    dots: true,
    speed: 300,
    cssEase: 'ease-in-out',
  });

  $('.slider2').slick({
    arrows: false,
    dots: true,
    fade: true,
    speed: 300,
    cssEase: 'linear',
  });

  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
    slidesToShow: 2,
    // infinite: true,
    arrows: false,
    dots: true,
    asNavFor: '.slider-for',
    centerMode: true,
    focusOnSelect: true
  });