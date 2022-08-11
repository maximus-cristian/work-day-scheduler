var currentDayEL = document.querySelector("#currentDay")
var EventEl = $("button")

var currentDay = moment().format("dddd LL");
$("#currentDay").append(currentDay);

var currentTime = moment().format("LT");
$("#currentTime").append(currentTime);

function enterEvent() {
    var textContent = $(this).siblings("textarea").val()
    console.log(textContent)
    var saveEvent = $(this).siblings("div").attr("id")
    localStorage.setItem(saveEvent, textContent)   
}
$("#9").siblings("hour 9").val(localStorage.getItem("9"))
$("#10").siblings("hour 10").val(localStorage.getItem("10"))
$("#11").siblings("hour 11").val(localStorage.getItem("11"))
$("#12").siblings("hour 12").val(localStorage.getItem("12"))
$("#1").siblings("hour 1").val(localStorage.getItem("1"))
$("#2").siblings("hour 2").val(localStorage.getItem("2"))
$("#3").siblings("hour 3").val(localStorage.getItem("3"))
$("#4").siblings("hour 4").val(localStorage.getItem("4"))
$("#5").siblings("hour 5").val(localStorage.getItem("5"))

EventEl.on("click", enterEvent)