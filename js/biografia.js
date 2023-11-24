function toggleMenu() {
    var menu = document.querySelector('.menu');
    menu.style.display = (menu.style.display === 'block' || menu.style.display === '') ? 'none' : 'block';
}

function navigateTo(page) {
    if (page === 'index') {
        window.location.href = '../index.html';  //
    } else if (page === 'formulario') {
        window.location.href = 'formulario.html';  // 
    } else if (page === 'Galeria') {
        window.location.href = 'Galeria.html';  // 
    }
    
}
function cambiarColorFondo() {
    // Obtén el color actual del fondo del body
    var colorFondoBodyActual = getComputedStyle(document.body).backgroundColor;

    // Obtén el color actual del fondo del container
    var colorFondoContainerActual = getComputedStyle(document.querySelector('.container')).backgroundColor;

    // Obtén el color actual del texto en el div con la clase half
    var colorTextoHalfActual = getComputedStyle(document.getElementById('texto')).color;

    // Verifica si el fondo es negro y cámbialo a blanco, o viceversa
    if (colorFondoBodyActual === "rgb(0, 0, 0)" || colorFondoBodyActual === "black") {
        // Cambia el color de fondo del body a blanco
        document.body.style.backgroundColor = 'white';

        // Cambia el color de fondo del container a blanco
        document.querySelector('.container').style.backgroundColor = 'white';

        // Cambia el color del texto en el div con la clase half a negro
        document.getElementById('texto').style.color = 'black';
    } else {
        // Cambia el color de fondo del body a negro
        document.body.style.backgroundColor = 'black';

        // Cambia el color de fondo del container a negro
        document.querySelector('.container').style.backgroundColor = 'black';

        // Cambia el color del texto en el div con la clase half a blanco
        document.getElementById('texto').style.color = 'white';
    }
}

// Obtén una referencia al elemento de audio
var audioPlayer = document.getElementById('audioPlayer');

// Obtén una referencia al botón
var botonReproducirCancion = document.getElementById('musica');

// Función para reproducir o pausar la canción
function togglePlayPause() {
    if (audioPlayer.paused) {
        audioPlayer.play();
        // Cambia el texto del botón a "Pausar Canción" cuando se inicia la reproducción
        botonReproducirCancion.textContent = 'Pausar Canción';
    } else {
        audioPlayer.pause();
        // Cambia el texto del botón a "Reproducir Canción" cuando se pausa la reproducción
        botonReproducirCancion.textContent = 'Reproducir Canción';
    }
}

