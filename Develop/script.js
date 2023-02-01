// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});

//PSEUDOCODE

// GIVEN I am using a daily planner to create a schedule



// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar

  // WE WANT TO USE DAYjs TO DISPLAY THE CURRENT DATE 
      // MAKE SURE THE DAYJS CDN LINK EXISTS IN THE HTML FILE
      //CREATE A VARIABLE TO GET THE DAYJS DATA
            // GO TO THE DOCS AND GET DAYJS FORMAT CODE
      // SET THE FORMAT (HH:MM:SS...AND ANY OTHER TIME DETAILS)
      // SET THE CURRENT TIME TO AN ELEMENT IN THE HTML (USE IN HEADER)

 

      var currentTimeEl = $('#currentDay');
      function displayTime() {
        var rightNow = dayjs().format('dddd, MMM DD, YYYY [at] hh:mm:ss a');
        currentTimeEl.text(rightNow);
      };
     displayTime();
     setInterval(displayTime, 1000);
 
    



// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
  // COMPLETE REST OF TIME BLOCKS FROM THE 3 (9AM-11AM) THAT WE'RE ALREADY GIVEN. NOTE THESE ARE NOT REALATED TO THE CURRENT TIME. 
    // REMOVE STATIC PAST, PRESENT AND FUTURE CLASSES FROM HTML
    // FIND A WAY TO AUTOMATICALLY PROGRAMMATICALLY (FUNCTION) ADD OR REMOVE THE APPROPRIATE CLASS
    //NOTE: COLORS NEED TO SHIFT AT THE start OF A NEW HOUR. USE THE HOUR FROM DAYJS AND THEN =< OR => IN AN IF STATEMENT? 
    // IF HOUR IS = DAYJS.HOUR --> DISPLAY CURRENT TIME COLOR. 
    // IF HOUR IS < DAYJS.HOUR --> DISPLAY PAST TIME COLOR
    // IF HOUR IS > DAYJS.HOUR --. DISPLAY FURTURE TIME COLOR


    var timeBlockEl = $('.time-block');
    var currentHour = dayjs().hour();  

    timeBlockEl.each(function () {
      var hourId = parseInt($(this).attr("id").split("-")[1]);
      console.log(hourId);
      if (hourId > currentHour) {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
      } else if (hourId < currentHour){
        $(this).removeClass("future");
        $(this).removeClass("present");
        $(this).addClass("past");
      } else {
        $(this).removeClass("past");
        $(this).removeClass("future");
        $(this).addClass("present");
      }
      }
    );

  



// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
  // USE INNER HTML 
      // COMPARE THE TIME BLOCK (THE HOUR THAT IT IS) AGAINST THE CURRENT TIME FROM DAYJS(). THEN APPLY THE CORRECT CLASS BASED ON THE COMPARISON IN TIME. 



// WHEN I click into a timeblock
// THEN I can enter an event
  // GRAB TEXT INPUT (TEXT AREAS)  



// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
  //EVENTLISTENER UPON THE SAVE BUTTON . THE TIME BLOCK IS THE INPUT
    // CREATE GLOBAL VARIABLE (EMPTY) AND GET THE VALUE
    // SET IT TO LOCAL.STORAGE (WHAT WILL THE DATA IN LOCAL STOREAGE LOOK LIKE?)
    // TIMES: [{},{}]??
    // below is following mini project code outline

    var textAreaEl = document.querySelector('.description');
    // var userInput = textAreaEl;
    var saveButtonInput = document.querySelector('.saveBtn');

    $(".saveBtn").on("click", function() {
      var value = $(this).siblings(".description").val();
      console.log(value);

      var storageKey = $(this).parent().attr("id");
      console.log(storageKey);
      localStorage.setItem(storageKey, value); 

    });

      
    // console.log(localStorage.getItem("hour-12"));  

    
    console.log(localStorage.getItem($("#hour-10 .description").val("")));



// WHEN I refresh the page
// THEN the saved events persist (CONFIRMS THAT DATA WAS ENTERED INTO LOCALSTORAGE)
  //SAVE INPUTS TO LOCAL STORAGE
  // GETTING FROM LOCALSTORAGE
  // PARSE THE DATA FROM LOCAL STORAGE TO TURN IT BACK INTO AN OBJECT (if THE DATA WAS SOTRED AS A json)
  // the have it display as the string it was entered as


  $("#hour-9 .description").val(localStorage.getItem("hour-9"));
  $("#hour-10 .description").val(localStorage.getItem("hour-10"));
  $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  $("#hour-12 .description").val(localStorage.getItem("hour-12"));
  $("#hour-13 .description").val(localStorage.getItem("hour-13"));
  $("#hour-14 .description").val(localStorage.getItem("hour-14"));
  $("#hour-15 .description").val(localStorage.getItem("hour-15"));
  $("#hour-16 .description").val(localStorage.getItem("hour-16"));
  $("#hour-17 .description").val(localStorage.getItem("hour-17"));



  
  //REFER TO MINIPROJECT SOLUTION THAT WAS POSTED. PICK APART CODE. 
  // BE CAREFUL OF EVENT DELEGATE -- ACTIVITY 9 &10 10 PRIMARY -- HOW WOULD YOU BE ABLE TO TELL WHICH SAVE BUTTON IS BEING ACTIVATED. REVIEW ACTIVITY 8 PARENT VS CHILDREN ELEMENTS
  // REVIEW ACTIVITIES 1 AND 2 FOR JQUEREY REVIEW AND GET ATTRIBUTES (ADD CLASS)
