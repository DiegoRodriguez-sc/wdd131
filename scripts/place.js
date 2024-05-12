window.onload = function() {
    document.getElementById('currentyear').textContent = new Date().getFullYear();

    let modifiedDate = new Date(document.lastModified);
    let options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
    document.getElementById('lastModified').textContent = modifiedDate.toLocaleDateString('es-ES', options);

    const temperatureCelsius = 25;
    const windSpeedKmh = 10;


    const calculateWindChill = (temperature, windSpeed) =>{
        if (temperature <= 10 && windSpeed > 4.8) {
            return (13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16)).toFixed(1) + '°C';
        } else {
            return 'N/A';
        }
    }
    const windChillElement = document.querySelector('.weather table tr:nth-child(4) td:nth-child(2)');

    if (temperatureCelsius <= 10 && windSpeedKmh > 4.8) {
        const windChill = calculateWindChill(temperatureCelsius, windSpeedKmh);
        windChillElement.textContent = windChill;
    } else {
        windChillElement.textContent = 'N/A';
    }
};
