function validar(){
    var nombrevalido= nombre();
    var apellidovalido = apellido();
    var usuariovalido = usuario();
    var correovalido= correo();
    var contravalida = contra();
    if (nombrevalido && apellidovalido && usuariovalido && correovalido && 
    contravalida){
        alert("Registro exitoso");
        return true;
     }else{
        alert("verificar campos");
        return false;
        
     }

}
function nombre(){
    var nombre= document.getElementById('nombre').value;
    if(nombre.trim()==""){
        alert("Porfavor Ingrese Nombre");
        return false;
    }
    return true;

}
function apellido(){
    var apellido= document.getElementById('apellido').value;
    if(apellido.trim()==""){
        alert("Porfavor Ingrese Apellido");
        return false;
    }
    return true;

}
function correo(){
    var correo = document.getElementById('correo').value;
    if(correo.trim()==""){
        alert("Porfavor Ingrese Correo");
        return false;
    }else if (!formatoemail(correo)){
        alert("Porfavor Ingrese un Correo Válido");
        return false;
    }
    return true;


}

function usuario(){
    var usuario= document.getElementById('usuario').value;
    if(usuario.trim()==""){
        alert("Porfavor Ingrese Usuario");
        return false;
    }
    return true;
    
}
function contra(){
    var expresion = /^(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    var contrasena = document.getElementById('contra').value;
    // var connumero =/\d/.test(contrasena);
    // var conmayus =/[A-Z]/.test(contrasena);
    // var conminus =/[a-z]/.test (contrasena);
    if (contrasena.trim()==""){
        alert("Porfavor ingresar contraseña")
        return false;
    }else if(!expresion){
        alert ("Porfavor ingrese una contraseña válida ");
        return false;
    }
    return true;
    //     alert("La contraseña debe tener al menos 8 caracteres");
    //     return false;
    // }else if (!connumero){
    //    alert ("La contrseña debe tener al menos un numero");
    //     return false;
    // }else if(!conmayus){
    //     alert("La contraseña debe tener al menos una mayúscula");
    //     return false;

    // }else if (!conminus){
    //     alert("La contraseña debe tener al menos una minúscula")
    //     return false;
    // }
    // return true;

}

function formatoemail(correo){
    var revisar = /\S+@\S+\.\S+/;
    return revisar.test(correo)

}