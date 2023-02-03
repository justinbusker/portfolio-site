var h_time = document.getElementById("h_time");
var h_date = document.getElementById("h_date");

function date_time() {
    var dt = new Date();
    var h = dt.getHours();
    var m = dt.getMinutes();
    var month = dt.getMonth();
    var day = dt.getDate();
    var year = dt.getFullYear();
    var x = h >= 12 ? "PM" : "AM"
    h = h % 12;
    h = h ? h : 12
    h_time.textContent = ("" + h).substr(-2) + ":" + ("0" + m).substr(-2) + " " + x
    h_date.textContent = (month + 1) + "." + day + "." + ("" + year).substr(-2)
}
setInterval(date_time, 1000)