
function validar(){

    var usuariovalido = usuario();
    var correovalido= correo();
    var contravalida = contra();
    var ciudadvalida = ciudad();
    var generovalido =genero();
    if (usuariovalido && correovalido && 
    contravalida && ciudadvalida && generovalido ){
        alert("Registro exitoso");
        return true;
     }else{
        alert("verificar campos");
        return false;
        
     }

 }
function pasatiempo(){
    var pasa = document.querySelector('input[type="checkbox"]').value;
    
    if(!pasa){
        alert =("Porfavor seleccione Pasatiempos");
        return false;
    }
    return true;

}

function genero(){
    var genero = document.querySelector('input[name="genero"]:checked').value;
    if(!genero ){
        alert("Seleccione un género");
        return false;
    }
    return true;

}
function ciudad(){
    var ciudad= document.getElementById('ciudad').value;
    if (ciudad=="seleccionar"){
        alert("Seleccione una ciudad");
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
    }else if (usuario.length <=2){
        alert("Minimos 3 Caracteres para el usuario ");
        return false;
    }else if ( usuario.length >12){
        alert("Máximo 12 caracteres para el usuario");
        return false;
    }
    return true;
    
}
function contra(){
    var expresion = /^(?=.*[0-9]).{4,8}$/;
    var contrasena = document.getElementById('contra').value;

    if (contrasena.trim()==""){
        alert("Porfavor ingresar contraseña");
        return false;
    }else if(!expresion.test(contrasena)){
        alert ("Porfavor ingrese una contraseña válida");
        return false;
    }
    return true;
}

function formatoemail(correo){
    var revisar = /\S+@\S+\.[a-zA-Z]{3}(?!\d)/;
    return revisar.test(correo)

}