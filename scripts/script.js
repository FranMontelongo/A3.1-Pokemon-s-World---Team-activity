let musica = document.getElementById("musica");
let boton = document.getElementById("botonMusica");

boton.addEventListener("click", function () {

    if (musica.paused) {
        musica.play();
        boton.textContent = "⏸ Música";
    } else {
        musica.pause();
        boton.textContent = "▶ Música";
    }

})

// Encuesta Pokémon
const form = document.querySelector('.form-encuesta');
const resultado = document.querySelector('.resultado');
const tipoElegido = document.getElementById('tipoElegido');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const seleccionado = document.querySelector('input[name="tipo"]:checked');

    if (seleccionado) {
        tipoElegido.textContent = seleccionado.value;
        resultado.style.display = 'block';
    }
});
