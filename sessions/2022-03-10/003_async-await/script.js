const weatherApiKey = "";
const deeplApiKey = "";

function getLocation() {
  return new Promise((resolve) => {
    navigator.geolocation.getCurrentPosition(function (position) {
      const { latitude, longitude } = position.coords;
      resolve({ latitude, longitude });
    });
  });
}

function getWeather(latitude, longitude) {
  return new Promise((resolve) => {
    $.ajax({
      url: `https://api.openweathermap.org/data/2.5/weather?APPID=${weatherApiKey}&lat=${latitude}&lon=${longitude}`,
      type: "GET",
      dataType: "json",
      success: function (data) {
        const place = data.name;
        const temperature = Math.round(data.main.temp - 273.15);
        resolve({ place, temperature });
      },
    });
  });
}

function getComment(temperature) {
  return new Promise((resolve) => {
    $.ajax({
      url: `https://pool-sharp-paint.glitch.me/temp/${temperature}`,
      type: "GET",
      dataType: "json",
      success: function (data) {
        const description = data.reference;
        resolve(description);
      },
    });
  });
}

function translate(phrase) {
  return new Promise((resolve) => {
    $.ajax({
      url: `https://api-free.deepl.com/v2/translate?auth_key=${deeplApiKey}`,
      type: "POST",
      dataType: "json",
      data: {
        target_lang: "JA",
        text: phrase,
      },
      success: function (data) {
        resolve(data.translations[0].text);
      }
    });
  });
}

async function render() {
  const $main = $("#main");
  const $loading = $("#loading");
  const $description = $("#description");
  const $location = $("#location");
  const $temperature = $("#temperature");

  $main.hide();
  $loading.show();

  const { latitude, longitude } = await getLocation();
  const { place, temperature } = await getWeather(latitude, longitude);
  const comment = await getComment(temperature);
  const translatedPlace = await translate(place);
  const translatedComment = await translate(comment);

  $description.text(translatedComment);
  $location.text(translatedPlace);
  $temperature.text(temperature + "°C");

  $main.css({ display: "flex" });
  $loading.css({ display: "none" });
}

$(document).ready(function () {
  render();

  $("#main").on("click", function () {
    render();
  });
});
