$(function() {

  var num = ""
    //*********************
  
 $('#c').click(function(){
   num = "";
   show();
   $('#answer').html('0')
 });
  
  $('#one').click(function() {
    num = (num + 1 + "");
    show();
  });

  $('#two').click(function() {
    num = (num + 2 + "");
    show();
  });

  $('#three').click(function() {
    num = (num + 3 + "");
    show();
  });

  $('#four').click(function() {
    num = (num + 4 + "");
    show();
  });

  $('#five').click(function() {
    num = (num + 5 + "");
    show();
  });

  $('#six').click(function() {
    num = (num + 6 + "");
    show();
  });

  $('#seven').click(function() {
    num = (num + 7 + "");
    show();
  });

  $('#eight').click(function() {
    num = (num + 8 + "");
    show();
  });

  $('#nine').click(function() {
    num = (num + 9 + "");
    show();
  });

  $('#zero').click(function() {
    num = (num + 0 + "");
    show();
  });
  
   $('#decimalPoint').click(function() {
    num = (num + "." + "");
    show();
  });

 
  $('#plus').click(function(){
    
    num = num + "+" + "";
    show();
  });
  
    $('#minus').click(function(){
    
    num = num + "-" + "";
    show();
  });
  
    $('#times').click(function(){
    
    num = num + "*" + "";
    show();
  });
  
    $('#divided').click(function(){
    
    num = num + "/" + "";
    show();
  });
  
  
  
  $('#equals').click(function(){
    num = eval(num);
    show();
  });
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  $('#plusMinus').click(function(){
    num = num * -1;
    num = (num + "");
    show();
  });
  
  $('#percentage').click(function(){
    num = num / 100;
    show();
  });
  
  

                   
  
  
  
  
  //*********************functions
  
  function show() {
    if (num.length > 22){
            document.getElementById("1").disabled = true;
     //*** very weird. I entered 1 above by mistake although no button
     // has an ID of one. It just happened to do exactly what I wanted it        // to, disabling the buttons when the length of the integer starts          // passing the length of the calculater. Happened completely by              // mistake,  don't know the logic behind this, big coincidence that 
     // it works. 
      
      // Ohhhhhh - maybe because every number has a value of true? it                disables all numbers?



    }
    if (num.length < 12){
      $('#smallAnswer').html("");
      $('#answer').html(num);
    }
     else{ 
       $('#answer').html("");
       $('#smallAnswer').html(num);
     }
          num = (num + "")

  }

  
  
  
  
  
});