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
    let mensaje = document.getElementById("a").value;
    let respuesta = "";
    let letrasSeparadas = "";
    for (let vc = 0; vc < mensaje.length; vc++) {
        respuesta += mensaje.charCodeAt(vc);
        letrasSeparadas += mensaje[vc];
        if (vc < mensaje.length - 1) {
            respuesta += ",";
            letrasSeparadas += ",";
        }
    }
    document.getElementById("b").innerHTML = 
        "Su palabra codificada es: " + respuesta + "<br>" +
        "Letras separadas: " + letrasSeparadas;
}