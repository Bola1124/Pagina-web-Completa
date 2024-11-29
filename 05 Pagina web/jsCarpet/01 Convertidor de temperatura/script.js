function Convertir() {

    const temp = parseFloat(document.getElementById('EntradaUser').value);
    const opcionGrados = document.getElementById('opcionGrados').value;
    let result;

    if (isNaN(temp)) {
        document.getElementById('result').textContent = "Por favor, ingresa una temperatura válida.";
        return;
    }

   
    if (opcionGrados === '1') {
        result = (temp * 9/5) + 32; // C a F
        document.getElementById('result').textContent = `${temp}°C son ${result.toFixed(2)}°F`;
    } else if (opcionGrados === '2') {
        result = (temp - 32) * 5/9; // F a C
        document.getElementById('result').textContent = `${temp}°F son ${result.toFixed(2)}°C`;
    }
    else if (opcionGrados === '3') {
        result = temp + 273.15; // C a K
        document.getElementById('result').textContent = `${temp}°C son ${result.toFixed(2)}°K`;
    }
    else if (opcionGrados === '4') {
        result = (temp +273.15) *9/5; // C a R
        document.getElementById('result').textContent = `${temp}°C son ${result.toFixed(2)}°R`;
    }
    else if (opcionGrados === '5') {
        result = (temp -32) *5/9 +273.15; // F a K
        document.getElementById('result').textContent = `${temp}°F son ${result.toFixed(2)}°K`;
    }
    else if (opcionGrados === '6') {
        result = (temp +459.67); // F a R
        document.getElementById('result').textContent = `${temp}°F son ${result.toFixed(2)}°R`;
    }
    else if (opcionGrados === '7') {
        result = (temp -273.15); // K a C
        document.getElementById('result').textContent = `${temp}°K son ${result.toFixed(2)}°C`;
    }
    else if (opcionGrados === '8') {
        result = (temp -273.15)*9/5+32; // K a F
        document.getElementById('result').textContent = `${temp}°K son ${result.toFixed(2)}°F`;
    }
    else if (opcionGrados === '9') {
        result = (temp *9/5); // K a R
        document.getElementById('result').textContent = `${temp}°K son ${result.toFixed(2)}°R`;
    }
    else if (opcionGrados === '10') {
        result = (temp -491.67)*5/9; // R a C
        document.getElementById('result').textContent = `${temp}°R son ${result.toFixed(2)}°C`;
    }
    else if (opcionGrados === '11') {
        result = (temp -459.67); // R a F
        document.getElementById('result').textContent = `${temp}°R son ${result.toFixed(2)}°F`;
    }
    else if (opcionGrados === '12') {
        result = (temp *5/9); // R a K
        document.getElementById('result').textContent = `${temp}°R son ${result.toFixed(2)}°K`;
    }
}