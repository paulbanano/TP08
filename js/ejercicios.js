function ejercicio1() {
    const fechaNacimiento = prompt("Ingrese su fecha de nacimiento (YYYY-MM-DD):");
    const edad = calcularEdad(fechaNacimiento);
    mostrarResultado(`Tienes ${edad} años!`);
}
function ejercicio2() {
    const frutas = ["manzana", "banana", "uva", "pera", "naranja", "sandía", "kiwi", "cereza", "melón", "piña"];
    console.log("Lista de frutas: " + frutas.join(", "));
    const frutaUsuario = prompt("Ingrese una fruta:");
    const mensaje = frutas.includes(frutaUsuario.toLowerCase())
    ? `Sí, tenemos ${frutaUsuario}!`
    : `No, no tenemos ${frutaUsuario}!`;
    mostrarResultado(mensaje);
}
function ejercicio3() {
    const resultadoA = 10 == '10'; // true
    const resultadoB = 10 === '10'; // false
    const tipoDato = typeof 10.6; // 'number'
    const resultadoD = true == 1; // true
    mostrarResultado(`A. 10 == '10': ${resultadoA}
    B. 10 === '10': ${resultadoB}
    C. typeof 10.6: ${tipoDato}
    D. true == 1: ${resultadoD}`);
}
function ejercicio4() {
    const ciudad = {};
    ciudad.nombre = prompt("Ingrese el nombre de la ciudad:");
    ciudad.fechaFundacion = prompt("Ingrese la fecha de fundación de la ciudad:");
    ciudad.poblacion = parseInt(prompt("Ingrese la población de la ciudad:"));
    ciudad.extension = parseFloat(prompt("Ingrese la extensión de la ciudad en km²:"));
    let resultado = "Datos de la ciudad:\n";
    for (const key in ciudad) {
        resultado += `${key}: ${ciudad[key]}\n`;
    }
    mostrarResultado(resultado);
}
function ejercicio5() {
    const numeros = [1, 2, 3, 4, 5];
    const resultadoDoble = dobleArray(numeros);
    mostrarResultado(`Doble de elementos: ${resultadoDoble.join(', ')}`);
}
function ejercicio6() {
    const altura = parseInt(prompt("Ingrese la altura del triángulo:"));
    const resultado = dibujar(altura);

    mostrarResultado(resultado);
}
function ejercicio7() {
    const nombres = prompt("Ingrese una lista de nombres separados por coma:").split(',');
    const nombresConA = nombres.filter(nombre => nombre.trim().toLowerCase().startsWith('a'));
    mostrarResultado(`Nombres con 'A': ${nombresConA.join(', ')}`);
}
function ejercicio8() {
    const cadena = prompt("Ingrese una cadena de texto:");
    const palabraBuscar = prompt("Ingrese la palabra que desea reemplazar:");
    const palabraReemplazo = prompt("Ingrese la palabra de reemplazo:");
    const cadenaReemplazada = cadena.replace(new RegExp(palabraBuscar, 'g'), palabraReemplazo);
    mostrarResultado(`Cadena después de reemplazar: ${cadenaReemplazada}`);
}
function ejercicio9() {
    const texto = prompt("Ingrese una cadena de texto:");
    const numero = parseInt(prompt("Ingrese un número para cortar el texto:"));
    const textoCortado = texto.slice(0, numero);
    mostrarResultado(`Texto cortado: ${textoCortado}`);
}
function ejercicio10() {
    const elementos = prompt("Ingrese una lista de elementos separados por coma:").split(',');
    const resultado = elementos.join(' - ');
    mostrarResultado(`String con separador: ${resultado}`);
}
function ejercicio11() {
    const pedidos = prompt("Ingrese una lista de objetos pedidos junto con sus respectivos totales (nombre:total), separados por coma:");
    const pedidosArray = pedidos.split(', ');
    let recaudacionTotal = 0;
    for (const pedido of pedidosArray) {
        const [nombre, total] = pedido.split(':');
        recaudacionTotal += parseFloat(total);
    }
    mostrarResultado(`Recaudación total: $${recaudacionTotal.toFixed(2)}`);
}
