const weatherApiKey = "";
const deeplApiKey = "";

function render() {
  const $main = $("#main");
  const $loading = $("#loading");
  const $description = $("#description");
  const $location = $("#location");
  const $temperature = $("#temperature");

  $main.hide();
  $loading.show();

  navigator.geolocation.getCurrentPosition(function (position) {
    const { latitude, longitude } = position.coords;

    $.ajax({
      url: `https://api.openweathermap.org/data/2.5/weather?APPID=${weatherApiKey}&lat=${latitude}&lon=${longitude}`,
      type: "GET",
      dataType: "json",
      success: function (data) {
        const place = data.name;
        const temperature = Math.round(data.main.temp - 273.15);

        $.ajax({
          url: `https://pool-sharp-paint.glitch.me/temp/${temperature}`,
          type: "GET",
          dataType: "json",
          success: function (data) {
            const description = data.reference;

            $.ajax({
              url: `https://api-free.deepl.com/v2/translate?auth_key=${deeplApiKey}`,
              type: "POST",
              dataType: "json",
              data: {
                target_lang: "JA",
                text: place,
              },
              success: function (data) {
                const placeTranslated = data.translations[0].text;

                $.ajax({
                  url: `https://api-free.deepl.com/v2/translate?auth_key=${deeplApiKey}`,
                  type: "POST",
                  dataType: "json",
                  data: {
                    target_lang: "JA",
                    text: description,
                  },
                  success: function (data) {
                    const descriptionTranslated = data.translations[0].text;

                    $description.text(descriptionTranslated);
                    $location.text(placeTranslated);
                    $temperature.text(temperature + "°C");

                    $main.css({ display: "flex" });
                    $loading.css({ display: "none" });
                  },
                });
              },
            });
          },
        });
      },
    });
  });
}

$(document).ready(function () {
  render();

  $("#main").on("click", function () {
    render();
  });
});
