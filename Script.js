function miFuncion() {
    // Desencriptar: convierte códigos ASCII a texto
    let codigos = document.getElementById("e").value;
    let partes = codigos.split(",");
    let resultado = "";
    for (let i = 0; i < partes.length; i++) {
        let codigo = parseInt(partes[i].trim());
        if (!isNaN(codigo)) {
            resultado += String.fromCharCode(codigo);
        }
    }
    document.getElementById("s").innerHTML = "Su palabra es: " + resultado;
}

function miFuncion2() {
    // Encriptar: convierte texto a códigos ASCII y muestra letras separadas
    let vc = 0;
  let mensaje = document.getElementById("a").value;
  let respuesta = "";
  let salida = ""
  let caracter = "";
  let numero = 0;
  for (vc = 0; vc < mensaje.length; vc++) {
      
    respuesta = respuesta + "," + mensaje[vc].charCodeAt(0);
    numero = mensaje[vc].charCodeAt(0) + 10;
    caracter = String.fromCharCode(numero);
    salida = salida + caracter;
  }

  document.getElementById("b").innerHTML = salida;
}