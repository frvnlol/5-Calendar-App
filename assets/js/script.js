// Current day element that displays date and time at top of page.
var currentDayEl = $("#currentDay");
currentDayEl.text(dayjs().format("dddd, MMMM DD h:mma"));

// Current hour
var currentHour = dayjs().hour();

// Add click listener to save button and sets the text area input into local storage.
$(".saveBtn").on("click", function () {
  var textAreaEl = $(this).siblings(".description").val();
  var currentTime = $(this).parent().attr("id");
  localStorage.setItem(currentTime, textAreaEl);
});

$(".time-block").each(function () {
  // Checks hour of each time block
  var currentHourCheck = $(this).attr("id").split("hour-")[1];
  // Compares current hour to hour on time block, adds / removes classes, then displays correct color.
  if (currentHourCheck < currentHour) {
    $(this).removeClass("present future").addClass("past");
  } else if (currentHourCheck == currentHour) {
    $(this).removeClass("past future").addClass("present");
  } else {
    $(this).removeClass("past present").addClass("future");
  }
});

// Gets data from local storage to display in workday text area.
function getFromLocal() {
  for (var i = 9; i <= 17; i++) {
    $("#hour-" + i + " .description").val(localStorage.getItem("hour-" + i));
  }
}
getFromLocal();
