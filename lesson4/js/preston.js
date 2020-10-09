function toggleMenu(e) {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
    e.preventDefault();
}

var theYear = new Date().getFullYear();
document.getElementById('year').innerHTML = theYear;
var time = document.lastModified;
document.getElementById('datetime').innerHTML = time;

