function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
  return;
}

function copiar() {
  let textoEncriptado = document
    .querySelector(".mensajeEncriptado")
    .textContent.trim();
  copiarTextoAlPortapapeles(textoEncriptado);
}

function copiarTextoAlPortapapeles(texto) {
  // Crear un elemento textarea temporal
  const textarea = document.createElement("textarea");
  // Asignar el texto que quieres copiar
  textarea.value = texto;
  // Asegurarse de que no sea visible
  textarea.style.position = "fixed";
  textarea.style.opacity = 0;
  // Agregar el elemento al DOM
  document.body.appendChild(textarea);
  // Seleccionar el texto dentro del textarea
  textarea.select();
  // Copiar el texto al portapapeles
  document.execCommand("copy");
  // Eliminar el textarea del DOM
  document.body.removeChild(textarea);
}

function cifrarTexto() {
  const textoOriginal = document
    .getElementById("textoOriginal")
    .value.toLowerCase();
  let textoCifrado = "";

  // Expresión regular para caracteres permitidos: letras, espacios y acentos
  const allowedCharsRegex = /^[a-z\s]+$/;

  // Si el texto está vacío
  if (textoOriginal.trim().length === 0) {
    asignarTextoElemento(".mensajeResultado", "Ningún mensaje fue encontrado");
    asignarTextoElemento(
      ".mensajeResultado2",
      "Ingresa el texto que desees encriptar o desencriptar"
    );
    asignarTextoElemento(".mensajeEncriptado", "");
    document.getElementById("muneco").removeAttribute("hidden");
    document.getElementById("copiarBoton").setAttribute("hidden", "true");
  } else if (!allowedCharsRegex.test(textoOriginal)) {
    // Si el texto contiene caracteres no permitidos
    alert("El texto contiene caracteres no permitidos.");
    asignarTextoElemento(".mensajeResultado", "");
    asignarTextoElemento(".mensajeResultado2", "");
    asignarTextoElemento(".mensajeEncriptado", "");
    document.getElementById("muneco").removeAttribute("hidden");
    document.getElementById("copiarBoton").setAttribute("hidden", "true");
  } else {
    // Cifrado del texto según la lógica establecida
    for (let i = 0; i < textoOriginal.length; i++) {
      switch (textoOriginal[i]) {
        case "e":
          textoCifrado += "enter";
          break;
        case "i":
          textoCifrado += "imes";
          break;
        case "a":
          textoCifrado += "ai";
          break;
        case "o":
          textoCifrado += "ober";
          break;
        case "u":
          textoCifrado += "ufat";
          break;
        default:
          textoCifrado += textoOriginal[i];
      }
    }

    // Mostrar resultado cifrado
    console.log(textoCifrado.trim()); // Muestra resultado en consola
    asignarTextoElemento(".mensajeResultado", "");
    asignarTextoElemento(".mensajeResultado2", "");
    asignarTextoElemento(".mensajeEncriptado", textoCifrado.trim());
    document.getElementById("muneco").setAttribute("hidden", "true");
    document.getElementById("copiarBoton").removeAttribute("hidden");
  }
}

function asignarTextoElemento(selector, texto) {
  document.querySelector(selector).textContent = texto;
}

function desencriptar() {
  //funcion ejecutada al apretar el botón desencriptar

  const textoCifrado = document
    .getElementById("textoOriginal")
    .value.toLowerCase();
  let textoDescifrado = ""; // variable que almacenará el texto descifrado

  if (textoCifrado.length < 1) {
    // evalúa si la caja de texto está vacía o no

    asignarTextoElemento(".mensajeResultado", "Ningún mensaje fue encontrado");
    asignarTextoElemento(
      ".mensajeResultado2",
      "Ingresa el texto que desees encriptar o desencriptar"
    );
    asignarTextoElemento(".mensajeEncriptado", "");
    document.getElementById("muneco").removeAttribute("hidden");
    document.getElementById("copiarBoton").setAttribute("hidden", "true");
  } else {
    let i = 0;
    while (i < textoCifrado.length) {
      // Buscar palabras cifradas de manera exacta
      if (textoCifrado.substr(i, 5) === "enter") {
        textoDescifrado += "e";
        i += 5; // Avanzar 5 caracteres (longitud de 'enter')
      } else if (textoCifrado.substr(i, 4) === "imes") {
        textoDescifrado += "i";
        i += 4; // Avanzar 4 caracteres (longitud de 'imes')
      } else if (textoCifrado.substr(i, 2) === "ai") {
        textoDescifrado += "a";
        i += 2; // Avanzar 2 caracteres (longitud de 'ai')
      } else if (textoCifrado.substr(i, 4) === "ober") {
        textoDescifrado += "o";
        i += 4; // Avanzar 4 caracteres (longitud de 'ober')
      } else if (textoCifrado.substr(i, 4) === "ufat") {
        textoDescifrado += "u";
        i += 4; // Avanzar 4 caracteres (longitud de 'ufat')
      } else {
        // Si no coincide con ninguna palabra cifrada, añadir el carácter original
        textoDescifrado += textoCifrado[i];
        i++;
      }
    }

    console.log(textoDescifrado.trim()); // Muestra el resultado en consola
    asignarTextoElemento(".mensajeResultado", "");
    asignarTextoElemento(".mensajeResultado2", "");
    asignarTextoElemento(".mensajeEncriptado", textoDescifrado.trim());
    document.getElementById("muneco").setAttribute("hidden", "true");
    document.getElementById("copiarBoton").removeAttribute("hidden");
  }
}
