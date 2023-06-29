function guardar() {
  const codigoVoluntario = document.getElementById("codigo").value;
  const nombre = document.getElementById("nombre").value;
  const contrasenia= document.getElementById("password").value;
  
  const formData = {
    codigoVoluntario,
    nombre,
    contrasenia
  };

  fetch(`/getUsuarioPorCodigo/${codigoVoluntario}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    //body: JSON.stringify(formData)
  })
    .then(response => response.text())
    .then(message => {
     // alert(message);
      window.location.href = "/register/home";
      // Realizar acciones adicionales después de iniciar sesión exitosamente
    })
    .catch(error => {
      console.error("Error al regustrar sesión:", error);
      alert("Error al registrar sesión");
    });}

  