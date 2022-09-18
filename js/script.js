$(document).ready(function () {
  $('.owl-carousel').owlCarousel({
    loop: true,
    autoplay: false,
    // nav:true, 
    dots: true,
    margin: 10,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true
      },
      600: {
        items: 3,
        nav: false
      },
      1000: {
        items: 3,
        nav: true,
        loop: false
      }
    }
  });

});
