function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}

var theYear = new Date().getFullYear();
document.getElementById('year').innerHTML = theYear;

const dow = ['Sunday', 'Monday', 'Tuesday', 'wednesday', 'Thursday', 'Friday', 'Saturday']
const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

let date = new Date();
let output = dow[date.getDay()]+', '+ date.getDate() + ' ' + month[date.getMonth()] + ' '+date.getFullYear();
document.getElementById('current-date').innerHTML = output;


//display message
if (date.getDay() == 5) {
    document.getElementById('message').style.display = 'block';
}

//lazy loading
let imagesToLoad = document.querySelectorAll('img[data-src]');

const loadImages = (image) => {
  image.setAttribute('src', image.getAttribute('data-src'));
  image.onload = () => {
    image.removeAttribute('data-src');
  };
};

// imagesToLoad.forEach((img) => {
//     loadImages(img);
// });

if('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((items, observer) => {
      items.forEach((item) => {
        if(item.isIntersecting) {
          loadImages(item.target);
          observer.unobserve(item.target);
        }
      });
    });
    imagesToLoad.forEach((img) => {
      observer.observe(img);
    });
} else {
    imagesToLoad.forEach((img) => {
      loadImages(img);
    });
}