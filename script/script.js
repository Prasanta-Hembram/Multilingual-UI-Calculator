var input = document.getElementById("display");

//script to detect if enter button is clicked to evaluate the result

input.addEventListener("keyup", function(event) {
  
    // Number 13 is the "Enter" key on the keyboard
  
    if (event.keyCode == 13) {
    
      // Trigger the button element with a click
      
      document.getElementById("equal").click();
  }
});

// Function to calculate the result
function calculate(operation) {
  let result;
  try {
    result = eval(operation);  
  } catch (error) {}

  if ( result === 0 || isFinite(result) && Boolean(result) ) {
    document.getElementById('display').value = result;
  } else {
    document.getElementById('display').value = 'Wrong Value';
  }

} 





      //show and hide dropdown list item on button click
      function show_hide() {
        var click = document.getElementById("list-items");
        if(click.style.display ==="none") {
           click.style.display ="block";
        } else {
           click.style.display ="none";
        } 
     }



     $(document).ready(function(){
   
      $('#Hindi').load("../locales/hin/hin.html");
   
   });