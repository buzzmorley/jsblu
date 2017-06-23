$(function() {                              // When the DOM is ready

  var times;                                // Declare global variable
  $.ajax( {                                 // Setup request
    beforeSend:  function(xhr) {            // Before requesting data
      if (xhr.overrideMimeType) {           // If supported
          xhr.overrideMimeType("application/json")      //set MIME to prevent errors
      }
    }
  });
  
  // FUNCTION THAT COLLECTS DATA FROM THE JSON FILE
  function loadTimetable() {                // Declare function
    $.getJSON('data/example-8.json')        // Try to collect JSON data
    .done( function(data) {                 // If successful
      times = data;                         // Store it in a variable
    }).fail( function() {                   // If a problem: show message
      $('#event').html('Sorry! We could not load the timetable');
      
    });
  }
  
  loadTimetable();                          // Call the function
    
})