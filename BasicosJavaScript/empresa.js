
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

function clasificar(){
     for( let x in personitas){
        if( personitas[x].edad>=empresa1.edadtope ){
            document.write(`<br>${personitas[x].nombre} no es aptx para el trabajo <br>`);
        }else if (personitas[x].edad<empresa1.edadtope ){
            document.write(`<br>${personitas[x].nombre} es aptx para el trabajo <br>`);
        }
    }
}
   
console.log((personitas));
registrar();
clasificar();







