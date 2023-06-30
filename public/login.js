function login() {
    const codigoVoluntario = document.getElementById("codigo").value;
    const password = document.getElementById("password").value;
  
    const formData = {
      codigoVoluntario

    };
  
    fetch(`/login/getUsuarioPorCodigo/${codigoVoluntario}/${password}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
    })
      .then(response => response.json())
      .then(message => {
        message.login?
          window.location.href = "/home":
          window.location.href = "/login";
      })
      .catch(error => {
        console.error("Error al iniciar sesión:", error);
        alert("Error al iniciar sesión");
      });}