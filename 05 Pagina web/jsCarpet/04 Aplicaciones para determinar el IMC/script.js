function Calcular() {

    const pesoKG = parseFloat(document.getElementById('PesoKG').value);
    const estaturaM = parseFloat(document.getElementById('Estatura').value);
    let imc;

    if (isNaN(pesoKG) || isNaN(estaturaM) || pesoKG<0 || estaturaM<0) {
        document.getElementById('result').textContent = "Por favor, ingresa digitos válidos.";
        return;
    }
    else{
        imc=pesoKG/(estaturaM**2);
        if(imc<18.5){
            document.getElementById('result').textContent = "Peso Bajo :(";
            imcImage.src = 'img/peso_bajo.png';
        }
        else if(imc>=18.5 && imc<=24.9){
            document.getElementById('result').textContent = "Peso Normal, SIGUE ASI :)";
            imcImage.src = 'img/peso_normal.png';
        }
        else if(imc>=30 && imc<=34.9){
            document.getElementById('result').textContent = "Obesidad tipo 1, Bajale un poco jefe :/";
            imcImage.src = 'img/obesidad1.png';
        }
        else if(imc>=35 && imc<=39.9){
            document.getElementById('result').textContent = "Obesidad tipo 2, BAJALE :'/";
            imcImage.src = 'img/obesidad2.png';
        }else if(imc>=40){
            document.getElementById('result').textContent = "Obesidad tipo 3... :((((((((";
            imcImage.src = 'img/obesidad3.png';
        }
    }
    
}