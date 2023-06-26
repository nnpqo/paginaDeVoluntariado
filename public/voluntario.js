function guardar() {
    const codVoluntario = document.getElementById("codVoluntarioInput").value;
    const tipoUsuario = document.getElementById("tipoUsuarioInput").value;
    const nombreU = document.getElementById("nombreUInput").value;
    const contraseniaU = document.getElementById("contraseniaUInput").value;
  
    const formData = {
      codVoluntario,
      tipoUsuario,
      nombreU,
      contraseniaU
    };
  
    fetch("/usuario/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
      .then(response => response.text())
      .then(message => {
        alert(message);
      })
      .catch(error => {
        console.error("Error al registrar usuario:", error);
        alert("Error al registrar usuario");
      });
  }
  