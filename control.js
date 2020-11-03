document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formulario").addEventListener('submit', validarFormulario); 
  });

function validarFormulario(evento) {
    evento.preventDefault();
    
    let usuario = document.getElementById('usuario').value;
    let arroba = false;
    
    for (let i = 0; i <= usuario.length; i++) {
        if(usuario[i] == "@"){
            arroba = true;
        }
    }
    console.log(arroba); // solo para test
    
    if (usuario.length == 0 || !arroba) {
      alert('No has escrito nada en el usuario o no inlcuiste la arroba');
      return;
    }
    
    var clave = document.getElementById('password').value;
    
    if (clave.length < 8) {
      alert('El password no es válido debe contener 8 caracteres minimo');
      return;
    }
    alert('FORMULARIO ENVIADO CORRECTAMENTE');
    this.submit();
}



 
