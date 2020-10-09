function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}

var theYear = new Date().getFullYear();
document.getElementById('year').innerHTML = theYear;
var time = document.lastModified;
document.getElementById('datetime').innerHTML = time;

