function publicar() {
  const nombrePublicacion = document.getElementById("nombrePublicacionInput").value;
  const descripcion = document.getElementById("descripcionInput").value;
  const tipoPublicacion = document.getElementById("tipoPublicacionInput").value;
  const cantidadVoluntarios = document.getElementById("cantidadVoluntariosInput").value;

  const formData = {
    nombrePublicacion,
    descripcion,
    tipoPublicacion,
    cantidadVoluntarios
  };

  fetch("/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(formData)
  })
    .then(response => response.text())
    .then(message => {
      alert(message)
      window.location.href = "/publicacion";
    })
    .catch(error => {
      console.error("Error al publicar:", error);
      alert("Error al publicar");
    });
}
