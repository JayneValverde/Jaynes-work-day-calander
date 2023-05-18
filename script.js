// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

// $(function () {

// Save reference to import DOM elements 
var timeDisplayEl = $('#time-display');
let textarea;
let workingHours = [9,10,11,12,13,14,15,16,17,18,19,]

 // Function to display the time 
function displayTime() {
  var rightNow = dayjs(); 
  timeDisplayEl.text(rightNow.format('MMM DD YYYY [at] hh:mm:ss a'));
  }

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. 
function saveText(hour) {
  textarea=document.getElementById(`text-${hour}`)
  localStorage.setItem(`element-${hour}`, textarea.value)
}

// Loop through working hours to store text in localStorage
for(var x = 0; x < workingHours.length; x++) {
  textarea=document.getElementById(`text-${workingHours[x]}`)
  textarea.innerHTML = localStorage.getItem(`element-${workingHours[x]}`)
}

  // Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. 
  setInterval(displayTime,1000);
  function updateTimeBlocks() {
    var timeBlocks = $('.time-block');

  // loop through timeBlocks to determine dayHour
    for(var i = 0; i < timeBlocks.length; i++) {
      var dayHour = dayjs().hour();
      var blockId = $(timeBlocks[i]).attr('id');
      var blockHour = blockId.split("-")[1];
  
      if(blockHour < dayHour) {
      $(timeBlocks[i]).removeClass('present');
      $(timeBlocks[i]).removeClass('future');
      $(timeBlocks[i]).addClass('past');
      } else if (blockHour == dayHour) {
        $(timeBlocks[i]).removeClass('future');
        $(timeBlocks[i]).removeClass('past');
        $(timeBlocks[i]).addClass('present');
      } else {
        $(timeBlocks[i]).removeClass('past');
        $(timeBlocks[i]).removeClass('present');
        $(timeBlocks[i]).addClass('future');
      }
    }
  }

  updateTimeBlocks();

// Updates time display
  displayTime();

// });


