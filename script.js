let currently = $("#currentDay");
let nowHour = moment().format("H");

setInterval(() => {
    let now =moment();
    let date = now.format("dddd, MMMM, hh:mm a");
    currently.text(date);
}, 100);



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

colorChecks(9, "#workHour9"); 
colorChecks(10, "#workHour10"); 
colorChecks(11, "#workHour11"); 
colorChecks(12, "#workHour12"); 
colorChecks(13, "#workHour13");
colorChecks(14, "#workHour14"); 
colorChecks(15, "#workHour15"); 
colorChecks(16, "#workHour16"); 
colorChecks(17, "#workHour17"); 

function colorChecks(time, theId) { 
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
