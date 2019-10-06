//define functions here
function getIt(){
  $("p").on("click",function(){
    alert("Hey!");
  })
  }

function frameIt() {
  $('img').on('unload', function() {
    $('img').addClass('tasty');
  });
}



$(document).ready(function(){
    getIt();
    frameIt();

    
  
  
  
});

      
        