import "./css/styles.css";
import Age from './src/Age.js';


function currentAgeInput(){
  let myEarthAge = document.getElementById("earthAgeInput").value;
  let myAge = new Age(myEarthAge);
  showSolarAge(myAge);
  return myAge;
}
// UI logic

window.addEventListener("load", () => {
  const solarAgeForm = document.getElementById("solarAge");
  const solarAgeSinceForm = document.getElementById("solarAgeSince");
  const solarAgeTilForm = document.getElementById("solarAgeTil");
  let myAge;
  let mySinceAge;
  let myTilAge;
  solarAgeForm.addEventListener("submit", (event) => {
    event.preventDefault();
    myAge = currentAgeInput();
  });
  solarAgeSinceForm.addEventListener("submit", (event) => {
    event.preventDefault();
    mySinceAge = sinceAgeSubmit();
  });
  solarAgeTilForm.addEventListener("submit", (event) => {
    event.preventDefault();
    myTilAge = tilAgeSubmit();
  });
});
