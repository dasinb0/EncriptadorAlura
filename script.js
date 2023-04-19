// Variables para los elementos HTML
const textoInput = document.getElementById('texto');
const accionInput = document.getElementById('accion');
const resultadoTextarea = document.getElementById('resultado');
const procesarButton = document.getElementById('procesar');
const copiarButton = document.getElementById('copiar');

// Función para encriptar el texto
function encriptar(texto) {
  let resultado = '';
  for (let i = 0; i < texto.length; i++) {
    switch (texto[i]) {
      case 'e':
        resultado += 'enter';
        break;
      case 'i':
        resultado += 'imes';
        break;
      case 'a':
        resultado += 'ai';
        break;
      case 'o':
        resultado += 'ober';
        break;
      case 'u':
        resultado += 'ufat';
        break;
      default:
        resultado += texto[i];
        break;
    }
  }
  return resultado;
}

// Función para desencriptar el texto
function desencriptar(texto) {
  let resultado = '';
  for (let i = 0; i < texto.length; i++) {
    if (texto[i] === 'e' && texto[i + 1] === 'n' && texto[i + 2] === 't' && texto[i + 3] === 'e' && texto[i + 4] === 'r') {
      resultado += 'e';
      i += 4;
    } else if (texto[i] === 'i' && texto[i + 1] === 'm' && texto[i + 2] === 'e' && texto[i + 3] === 's') {
      resultado += 'i';
      i += 3;
    } else if (texto[i] === 'a' && texto[i + 1] === 'i') {
      resultado += 'a';
      i += 1;
    } else if (texto[i] === 'o' && texto[i + 1] === 'b' && texto[i + 2] === 'e' && texto[i + 3] === 'r') {
      resultado += 'o';
      i += 3;
    } else if (texto[i] === 'u' && texto[i + 1] === 'f' && texto[i + 2] === 'a' && texto[i + 3] === 't') {
      resultado += 'u';
      i += 3;
    } else {
      resultado += texto[i];
    }
  }
  return resultado;
}

// Función para copiar el resultado al portapapeles
function copiarResultado() {
  resultadoTextarea.select();
  document.execCommand('copy');
}

// Manejador de evento para procesar el texto
function procesarTexto() {
  const texto = textoInput.value.toLowerCase();
  const accion = accionInput.value;
  let resultado;

  if (accion === 'encriptar') {
    resultado = encriptar(texto);
  } else {
    resultado = desencriptar(texto);
  }

  resultadoTextarea.value = resultado;
}

// Agregar manejadores de eventos a los elementos HTML
procesarButton.addEventListener('click', procesarTexto);
copiarButton.addEventListener('click', copiarResultado);

procesarButton.addEventListener('click', function() {
  const texto = textoInput.value.toLowerCase();
  const accion = accionInput.value;
  let resultado;
  if (accion === 'encriptar') {
    resultado = encriptar(texto);
  } else {
    resultado = desencriptar(texto);
  }
  resultadoTextarea.value = resultado;
});

copiarButton.addEventListener('click', function() {
  resultadoTextarea.select();
  document.execCommand('copy');
  alert("Mensaje copiado");
});


