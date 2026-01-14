jQuery( document ).ready(function($) {

$('.popup-with-zoom-anim').magnificPopup({
    type: 'inline',

    fixedContentPos: true,
    fixedBgPos: true,

    overflowY: 'auto',

    closeBtnInside: true,
    preloader: false,
    
    midClick: true,
    removalDelay: 300,
    mainClass: 'my-mfp-zoom-in'
  });

$('.logoslider').slick({
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  dots: false,
arrows: true,
 prevArrow:"<img class='a-left control-c prev slick-prev' src='/wp-content/themes/handyman-corporate/assets/icons/arrow-left.png' alt='left arrow'>",
    nextArrow:"<img class='a-right control-c next slick-next' src='/wp-content/themes/handyman-corporate/assets/icons/arrow-right.png' alt='right arrow'>",
	responsive: [
				{
					breakpoint: 960,
					settings: { slidesToShow: 4 },
				},

				{
					breakpoint: 768,
					settings: { slidesToShow: 1 }
				}
			]
});



  $('.opensingle').beefup({
    openSingle: true,
    selfClose: true,
    scroll: true,
    scrollOffset: -10,
    breakpoints: [
    {
      breakpoint: 767,
      settings: {
       scroll: false
     }
   }
   ]
  });


		$('.testimonial-slider').slick({
			slidesToShow: 3,
			slidesToScroll: 1,
			dots: false,
			arrows: true,
			prevArrow:"<div type='button' class='slick-prev pull-left'><span class='fas fa-angle-left' aria-hidden='true'></span></div>",
			nextArrow:"<div type='button' class='slick-next pull-right'><span class='fas fa-angle-right' aria-hidden='true'></span></div>",
			responsive: [
				{
					breakpoint: 960,
					settings: { slidesToShow: 2 },
				},

				{
					breakpoint: 768,
					settings: { slidesToShow: 1 }
				}
			]
		});


	// add gallery to gallery page
	/*$('.gallery-img').magnificPopup({
		type: 'image',
		gallery: { enabled:true }
  });*/

  $('.service-gallery').each(function() {
    //console.log(this);
    $(this).magnificPopup({
        delegate: '.gallery-img',
        type: 'image',
        gallery: {
          enabled:true
        }
    });
  });

  $(".main-navigation li .dropdown-menu").hover(function(){
    var parentclass = $(this).parent().attr('id');
    var targetclass = "#"+parentclass + " a";
    $(targetclass).addClass("parentlink");
    }, function(){
    var parentclass = $(this).parent().attr('id');
    var targetclass = "#"+parentclass + " a";
    $(targetclass).removeClass("parentlink");
  });

/* Popups*/
	$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false
	});

  $('.popup-with-zoom-anim').magnificPopup({
    type: 'inline',
    fixedContentPos: false,
    fixedBgPos: true,
    overflowY: 'auto',
    closeBtnInside: true,
    preloader: false,
    midClick: true,
    removalDelay: 300,
    mainClass: 'my-mfp-zoom-in'
  });


  $('.slider-home').slick({
  slidesToShow: 1,
  slidesToScroll: 1,

  fade: true,
  adaptiveHeight: true,
      arrows: true,
      prevArrow:"<div type='button' class='slick-prev pull-left'><span class='fas fa-angle-left' aria-hidden='true'></span></div>",
      nextArrow:"<div type='button' class='slick-next pull-right'><span class='fas fa-angle-right' aria-hidden='true'></span></div>",
  asNavFor: '.slider-thumb'
});
$('.slider-thumb').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slider-home',
  dots: false,
  arrows: false,
  centerMode: false,
  focusOnSelect: true
});

  /* Sliders Exmaple */
  $(".floorplanslider").slick({
    prevArrow:"<img class='a-left control-c prev slick-prev' src='/wp-content/themes/sjp/images/leftarrowcircle-min.png' alt='left arrow'>",
    nextArrow:"<img class='a-right control-c next slick-next' src='/wp-content/themes/sjp/images/rightarrowcircle-min.png' alt='right arrow'>",
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
      }
    },
    ]
  });



     /* Video Sliders */
   $(".videoslider").slick({
    prevArrow:"<img class='a-left control-c prev slick-prev' src='/wp-content/themes/handyman-corporate/assets/icons/arrow-left.png' alt='left arrow'>",
    nextArrow:"<img class='a-right control-c next slick-next' src='/wp-content/themes/handyman-corporate/assets/icons/arrow-right.png' alt='right arrow'>",
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    responsive: [
    {
      breakpoint: 1220,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
      }
    },
    ]
  });




