    var theYear = new Date().getFullYear();
    document.getElementById('year').innerHTML = theYear;
    var time = document.lastModified;
    document.getElementById('datetime').innerHTML = time;

{/* const options = {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'}
document.getElementById('currentdate').innerHTML = new Date().toLocaleDateString('en-US', options);
var dt = new Date();
document.getElementById('datetime').innerHTML = dt.toLocaleString('en-US'); */}
