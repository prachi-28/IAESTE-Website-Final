let slideIndex = 1;
let selectedContinent = "asia";

window.onload = function () {
  const continents = document.getElementsByClassName("land");

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
  changeContinent(selectedContinent);
};

function changeContinent(newContinent) {
  //reset fill & display of previous continent
  document.getElementById(selectedContinent).style.fill = "inherit";
  document.getElementById(`${selectedContinent}-card`).style.display = "none";

  selectedContinent = newContinent;
  document.getElementById(selectedContinent).style.fill = "white";
  document.getElementById(`${selectedContinent}-card`).style.display = "block";
}
