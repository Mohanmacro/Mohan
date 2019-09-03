
$(document).ready(function(){
$.getJSON("[URL to other page]",
  function(data){

    //Iterate through the <li> inside of the URL's data
    $.each(data.items, function(item){
      $("<li/>").value().appendTo("#data");
    });

  });
});



