setInterval(showTime,1000);
function showTime() {
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    let am_pm = "AM";
    if (hour>12) {
        hour -= 12;
        am_pm = "PM";
        
    }
    if (hour == 0) {
        am_pm = "AM"
        
    }
    hour = hour<10 ? "0"+ hour:hour;
    min = min<10 ? "0"+ min:min;
    sec = sec<10 ? "0"+ sec:sec;
   

    document.getElementById("hour").innerHTML = hour;
    document.getElementById("min").innerHTML = min;
    document.getElementById("sec").innerHTML = sec;
    document.getElementById("am_pm").innerHTML = am_pm ;
}
