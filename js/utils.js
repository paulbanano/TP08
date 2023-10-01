
function calcularEdad(fechaNacimiento) {
    const fechaNac = new Date(fechaNacimiento);
    const hoy = new Date();
    const edad = hoy.getFullYear() - fechaNac.getFullYear();
    return edad;
}

function dobleArray(arr) {
    return arr.map(numero => numero * 2);
}

function mostrarResultado(mensaje) {
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.textContent = mensaje;
}
 function dibujar(altura) {
        for (let i = 0; i < altura; i++) {
          let piso = '';
          for (let j = 0; j < i + 1; j++) {
            piso = piso + '*';
        }
        console.log(piso)
    }

    let resultado = "";

    for (let i = 1; i <= altura; i++) {
        for (let j = 1; j <= altura - i; j++) {
            resultado += " ";
        }
        for (let k = 1; k <= 2 * i - 1; k++) {
            resultado += "*";
        }
        resultado += "\n";
    }
    console.log(resultado);
}
