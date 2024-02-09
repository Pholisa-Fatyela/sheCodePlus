function displayTemperature(response) {
  let temperatureElement = document.querySelector("#temperature");
  let temperature = response.data.temperature.current;
  let city = response.data.city;
  let country = response.data.country;
  let description = response.data.condition.description;

  temperatureElement.innerHTML = `The temperature in ${city}, ${country} is ${temperature} °F (${description})`;
}

let city = "Los Angeles";
let apiKey = "7c80o4t64e9f8f2d0553fb3f3a6ad5f9";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;

axios.get(apiUrl).then(displayTemperature);
