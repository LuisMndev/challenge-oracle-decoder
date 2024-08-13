// Encripta el texto
function encriptar() {
    const inputText = document.getElementById('inputText').value.toLowerCase();
    const encriptado = inputText
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
    mostrarResultado(encriptado);
}

// Desencripta el texto
function desencriptar() {
    const inputText = document.getElementById('inputText').value.toLowerCase();
    const desencriptado = inputText
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    mostrarResultado(desencriptado);
}

// Copiar texto
function copiarTexto() {
    const outputText = document.getElementById('outputText').textContent;
    navigator.clipboard.writeText(outputText)
        .then(() => {
            alert('Texto copiado al portapapeles');
        })
        .catch(err => {
            console.error('Error al copiar el texto: ', err);
        });
}

function mostrarResultado(resultado) {
    const outputDiv = document.getElementById('outputText');
    outputDiv.textContent = resultado || '';
}

document.addEventListener('DOMContentLoaded', () => {
    const cuadroTexto = document.getElementById('inputText');
    const mensajeError = document.getElementById('mensajeError');

    cuadroTexto.addEventListener('input', (event) => {
        const valor = event.target.value;
        
        if (!/^[a-z]*$/.test(valor)) {
            // Mostrar alerta
            alert('Solo se permiten letras minúsculas.');

            // Limpiar el campo de texto
            event.target.value = ''; // Borra todo el texto

            // Limpiar el mensaje de error
            mensajeError.textContent = '';
        } else {
            // Limpiar el mensaje de error si todo está bien
            mensajeError.textContent = '';
        }
    });
});

