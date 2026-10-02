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

});
