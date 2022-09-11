var text;
	
function startText() {
  text = document.txtBox.box1.value;  
  text = text.replace(/1/g, "१");
  text = text.replace(/2/g, "२");
  text = text.replace(/3/g, "३");
  text = text.replace(/4/g, "४");
  text = text.replace(/5/g, "५");
  text = text.replace(/6/g, "६");
  text = text.replace(/7/g, "७");
  text = text.replace(/8/g, "८");
  text = text.replace(/9/g, "९");
  text = text.replace(/0/g, "०");
  document.txtBox.box2.value=text;

}

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

// Changes whole body text

localizeNumbers(document.getElementsByTagName('body')[0]);

function localizeNumbers(node) { 
    if (node.nodeType == Node.TEXT_NODE) {
        // Use this if target numbers may contain comma as thousands separators
        node.data = node.data.replace(/([,\d]*\.?\d+)/g, localize);
        // Use this if you do not want to treat comma as thousands separator
        // node.data = node.data.replace(/(\d*\.?\d+)/g, localize);
    }
    // Also, replace numbers in child nodes
    node.childNodes.forEach(localizeNumbers);
}

function localize(numberString) {
  // Convert from string to number
  // Use this if target numbers may contain comma as thousands separators
  let number = Number(numberString.replace(/[^\d.]/g, ""));
  // Use this if you do not want to treat comma as thousands separator
  // let number = Number(numberString);

  // Could also have used "fa-IR" for IRAN
  let hindi = number.toLocaleString("hi", { maximumFractionDigits: 10 });
  // Could also have used "en-US" for USA
  let english = number.toLocaleString("en", { maximumFractionDigits: 10 });
  // Could also have used "ar" (which seems to use western digits). "EG" is for Egypt
  let arabic = number.toLocaleString("ar-EG", { maximumFractionDigits: 10 });


  return santali;

}

