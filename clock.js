function updateTime() {
  // New York
  let newYorkElement = document.querySelector("#new-york");
  let newYorkTimeElement = newYorkElement.querySelector(".time");
  let newYorkDateElement = newYorkElement.querySelector(".date");
  let newYorkTime = moment().tz("America/New_York");

  newYorkDateElement.innerHTML = newYorkTime.format("MMMM Do YYYY");
  newYorkTimeElement.innerHTML = newYorkTime.format(
    "hh:mm:ss [<small>]A[</small>]"
  );
  // Auckland
  let aucklandElement = document.querySelector("#auckland");
  let aucklandTimeElement = aucklandElement.querySelector(".time");
  let aucklandDateElement = aucklandElement.querySelector(".date");
  let aucklandTime = moment().tz("Pacific/Auckland");

  aucklandDateElement.innerHTML = aucklandTime.format("MMMM Do YYYY");
  aucklandTimeElement.innerHTML = aucklandTime.format(
    "hh:mm:ss [<small>]A[</small>]"
  );

  // // London
  let londonElement = document.querySelector("#london");
  let londonTimeElement = londonElement.querySelector(".time");
  let londonDateElement = londonElement.querySelector(".date");
  let londonTime = moment().tz("Europe/London");

  londonDateElement.innerHTML = londonTime.format("MMMM Do YYYY");
  londonTimeElement.innerHTML = londonTime.format(
    "hh:mm:ss [<small>]A[</small>]"
  );
}

updateTime();
setInterval(updateTime, 1000);