jQuery("li.readonly input").attr("readonly","readonly");
  


jQuery( "body").on( "click", ".prevarrow", function() {
  month = jQuery(this).attr("data-month");
  year = jQuery(this).attr("data-year");
  monthcount = parseInt(jQuery(".cal").attr("data-monthcount"))-1;

  month = parseInt(month)-1;
  if(month == 0 ){
    month = 12;
    year = parseInt(year)-1;
  }
      var data = {
    'action': 'getnewmonth',
    'month': month,
    'year' : year,
    "monthcount": monthcount
    

  };

    jQuery.post(php_vars.ajax_url, data, function(response) {
     jQuery(".calendarblock").html(response);
     
   });

});

jQuery( "body").on( "click", ".nextarrow", function() {

  month = jQuery(this).attr("data-month");
  year = jQuery(this).attr("data-year");
  monthcount = parseInt(jQuery(".cal").attr("data-monthcount"))+1;
  console.log(monthcount);

  month = parseInt(month)+1;
  if(month == 13 ){
    month = 1;
    year = parseInt(year)+1;
  }
      var data = {
    'action': 'getnewmonth',
    'month': month,
    'year' : year, 
    'monthcount': monthcount
    

  };

    jQuery.post(php_vars.ajax_url, data, function(response) {
     jQuery(".calendarblock").html(response);
     
   });

});



jQuery( "body" ).on( "click",".hasbesttime", function() {

  week = jQuery(this).attr("data-week");
   jQuery(".week"+week +" td").html('<img src="/wp-content/themes/handyman-franchise/images/progress_spinner.gif" alt="progress spinner">');
    
  jQuery(".dateselected").removeClass("dateselected");
   jQuery(".expandactive").removeClass("expandactive");
  jQuery(this).addClass("dateselected");
  jQuery(this).addClass("expandactive");  




    var data = {
    'action': 'expandTimeRow',
    'dow': jQuery(this).attr("data-dow"),
    'dte' :   jQuery(this).attr("data-date"),
    'year' : jQuery(".cal").attr("data-year"),
    'month' : jQuery('.cal').attr("data-month")   // We pass php values differently!
  };

  dte = jQuery(this).attr("data-date") 

   jQuery.post(php_vars.ajax_url, data, function(response) {
   //  jQuery(".week"+week +" td").html('<img src="/wp-content/themes/handyman-franchise/images/progress-spinner.gif">');
       
       
     setTimeout(function(){
  jQuery(".week"+week +" td").html(response);
}, 1200);

     
   });

   jQuery(".week"+week).attr("data-day", dte )



  jQuery(".expandable").css("display", "none");

  

  jQuery(".week"+week).css("display", "table-row");
});

jQuery( "body").on( "click", ".timeslot span", function() {

 jQuery(this).parents(".timeslot").addClass("timeset");
 jQuery(this).prev("input").val("")
 jQuery(this).remove();

})


jQuery( "body").on( "click", ".timetocall", function() {


  time = (jQuery(this).html());
  month = jQuery(".cal").attr("data-month");
  year = jQuery(".cal").attr("data-year");
  day = jQuery(".dateselected").attr("data-date");

  value = month+"/"+day+"/"+year+" @ "+time.toUpperCase();
proceed = 0;
 jQuery(".timeslot input").each(function( ) {
  if(jQuery(this).val()==value){proceed = proceed+1};
});

if(proceed==0){

  jQuery(".timeset input").first().val(month+"/"+day+"/"+year+" @ "+time.toUpperCase())
   jQuery(".timeset input").first().after("<span>X</span>");
  jQuery(".timeset").first().removeClass("timeset");
}
});
  // We can also pass the url value separately from ajaxurl for front end AJAX implementations
  
  $('.text-us-close').click(function(){
    $('.text-us-banner').fadeOut(400, function() {
      $('.text-us-icon-banner').fadeIn();
    });
  });

  $('.text-us-open').click(function(){
    $('.text-us-icon-banner').fadeOut(400, function() {
      $('.text-us-banner').fadeIn();
    });
  });

});


function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}


var  last_touch = getParameterByName('last_touch');


if (last_touch != null && last_touch.length > 0) {

  const d = new Date();
  d.setTime(d.getTime() + (30*24*60*60*1000));
  let expires = "expires="+ d.toUTCString();

document.cookie = "last_touch="+last_touch+"; path=/;"+expires;
}



