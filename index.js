/*
$( document ).ready(function() {
   // console.log( "ready!" );
   $("#iconId").click(function(){
      

 var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {

        x.className += " responsive";
      


    } else {
        x.className = "topnav";

    }
 
 /* $( "div.searchbar" ).show();*/
/*
});


});*/

$(document).ready(function() {
     $("#iconId").click(function () {

var x = document.getElementById("main-nav");
  
 if(this.classList.contains('active')){
        x.style.display="none";
        this.classList.remove('active');
    }
    else{
        x.style.display="flex";
        this.classList.add('active');

    }
  });
  });

// Accordian function

 $("#accordion > li > div").click(function(){

  if(false == $(this).next().is(':visible')) {
    $('#accordion ul').slideUp(300);
  }
  $(this).next().slideToggle(300);
});

$('#accordion ul:eq(0)').show();



// Get the modal/*
var modal = document.getElementById('modalId');
var btn = document.getElementById("modalbtnId");
var btnclose = document.getElementById("btncloseId");
var btnsave = document.getElementById("btnsaveId");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
}
btnclose.onclick = function() {
    modal.style.display = "none";
}
btnsave.onclick = function() {
    modal.style.display = "none";
}

span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}




