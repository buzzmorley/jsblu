/*eslint-env browser*/
var el;                                              // Declare variables

function charCount(e)   {                           // Declare function
  var textEntered, charDisplay, counter, lastkey;   // Declare variables
  textEntered = document.getElementById('message').value; // Users text
  charDisplay = document.getElementById('charactersLeft'); // Counter element
  counter = 180 - (textEntered.length);           // Number of chars left
  charDisplay.textContent = counter;                // Show charcters left
  
  
  lastkey = document.getElementById('lastKey');     // Get last key element
  lastkey.textContent = 'Last key by ASCII code: ' + e.keyCode; // Create msg
  
} 

el = document.getElementById('message');            // Get msg element
el.addEventListener('keyup', charCount, false);     // keyup event
