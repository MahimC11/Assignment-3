// This Function Opens the modal
function openModal() {
  document.getElementById("myModal").style.display = "block";
}


// This closes the modal
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}


var slideIndex = 1;
showSlides(slideIndex);

// This is for the next and previous buttons
function plusSlides(n) {
  showSlides(slideIndex += n);   
}
  

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}
  

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

var total = 0;

function add(n){
    total += n;
    document.getElementById("total").innerHTML = total;
}

function remove(n){
  if(total > 0){
    total -= n;
    document.getElementById("total").innerHTML = total;
  }

}