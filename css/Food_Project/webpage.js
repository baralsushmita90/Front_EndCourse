$(document).ready(function(){
  //alert("jQuery Loaded");
  var el= document.getElementById("head");

$('[data-trigger ="dropdown"]').on('mouseenter',function(){

    var submenu= $(this).parent().find('.submenu');
    submenu.fadeIn(300);
    $('.profile-menu').on('mouseleave',function(){
      submenu.fadeOut(300);





    });

});

$('#prepend,#append,#replace').on('click',function(e){


  var el= $(e.currentTarget);
  var action =el.attr('id');
  var content = $('#textarea2').val();
  if(action=="prepend"){
    console.log("prepending...");
    $('#suggestion').prepend(content);

  }
  else if(action=="append")
  {
     console.log("appending....");
     $('#suggestion').append(content);

  }
  else if(action=="replace")
  {
    console.log("replacing..");
    $('#suggestion').html(content);
  }

});


  // console.log("El in vanilla JS:",el);
  // console.log("EL in jQuery:",$(el));
  // $('#butt').on('click',function (){
  //
  //     // alert("Hello through jquery");
  //
  // });
  //


});
//Javascript code to handle event on button click
// var btn = document.getElementById("butt");
//
//
// function buttonClicked()
// {
//
//   console.log("Button CLicked");
//
//   var search = document.getElementById("input-type");
//   var textmsg= document.getElementById('my-textarea');
//   var result = document.getElementById("text");
//   console.log(search);
//   result.innerHTML= "Hello!  "+search.value + "<br/>";
//   result.innerHTML+= "Message: " + textmsg.value;
// }
//
//
//
//
// btn.addEventListener("click",buttonClicked);
