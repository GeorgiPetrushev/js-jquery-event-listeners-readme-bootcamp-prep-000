//define functions here

$(document).ready(function(){


 $("h1").on("mouseenter",function() {
            alert("Hello, world!");
  });
          
 $(document).on('keypress', function(key) {
  if (key.which == 13){
    alert('enter was pressed');
    }
  });     
          
  $(document).on('keyup', function(key) {
  if (key.which == 82){
    alert('r was pressed');
  }
});
  
  
  
  
  
  
  
  
});

      
        