//define functions here
function getIt(){
  $("p").on("click",function(){
    alert("Hey!");
  })
  }

function frameIt(){
  $("img").on("load",function(){
    $("img").addClass("tasty");
    
  })
}

function pressIt(){
  $(document).on("keydown",function(key){
    if(key.which === 71){
      alert("You have press 'G'!")
    }
  })
}

function submitIt(){
  $("form").on("submit",function(){
    alert("Your form is goint to be submitted now.");
  })
}



$(document).ready(function(){
    getIt();
    frameIt();
    pressIt();

    
  
  
  
});

      
        