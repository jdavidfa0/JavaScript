
function registrar(){

}


class persona{
    constructor(nombre,edad){
        this.nombre= nombre;
        this.edad= edad;
    }

}
class empresa{
    constructor(nombrempre){
        this.nombrempre = nombrempre;
        this.edadtope=60;
    }
}

let empresa1 = new empresa("Coca-Cola")

var personitas=[]
var i =0;
do{
    
    var nombre1 = prompt("Ingrese su nombre: ");
    var edad1 = parseInt(prompt("Ingrese su edad: "));

    personitas.push(new persona(nombre1, edad1));

    i++;
} while(i<=2);


let edadtope=60;
let edadpersona= personitas[0].edad1;

if (edadtope>edadpersona){
document.write(`La persona ${personitas[0].nombre1} no calsifica`);
}else if (edadpersona>= edadtope){
document.write(`La persona ${personitas[0].nombre1} calsifica`);
}



console.log((personitas));
registrar();
clasificar();







