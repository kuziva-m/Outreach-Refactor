jQuery( document ).ready(function($) {
      // filters
$('#filter').on('change', function(){
    var filter = $('#filter');
    $.ajax({
      url:filter.attr('action'),
      data:filter.serialize(), // form data
      type:filter.attr('method'), // POST
      beforeSend:function(xhr){
        filter.find('.hide-change').addClass( "show" );
        filter.find('.hide-change').text('Processing...'); // changing the button label
      },
      success:function(data){
        filter.find('.hide-change').removeClass( "show" );
        filter.find('button').text('Apply filter'); // changing the button label back
        $('#response').html(data); // insert data
      }
    });
    return false;
  });

  /*jQuery('.searchform').submit(function(e) {
    e.preventDefault();

    var params = $(this).serialize().replace(/[^&]+=\.?(?:&|$)/g, '');
  });*/
});