// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
// $(function () {

var timeDisplayEl = $('#time-display');
let textarea;
let workingHours = [9,10,11,12,13,14,15,16,17,18,19]

 // handle displaying the time 
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


for(var x = 0; x < workingHours.length; x++) {
  textarea=document.getElementById(`text-${workingHours[x]}`)
  textarea.innerHTML = localStorage.getItem(`element-${workingHours[x]}`)
  
}


  // HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  setInterval(displayTime,1000);
  function updateTimeBlocks() {
    var timeBlocks = $('.time-block');
  
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

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.

  // displayTime();

// });


