let selectedContinent = "asia";
let showRules = false;

let showCountry = false;
let list = [];

window.onload = function () {
  const continents = document.getElementsByClassName("land");
  const countries = document.getElementsByClassName("country");

  const rulesSection = document.getElementById("rules-regulations");
  const rulesHeader = document.getElementById("rules-header");

  //Event Listener to collapse rules section on click

  rulesHeader.addEventListener("click", function () {
    rulesSection.classList.toggle("rules-active");
    showRules = !showRules;

    if (showRules) {
      rulesHeader.classList.add("minus");
      rulesHeader.classList.remove("plus");
      document.getElementById("rules-content").style.display = "block";
    } else {
      rulesHeader.classList.add("plus");
      rulesHeader.classList.remove("minus");
      document.getElementById("rules-content").style.display = "none";
    }
  });

  /*
  *
  Event listeners for map section components
  *
  */
  list = document.getElementsByClassName("LC-list");

  for (continent of continents) {
    //Change fill colour onClick
    continent.addEventListener("click", (event) => {
      changeContinent(event.target.id);
    });

    //Event listeners to handle fill colour change on hover
    continent.addEventListener("mouseover", (event) => {
      document.getElementById(event.target.id).style.fill =
        "var(--hover-colour)";
    });

    //Only trigger mouseout if you're not over the currently selected continent
    continent.addEventListener("mouseout", (event) => {
      if (event.target.id !== selectedContinent)
        document.getElementById(event.target.id).style.fill = "inherit";
    });
  }

  for (country of countries) {
    country.addEventListener("touchstart", (event) => {
      if (event.target.children[1].className == "LC-list")
        changeCountry(event.target.children[1]);
    });
  }

  changeContinent(selectedContinent);
  showSlides(slideIndex);
};

// window.onresize = () => {
//   // for (l of list) {
//   //   l.style.display = "none";
//   // }
//   showCountry = false;
// };

changeContinent = (newContinent) => {
  //reset fill & display of previous continent
  document.getElementById(selectedContinent).style.fill = "inherit";
  document.getElementById(`${selectedContinent}-card`).style.display = "none";

  selectedContinent = newContinent;
  document.getElementById(selectedContinent).style.fill = "white";
  document.getElementById(`${selectedContinent}-card`).style.display = "flex";
};

changeCountry = (newCountry) => {
  if (showCountry) {
    for (l of list) {
      l.style.display = "none";
    }
  } else {
    newCountry.style.display = "flex";
  }
  showCountry = !showCountry;
};

let slideIndex = 1;

window.onresize = () => {
  showCountry = false;

  const testimonial = document.getElementsByClassName("testimonial-wrapper");
  for (t of testimonial) {
    t.style.display = "none";
  }
  showSlides(slideIndex);
};

// window.onload = function () {
//   showSlides(slideIndex);
// };

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
