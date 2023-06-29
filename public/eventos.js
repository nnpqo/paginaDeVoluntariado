document.addEventListener("DOMContentLoaded", function() {
  fetch("/publicacion/eventos")
    .then(response => response.json())
    .then(publicaciones => {
      const eventosContainer = document.getElementById("eventosContainer");
      eventosContainer.innerHTML = "";

      publicaciones.forEach(publicacion => {
        const eventoHTML = `
          <div class="eventosBox">
            <h3>${publicacion.nombre_publicacion}</h3>
            <p>Cantidad de personal requerido: ${publicacion.cantidad_voluntarios}</p>
          </div>
        `;

        eventosContainer.innerHTML += eventoHTML;
      });
    })
    .catch(error => {
      console.error("Error al obtener los eventos:", error);
    });
});
