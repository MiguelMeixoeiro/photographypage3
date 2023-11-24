
document.addEventListener('DOMContentLoaded', function () {
    const obturador = document.getElementById('obturador');
    const mensajeEmergente = document.getElementById('mensajeEmergente');

    function mostrarMensaje() {
        mensajeEmergente.style.display = 'block';
    }

    function ocultarMensaje() {
        mensajeEmergente.style.display = 'none';
    }
    obturador.addEventListener('mouseover', mostrarMensaje);
    obturador.addEventListener('mouseout', ocultarMensaje);

});
