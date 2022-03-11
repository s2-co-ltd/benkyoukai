const weatherApiKey = "";
const deeplApiKey = "";

function getLocation(callback) {
  navigator.geolocation.getCurrentPosition(function (position) {
    const { latitude, longitude } = position.coords;
    callback({ latitude, longitude });
  });
}

function getWeather(latitude, longitude, callback) {
  $.ajax({
    url: `https://api.openweathermap.org/data/2.5/weather?APPID=${weatherApiKey}&lat=${latitude}&lon=${longitude}`,
    type: "GET",
    dataType: "json",
    success: function (data) {
      const place = data.name;
      const temperature = Math.round(data.main.temp - 273.15);
      callback({ place, temperature });
    },
  });
}

function getComment(temperature, callback) {
  $.ajax({
    url: `https://pool-sharp-paint.glitch.me/temp/${temperature}`,
    type: "GET",
    dataType: "json",
    success: function (data) {
      const description = data.reference;
      callback(description);
    },
  });
}

function translate(phrase, callback) {
  $.ajax({
    url: `https://api-free.deepl.com/v2/translate?auth_key=${deeplApiKey}`,
    type: "POST",
    dataType: "json",
    data: {
      target_lang: "JA",
      text: phrase,
    },
    success: function (data) {
      callback(data.translations[0].text);
    },
  });
}

function render() {
  const $main = $("#main");
  const $loading = $("#loading");
  const $description = $("#description");
  const $location = $("#location");
  const $temperature = $("#temperature");

  $main.hide();
  $loading.show();

  getLocation(function ({ latitude, longitude }) {
    getWeather(latitude, longitude, function ({ place, temperature }) {
      getComment(temperature, function (description) {
        translate(place, function (placeTranslated) {
          translate(description, function (descriptionTranslated) {
            $description.text(descriptionTranslated);
            $location.text(placeTranslated);
            $temperature.text(temperature + "°C");

            $main.css({ display: "flex" });
            $loading.css({ display: "none" });
          });
        });
      });
    });
  });
}

$(document).ready(function () {
  render();

  $("#main").on("click", function () {
    render();
  });
});
