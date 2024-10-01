function updateTime() {
  // New York
  let newYorkElement = document.querySelector("#new-york");
  if (newYorkElement) {
    let newYorkTimeElement = newYorkElement.querySelector(".time");
    let newYorkDateElement = newYorkElement.querySelector(".date");
    let newYorkTime = moment().tz("America/New_York");

    newYorkDateElement.innerHTML = newYorkTime.format("MMMM Do YYYY");
    newYorkTimeElement.innerHTML = newYorkTime.format(
      "HH:mm:ss [<small>]A[</small>]"
    );
  }
  // Auckland
  let aucklandElement = document.querySelector("#auckland");
  if (aucklandElement) {
    let aucklandTimeElement = aucklandElement.querySelector(".time");
    let aucklandDateElement = aucklandElement.querySelector(".date");
    let aucklandTime = moment().tz("Pacific/Auckland");

    aucklandDateElement.innerHTML = aucklandTime.format("MMMM Do YYYY");
    aucklandTimeElement.innerHTML = aucklandTime.format(
      "HH:mm:ss [<small>]A[</small>]"
    );
  }
  // // London
  let londonElement = document.querySelector("#london");
  if (londonElement) {
    let londonTimeElement = londonElement.querySelector(".time");
    let londonDateElement = londonElement.querySelector(".date");
    let londonTime = moment().tz("Europe/London");

    londonDateElement.innerHTML = londonTime.format("MMMM Do YYYY");
    londonTimeElement.innerHTML = londonTime.format(
      "HH:mm:ss [<small>]A[</small>]"
    );
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }

  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
        <div class="city">
        <div>
          <h2>${cityName}</h2>
          <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
        </div>
        <div class="time">${cityTime.format(
          "HH:mm:ss"
        )} <small>${cityTime.format("A")}
        </small>
        </div>
      </div>
  <a href="/">All Cities</a>`;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelect = document.querySelector("#city");
citiesSelect.addEventListener("change", updateCity);
