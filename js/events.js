//define functions here
function getIn(){
  $("p").on("click",function(){
    alert("Hey!");
  })
  
}



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
      
  
      $(document).on('keydown', function(key) {
         if(key.which == 83){
        alert('s was pressed');
        }
      });
      

      $("form").on("submit", function() {
        if ($( "input:first" ).val() === "correct") {
        alert('your form is going to be submitted now');
        return;
        }
        alert("you entered the wrong value");
        return;
      });


  
  
  
  
  
  
  
});

      
        