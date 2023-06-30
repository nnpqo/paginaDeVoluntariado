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

function recuperarUsuarios() {
  fetch("/register/getUsers", {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(response => response.json())
    .then(users => {
      // Maneja los usuarios recuperados como desees
      console.log(users);
    })
    .catch(error => {
      console.error("Error al recuperar los usuarios:", error);
      alert("Error al recuperar los usuarios");
    });
}

function recuperarUsuarios2() {
  fetch("/register/getUsers", {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(response => response.json())
    .then(users => {
      const userTable = document.getElementById("userTable");

      // Limpiar filas existentes en la tabla (excepto la cabecera)
      while (userTable.rows.length > 1) {
        userTable.deleteRow(1);
      }

      // Agregar filas de usuarios a la tabla
      users.forEach(user => {
        const row = userTable.insertRow();
        row.insertCell().textContent = user.codigo_voluntario;
        row.insertCell().textContent = user.nombre;
        row.insertCell().textContent = user.contrasenia;
      
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Eliminar";
        deleteButton.addEventListener("click", () => {
          eliminarUsuario(user.codigo_voluntario); // Llama a la función eliminarUsuario() pasando el código del usuario
        });
      
        const actionCell = row.insertCell();
        actionCell.appendChild(deleteButton);
      });
    })
    .catch(error => {
      console.error("Error al recuperar los usuarios:", error);
      alert("Error al recuperar los usuarios");
    });
}
function eliminarUsuario(codigo) {
  fetch(`/register/eliminarUsuarioPorCodigo/${codigo}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(response => response.text())
    .then(message => {
      alert(message);
      recuperarUsuarios(); // Actualiza la tabla después de eliminar el usuario
    })
    .catch(error => {
      console.error("Error al eliminar el usuario:", error);
      alert("Error al eliminar el usuario");
    });
}


function hola(){
  console.log("hola");
}

  