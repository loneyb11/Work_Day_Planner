$(document).ready(function () {

    var todaysDate = $("#currentDay");

    todaysDate.text(moment().format('MMMM Do YYYY, h:mm:ss a'));
    var workHour = $("#time-block");
    var saveBtns = $("#saveBtn");
    var data = {};

    var update = function () {
        todaysDate.text(moment().format('MMMM Do YYYY, h:mm:ss a'));

    var now = moment().hour(); 

    workHour.each(function (i, element) {
        element = $(element);
        if (now > element.attr("data-hour")) {
            element.addClass("past").removeClass("future present");
            } 
        else if (now == element.attr("data-hour")) {
            element.addClass("present").removeClass("future past");
            }
        });
    }

    setInterval(update, 1000);

    saveBtns.on("click", function (event) {


        var button = $(this);

        var btnData = $(this).attr("data-hour");
        console.log(btnData);


        var userText = $("#d" + btnData);
        console.log(userText);


       
        localStorage.setItem(userText.attr("id"), userText.val());
    });


    $("#d1").text(localStorage.getItem("d1"));
    $("#d2").text(localStorage.getItem("d2"));
    $("#d3").text(localStorage.getItem("d3"));
    $("#d4").text(localStorage.getItem("d4"));
    $("#d5").text(localStorage.getItem("d5"));
    $("#d6").text(localStorage.getItem("d6"));
    $("#d7").text(localStorage.getItem("d7"));
    $("#d8").text(localStorage.getItem("d8"));
    $("#d9").text(localStorage.getItem("d9"));


    $("#clear").on("click", function () {
        console.log("clicked");
        localStorage.clear();
        window.location.reload();


    });

});
