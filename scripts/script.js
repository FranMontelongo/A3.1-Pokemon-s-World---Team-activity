let musica = document.getElementById("musica");
let boton = document.getElementById("botonMusica");

if (boton && musica) {
    boton.addEventListener("click", function () {

        if (musica.paused) {
            musica.play();
            boton.textContent = "⏸ Música";
        } else {
            musica.pause();
            boton.textContent = "▶ Música";
        }

    });
}


// Encuesta Pokémon
const form = document.querySelector('.form-encuesta');
const resultado = document.querySelector('.resultado');
const tipoElegido = document.getElementById('tipoElegido');

if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const seleccionado = document.querySelector('input[name="tipo"]:checked');

        if (seleccionado) {
            tipoElegido.textContent = seleccionado.value;
            resultado.style.display = "block";
        }
    });
}

//Pausar musica con video sonando:
let video = document.querySelector("video");

if (video && musica) {

    video.addEventListener("play", function () {
        musica.pause();
        boton.textContent = "▶ Música";
    });

}