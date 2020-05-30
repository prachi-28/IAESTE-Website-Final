let selectedContinent = "asia";
let showRules = false;
let showGeneral = false;
let showCountry = false;
let slideIndex = 1;

window.onload = function () {
  const continents = document.getElementsByClassName("land");
  const countries = document.getElementsByClassName("country");

  const rulesHeader = document.getElementById("rules-header");
  const rulesContent = document.getElementById("rules-content");

  const generalRulesHeader = document.getElementById("general-rules-header");
  const generalRulesList = document.getElementById("general-rules-list");

  //Event Listener to collapse rules section on click
  rulesHeader.addEventListener("click", function () {
    showRules = !showRules;

    if (showRules) {
      rulesHeader.classList.add("minus");
      rulesHeader.classList.remove("plus");
      rulesContent.style.display = "block";
    } else {
      rulesHeader.classList.add("plus");
      rulesHeader.classList.remove("minus");
      rulesContent.style.display = "none";
    }
  });

  generalRulesHeader.addEventListener("click", () => {
    showGeneral = !showGeneral;

    if (showGeneral) {
      generalRulesHeader.classList.add("minus");
      generalRulesHeader.classList.remove("plus");
      generalRulesList.style.display = "block";
    } else {
      generalRulesHeader.classList.add("plus");
      generalRulesHeader.classList.remove("minus");
      generalRulesList.style.display = "none";
    }
  });

  /*
  Event listeners for map section components
  */

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
    country.addEventListener("click", (event) => {
      toggleCard(event.target, true);
    });
  }

  changeContinent(selectedContinent);
  showSlides(slideIndex);
};

window.onresize = () => {
  showCountry = false;

  const testimonial = document.getElementsByClassName("testimonial-wrapper");
  for (t of testimonial) {
    t.style.display = "none";
  }
  showSlides(slideIndex);
};

changeContinent = (newContinent) => {
  //reset fill & display of previous continent
  document.getElementById(selectedContinent).style.fill = "inherit";
  document.getElementById(`${selectedContinent}-card`).style.display = "none";

  selectedContinent = newContinent;
  document.getElementById(selectedContinent).style.fill = "white";
  document.getElementById(`${selectedContinent}-card`).style.display = "flex";
};

/*
  elem --> triggering HTML element, the id of which decides which LC-card to display/hide   
  showCard --> boolean that indicates whether to display/hide the respective LC-card
*/
toggleCard = (elem, showCard) => {
  if (showCard) {
    // If no information for that country exists, return
    if (!document.getElementById(`${elem.id}-card`)) return;
    document.getElementById(`${elem.id}-card`).style.display = "block";
    document.getElementById(`${selectedContinent}-country-list`).style.display =
      "none";
  } else {
    document.getElementById(elem.parentNode.id).style.display = "none";
    document.getElementById(`${selectedContinent}-country-list`).style.display =
      "grid";
  }
};

// Testimonial Carousel --------------->
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
