/* eslint-env node */
function checkUsername()    {           //Declare function
    var userName = el.value;            // Store username in a variable
    if (userName.length < 5)    {       // If username < 5 characters
    elMsg.className = 'warning';        // Change class on message
    elMsg.textContent = 'Not long enough, yet...';  // Update message
} else {                                // Otherwise
  elMsg.textContent = '';               // Clear the message
  }
 
}

function tipUsername()  {               // Declare function
    elMsg.className = 'tip';            // Change class for message
    elMsg.innerHTML = 'Username must be at least 5 characters';     // Add message
}

var el = document.getElementById('username');       // Username input
var elMsg = document.getElementById('feedback');    // Element to hold message

// WHen the user input gains / looses focus call funtions above
el.addEventListener('focus', tipUsername, false);   // Focus call on tipUsername()
el.addEventListener('blur', checkUsername, false);  // Blur call checkUsername() 
