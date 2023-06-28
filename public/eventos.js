document.addEventListener("DOMContentLoaded", function() {
    fetch("/publicacion/eventos") 
      .then(response => response.json())
      .then(publicaciones => {
        const eventosContainer = document.getElementById("eventosContainer");
        eventosContainer.innerHTML = ""; 
  
        publicaciones.forEach(publicacion => {
          const eventoHTML = `
            <div class="evento">
              <h3>${publicacion.nombrePublicacion}</h3>
              <p>${publicacion.descripcion}</p>
              <p>Tipo: ${publicacion.tipoPublicacion}</p>
              <p>Cantidad de voluntarios: ${publicacion.cantidadVoluntarios}</p>
            </div>
          `;
  
          eventosContainer.innerHTML += eventoHTML; 
        });
      })
      .catch(error => {
        console.error("Error al obtener los eventos:", error);
      });
  });
  