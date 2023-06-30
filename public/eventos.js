function recuperarPublicaciones() {
  fetch("/eventos/getAllPublicaciones", {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(response => response.json())
    .then(publicaciones => {
      const publicacionTable = document.getElementById("publicacionTable");

      // Limpiar filas existentes en la tabla (excepto la cabecera)
      while (publicacionTable.rows.length > 1) {
        publicacionTable.deleteRow(1);
      }

      publicaciones.forEach(publicacion => {
        const row = publicacionTable.insertRow();
        row.insertCell().textContent = publicacion.id_publicacion;
        row.insertCell().textContent = publicacion.nombre_publicacion;
        row.insertCell().textContent = publicacion.descripcion;
        row.insertCell().textContent = publicacion.cantidad_voluntarios;
      
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Eliminar";
        deleteButton.addEventListener("click", () => {
          eliminarPublicacion(publicacion.tipo_publicacion);
        });
      
        const actionCell = row.insertCell();
        actionCell.appendChild(deleteButton);
      });
    })
    .catch(error => {
      console.error("Error al recuperar las publicaciones:", error);
      alert("Error al recuperar las publicaciones");
    });
}

function eliminarPublicacion(tipo_publicacion) {
  fetch(`/register/eliminarPublicacionPorTipo/${tipo_publicacion}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(response => response.text())
    .then(message => {
      alert(message);
      recuperarPublicaciones();
    })
    .catch(error => {
      console.error("Error al eliminar la publicacion:", error);
      alert("Error al eliminar la publicacion");
    });
}

// Llamar a la función para recuperar y mostrar las publicaciones al cargar la página
recuperarPublicaciones();
