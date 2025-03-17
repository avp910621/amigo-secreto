// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    // Obtener el valor del campo de texto
    let nombre = document.getElementById('amigo').value;

    // Verificar que el campo no esté vacío
    if (nombre.trim() !== '') {
        // Agregar el nombre al array de amigos
        amigos.push(nombre);

        // Actualizar la lista en el HTML
        actualizarLista();
        
        // Limpiar el campo de texto
        document.getElementById('amigo').value = '';
    } else {
        alert('Por favor, ingresa un nombre.');
    }
}

// Función para actualizar la lista de amigos en el HTML
function actualizarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    // Crear elementos de lista para cada amigo
    amigos.forEach(function(amigo) {
        let li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}


function sortearAmigo() {
    // Verificar que el array no esté vacío
    let cantidadAmigos = amigos.length;
    if (cantidadAmigos === 0) {
        return alert('no hay amigos en la lista');
    }
    else {
        let indiceAmigo = Math.floor(Math.random() * cantidadAmigos);
        let resultadoHTML = document.querySelector("#resultado");
        resultadoHTML.innerHTML = amigos[indiceAmigo];
      }

}

   
