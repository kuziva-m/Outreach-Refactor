jQuery(document).ready(function ($) {
  function initMobileSlider() {
    if ($(window).width() <= 640) {
      if (
        !$(
          '.service-grid__slider, .gallery-container-slider, .article-list-items'
        ).hasClass('slick-initialized')
      ) {
        $(
          '.service-grid__slider, .gallery-container-slider, .article-list-items'
        ).slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          arrows: true,
          prevArrow:
            "<div type='button' class='slick-prev pull-left'><span class='fas fa-angle-left' aria-hidden='true'></span></div>",
          nextArrow:
            "<div type='button' class='slick-next pull-right'><span class='fas fa-angle-right' aria-hidden='true'></span></div>",
        });
      }
    } else {
      if (
        $(
          '.service-grid__slider, .gallery-container-slider, .article-list-items'
        ).hasClass('slick-initialized')
      ) {
        $(
          '.service-grid__slider, .gallery-container-slider, .article-list-items'
        ).slick('unslick');
      }
    }
  }

  $(document).ready(initMobileSlider);
  $(window).on('resize', initMobileSlider);
});
