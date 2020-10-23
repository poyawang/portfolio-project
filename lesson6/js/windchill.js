
let t = document.getElementById('temp').innerText;
let s = document.getElementById('windSpeed').innerText;

var f = 35.74 + 0.6215 * t - 35.75 * Math.pow(s, 0.16) + 0.4275 * t * Math.pow(s, 0.16)
var windChill = Math.round(f * 10) / 10;

document.getElementById('windChill').innerHTML = windChill;