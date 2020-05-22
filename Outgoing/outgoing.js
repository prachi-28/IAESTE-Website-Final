let slideIndex = 1;
let selectedContinent = "asia";

let showCountry = false;
let list = [];

window.onload = function () {
  const continents = document.getElementsByClassName("land");
  const countries = document.getElementsByClassName("country");

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
};

window.onresize = () => {
  showCountry = false;
  for (l of list) {
    l.style.display = "none";
  }
};

changeContinent = (newContinent) => {
  //reset fill & display of previous continent
  document.getElementById(selectedContinent).style.fill = "inherit";
  document.getElementById(`${selectedContinent}-card`).style.display = "none";

  selectedContinent = newContinent;
  document.getElementById(selectedContinent).style.fill = "white";
  document.getElementById(`${selectedContinent}-card`).style.display = "grid";
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
