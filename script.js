let currently = $("#currentDay");
let nowHour = moment().format("H");

setInterval(() => {
    let now =moment();
    let date = now.format("dddd, MMMM, hh:mm a");
    currently.text(date);
}, 1000);

$("#clear").on("click", function () {
    console.log("clicked");
    localStorage.clear();
    window.location.reload();
});


$(".saveBtn").click(function () { 
    $('input[type="text"]').each(function () { 
        const id = $(this).attr('id'); 
        const value = $(this).val(); 
        localStorage.setItem(id, value);
    });
});

$('input[type="text"]').each(function () { 
    const getting = $(this).attr('id'); 
    const letsGrab = localStorage.getItem(getting); 
    document.getElementById(getting).value = letsGrab; 
});

colorChange(9, "#workHour9"); 
colorChange(10, "#workHour10"); 
colorChange(11, "#workHour11"); 
colorChange(12, "#workHour12"); 
colorChange(13, "#workHour13");
colorChange(14, "#workHour14"); 
colorChange(15, "#workHour15"); 
colorChange(16, "#workHour16"); 
colorChange(17, "#workHour17"); 

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
