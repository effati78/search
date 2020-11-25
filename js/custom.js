var random = Math.floor(Math.random() * 4);
document.body.style.backgroundImage = "url('../image/" + random + ".jpg')";
var d = new Date();
var check = true;
var XCheckBox = true;
var themeChecked = true;
if (d.getHours() == '0' || d.getHours() == '1' || d.getHours() == '2' || d.getHours() == '3' || d.getHours() == '4' || d.getHours() == '5' || d.getHours() == '6' || d.getHours() == '7' || d.getHours() == '8' || d.getHours() == '9')
    document.getElementById('hour').innerHTML = '0' + d.getHours();
else
    document.getElementById('hour').innerHTML = d.getHours();
if (d.getMinutes() == '0' || d.getMinutes() == '1' || d.getMinutes() == '2' || d.getMinutes() == '3' || d.getMinutes() == '4' || d.getMinutes() == '5' || d.getMinutes() == '6' || d.getMinutes() == '7' || d.getMinutes() == '8' || d.getMinutes() == '9')
    document.getElementById('minute').innerHTML = '0' + d.getMinutes();
else
    document.getElementById('minute').innerHTML = d.getMinutes();


var myTimer = setInterval(TimeDate, 1000);

function TimeDate() {
    var d = new Date();
    if (d.getHours() == '0' || d.getHours() == '1' || d.getHours() == '2' || d.getHours() == '3' || d.getHours() == '4' || d.getHours() == '5' || d.getHours() == '6' || d.getHours() == '7' || d.getHours() == '8' || d.getHours() == '9') {
        document.getElementById('hour').innerHTML = '0' + d.getHours();
    } else {
        document.getElementById('hour').innerHTML = d.getHours();
    }
    if (d.getMinutes() == '0' || d.getMinutes() == '1' || d.getMinutes() == '2' || d.getMinutes() == '3' || d.getMinutes() == '4' || d.getMinutes() == '5' || d.getMinutes() == '6' || d.getMinutes() == '7' || d.getMinutes() == '8' || d.getMinutes() == '9') {
        document.getElementById('minute').innerHTML = '0' + d.getMinutes();
    } else {
        document.getElementById('minute').innerHTML = d.getMinutes();
    }

}
AMIB.showPDate('date');
var redirect = "";
var s = document.getElementById("input");
s.value = "";
s.focus();
document.addEventListener("keyup", function (e) {
    if (e.keyCode == '13') {
        var win = window.open("https://www.google.com/search?q=" + s.value, '_blanck');
        s.value = "";
        win.focus();
    }
    s.focus();
});

function Search(domain) {
    if (domain == "toplearn") {
        if (s.value == "")
            redirect = "https://toplearn.com";
        else
            redirect = "https://toplearn.com/courses?search=";
    } else if (domain == "faradars") {
        if (s.value == "")
            redirect = "https://faradars.org";
        else
            redirect = "https://faradars.org/search_gcse?q=";
    } else if (domain == "google") {
        if (s.value == "")
            redirect = "https://www.google.com";
        else
            redirect = "https://www.google.com/search?q=";
    } else if (domain == "duckduckgo") {
        if (s.value == "")
            redirect = "https://duckduckgo.com";
        else
            redirect = "https://duckduckgo.com/?t=ffab&q=";
    } else if (domain == "bing") {
        if (s.value == "")
            redirect = "https://www.bing.com";
        else
            redirect = "https://www.bing.com/search?q=";
    }
    var win = window.open(redirect + s.value, '_blanck');
    s.focus();
    s.value = "";
    win.focus();
}

function url() {
    if (s.value != "") {
        var win = window.open("http://www." + s.value, '_blanck');
        s.focus();
        s.value = "";
        win.focus();
    } else {
        s.value = "Please enter a URL";
        s.focus();
        s.select();
    }
}

function bgcolor(color) {
    document.body.style.backgroundImage = "url('../image/" + color + ".jpg')";
}

function setting() {
    if (check) {
        document.getElementById('colors').style.left = '0' + 'px';
        check = false;
    } else {
        document.getElementById('colors').style.left = '-110' + 'px';
        check = true;
    }
}

function checkbox() {
    if (XCheckBox) {
        document.getElementById('sec').style.opacity = "0";
        XCheckBox = false;
    } else {
        document.getElementById('sec').style.opacity = "1";
        XCheckBox = true;
    }

}

function IconTheme() {
    if (themeChecked) {
        document.getElementById('theme-ul').style.display = "inline-block";
        document.getElementById('icontheme').style.transform = "rotate(90deg)";
        themeChecked = false;
    } else {
        document.getElementById('theme-ul').style.display = "none";
        document.getElementById('icontheme').style.transform = "rotate(0deg)";
        themeChecked = true;
    }
}