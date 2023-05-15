function latitudLongitud(posicion) {
  const latitud = posicion.coords.latitude;
  const longitud = posicion.coords.longitude;
  const appiKey = "061a4498b7aa87b95991921a3203b048";
  const unidadMedida = "metric";
  const comunaHtml = document.getElementById("comuna");
  const tiempo = document.querySelector(".tiempo");

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitud}&lon=${longitud}&appid=${appiKey}&units=${unidadMedida}`
  )
    .then((response) => response.json())
    .then((data) => {
      const comuna = data.name;
      comunaHtml.innerHTML += comuna;
      const iconoTiempo = document.createElement("img");
      console.log(tiempo);
      const iconoTiempoUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
      iconoTiempo.src = iconoTiempoUrl;
      tiempo.appendChild(iconoTiempo);
      comunaHtml.innerHTML += " " + Math.round(data.main.temp) + "°C";
    });
}

navigator.geolocation.getCurrentPosition(latitudLongitud);
