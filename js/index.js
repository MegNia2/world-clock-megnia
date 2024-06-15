function updateTime() {
  let losAngeles = document.querySelector("#los-angeles");
  let losAngelesDate = losAngeles.querySelector(".date");
  let losAngelesTime = losAngeles.querySelector(".time");
  let losAngelesCurrentTime = moment().tz("America/Los_Angeles");

  losAngelesDate.innerHTML = losAngelesCurrentTime.format("MMMM Do YYYY");
  losAngelesTime.innerHTML = losAngelesCurrentTime.format(
    `hh:mm:ss [<small>]A[</small>]`
  );

  let sydney = document.querySelector("#sydney");
  let sydneyDate = sydney.querySelector(".date");
  let sydneyTime = sydney.querySelector(".time");
  let sydneyCurrentTime = moment().tz("Australia/Sydney");

  sydneyDate.innerHTML = sydneyCurrentTime.format("MMMM Do YYYY");
  sydneyTime.innerHTML = sydneyCurrentTime.format(
    `hh:mm:ss [<small>]A[</small>]`
  );

  let tokyo = document.querySelector("#tokyo");
  let tokyoDate = tokyo.querySelector(".date");
  let tokyoTime = tokyo.querySelector(".time");
  let tokyoCurrentTime = moment().tz("Asia/Tokyo");

  tokyoDate.innerHTML = tokyoCurrentTime.format("MMMM Do YYYY");
  tokyoTime.innerHTML = tokyoCurrentTime.format(
    `hh:mm:ss [<small>]A[</small>]`
  );

  let paris = document.querySelector("#paris");
  let parisDate = paris.querySelector(".date");
  let parisTime = paris.querySelector(".time");
  let parisCurrentTime = moment().tz("Europe/Paris");

  parisDate.innerHTML = parisCurrentTime.format("MMMM Do YYYY");
  parisTime.innerHTML = parisCurrentTime.format(
    `hh:mm:ss [<small>]A[</small>]`
  );
}

updateTime();
setInterval(updateTime, 100);
