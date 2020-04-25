let slideIndex = 1;

window.onresize = () => {
  const testimonial = document.getElementsByClassName("testimonial-wrapper");
  for (t of testimonial) {
    t.style.display = "none";
  }
  showSlides(slideIndex);
};

window.onload = function () {
  showSlides(slideIndex);
};

// Carousel --------------->

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function showSlides(n) {
  let slides = document.getElementsByClassName("testimonial-wrapper");
  let dots = document.getElementsByClassName("carousel-dot");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
