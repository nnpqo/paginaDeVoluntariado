function guardar() {
  const codigoVoluntario = document.getElementById("codigo").value;
  const nombre = document.getElementById("nombre").value;
  const contrasenia= document.getElementById("contrasenia").value;
  
  const formData = {
    codigoVoluntario,
    nombre,
    contrasenia
  };

  fetch("/register/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(formData)
  })
    .then(response => response.text())
    .then(message => {
      alert(message);
      window.location.href = "/register";
    })
    .catch(error => {
      console.error("Error al registrar:", error);
      alert("Error al registrar");
    });
}

    function cancelar(){}

  