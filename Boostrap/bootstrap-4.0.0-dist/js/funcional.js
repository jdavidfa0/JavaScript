// varibales en los selectores
const formulario = document.getElementById('agregar-gasto');
const listgasto = document.querySelector('#gastos ul');

// crear los eventos
eventListeners();

function eventListeners(){
    document.addEventListener('DOMContentLoaded', preguntar);
    formulario.addEventListener('submit', agregar);
    listgasto.addEventListener('click', eliminar);

}
// clases
class presupuestofin{
    constructor(presupuesto){
        this.presupuesto= Number(presupuesto);
        this.restante =Number(presupuesto);
        this.gastos =[];
    }
     nuevogasto(gasto){
        this.gastos = [...this.gastos,gasto];
        this.cacular();
     }
     cacular(){
        const gastado =this.gastos.reduce((total,gasto)=>total+gasto.cantidad,0);
        this.restante =this.presupuesto- gastado;
    }
    eliminar(id){
        this.gastos = this.gastos.filter( gasto=> gasto.id.tostring() !==1);
        this.cacular();
    }
}

class UI
{
    insertar(cantidad){
        document.querySelector('#total').textContent = cantidad.presupuesto;
        document.querySelector('#restante').textContent = cantidad.restante;

    }
   


}
const ui = new UI();
let Presupuesto;

function preguntar(){
    const pregunta= prompt('¿Cuál es tu presupuesto?');

    if ( pregunta =='' || pregunta === null ||  isNaN(pregunta) || pregunta<=0){
        window.location.reload();
    }

    Presupuesto = new presupuestofin(pregunta);
    ui.insertar(Presupuesto);

}

function agregar(){

}
function eliminar(){
    
}