var text;

function startText() {
  text = document.txtBox.box1.value;
  text = text.replace(/1/g, '1');
  text = text.replace(/2/g, '2');
  text = text.replace(/3/g, '3');
  text = text.replace(/4/g, '4');
  text = text.replace(/5/g, '5');
  text = text.replace(/6/g, '6');
  text = text.replace(/7/g, '7');
  text = text.replace(/8/g, '8');
  text = text.replace(/9/g, '9');
  text = text.replace(/0/g, '0');
  document.txtBox.box2.value = text;
}

var input = document.getElementById('display');

//script to detect if enter button is clicked to evaluate the result

input.addEventListener('keyup', function (event) {
  // Number 13 is the "Enter" key on the keyboard

  if (event.keyCode == 13) {
    // Trigger the button element with a click

    document.getElementById('equal').click();
  }
});

// Function to calculate the result
function calculate(operation) {
  let result;
  try {
    result = eval(operation);
  } catch (error) {}

  if (result === 0 || (isFinite(result) && Boolean(result))) {
    document.getElementById('display').value = result;
  } else {
    document.getElementById('display').value = 'Wrong Value';
  }
}

function sqrt() {
  var val = document.getElementById('display').value;
  document.getElementById('display').value = 'Math.sqrt(' + val + ')';
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
  let number = Number(numberString.replace(/[^\d.]/g, ''));
  // Use this if you do not want to treat comma as thousands separator
  // let number = Number(numberString);
  // Could also have used "en-US" for USA, "fa-IR" for IRAN or "ar" (which seems to use western digits). "EG" is for Egypt
  let english = number.toLocaleString('en', { maximumFractionDigits: 10 });

  return english;
}
