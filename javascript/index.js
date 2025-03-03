function updateTime() {
  //Brantford
  let brantfordElement = document.querySelector("#brantford");
  let brantfordDateElement = brantfordElement.querySelector(".date");
  let brantfordTimeElement = brantfordElement.querySelector(".time");
  let brantfordTime = moment().tz("America/Toronto");
  brantfordDateElement.innerHTML = brantfordTime.format("dddd, MMMM Do YYYY");
  brantfordTimeElement.innerHTML = brantfordTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
  //Atlanta
  let atlantaElement = document.querySelector("#atlanta");
  let atlantaDateElement = atlantaElement.querySelector(".date");
  let atlantaTimeElement = atlantaElement.querySelector(".time");
  let atlantaTime = moment().tz("America/New_York");
  atlantaDateElement.innerHTML = atlantaTime.format("dddd, MMMM Do YYYY");
  atlantaTimeElement.innerHTML = atlantaTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  //Seoul
  let seoulElement = document.querySelector("#seoul");
  let seoulDateElement = seoulElement.querySelector(".date");
  let seoulTimeElement = seoulElement.querySelector(".time");
  let seoulTime = moment().tz("Asia/seoul");
  seoulDateElement.innerHTML = seoulTime.format("dddd, MMMM Do YYYY");
  seoulTimeElement.innerHTML = seoulTime.format("h:mm:ss [<small>]A[</small>]");

  //Caracas
  let caracasElement = document.querySelector("#caracas");
  let caracasDateElement = caracasElement.querySelector(".date");
  let caracasTimeElement = caracasElement.querySelector(".time");
  let caracasTime = moment().tz("America/Caracas");
  caracasDateElement.innerHTML = caracasTime.format("dddd, MMMM Do YYYY");
  caracasTimeElement.innerHTML = caracasTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}
//changing city
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
          <div class="date">${cityTime.format("ddd, MMMM Do YYYY")}
          </div>
        </div>
        <div>
          <div class="time">${cityTime.format(
            "h:mm:ss [<small>]A[</small>]"
          )}</div>
        </div>
      </div>
      `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
