let currently = $("#currentDay");
let nowHour = moment().format("H");

setInterval(() => {
    let now =moment();
    let date = now.format("dddd, MMMM, hh:mm a");
    currently.text(date);
}, 1000);

// clear funciton to reset form fields
$("#clear").on("click", function () {
    console.log("clicked");
    localStorage.clear();
    window.location.reload();
});
// save to local storage
$(".saveBtn").click(function () { 
    $('input[type="text"]').each(function () { 
        const id = $(this).attr('id'); 
        const value = $(this).val(); 
        localStorage.setItem(id, value);
    });
});

// change the color of the form fields, color past(grey), present(red) and future(green).
colorChange(9, "#workHour9"); 
colorChange(10, "#workHour10"); 
colorChange(11, "#workHour11"); 
colorChange(12, "#workHour12"); 
colorChange(13, "#workHour13");
colorChange(14, "#workHour14"); 
colorChange(15, "#workHour15"); 
colorChange(16, "#workHour16"); 
colorChange(17, "#workHour17"); 

// Functuion to change color
function colorChange(time, theId) { 
    if (nowHour > time) { 
        $(theId).addClass("past"); 
    }
    if (nowHour < time) { 
        $(theId).addClass("future"); 
    }
    if (nowHour == time) { 
        $(theId).addClass("present");
    }
}
