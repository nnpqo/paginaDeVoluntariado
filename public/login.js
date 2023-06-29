function login() {
    const codigoVoluntario = document.getElementById("codigo").value;
    
  
    const formData = {
      codigoVoluntario
    };
  
    fetch(`/getUsuarioPorCodigo/${codigoVoluntario}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
      //body: JSON.stringify(formData)
    })
      .then(response => response.text())
      .then(message => {
       // alert(message);
        window.location.href = "/login/home";
        // Realizar acciones adicionales después de iniciar sesión exitosamente
      })
      .catch(error => {
        console.error("Error al iniciar sesión:", error);
        alert("Error al iniciar sesión");
      });}