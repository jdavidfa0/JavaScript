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
    imprimiralerta(mensaje,tipo){
        const divmensaje = document.createElement('div');
        divmensaje.classList.add('text-center', 'alert');

        if( tipo=='error'){
            divmensaje.classList.add('alert-danger');
    
        }else{
            divmensaje.classList.add('alert-sucess');
        } 

        divmensaje.textContent =mensaje;


        document.querySelector('.contenido-gastos').insertBefore(divmensaje, formulario);

        setTimeout(
            () =>{
                document.querySelector('.contenido-gastos .alert').remove();

            },3000);


    }
    agregarlista(gastos){
        this.limpiarHTML();
        gastos.forEach(gasto=>{ const {nombre,cantidad,id}=gasto; 
        const nuevogasto =document.createElement('li');
        nuevogasto.className ='list-group-item d-flex justify-content-between aling-items-center'
        nuevogasto.dataset.id=id;

        nuevogasto.innerHTML = `${nombre} 
        <span class="badge badge-primary badge-pill">$ ${cantidad} </span>`
        
        const btnborrar =document.createElement('button');
        btnborrar.classList.add('btn', 'btn-danger', 'borrar-gasto');
        nuevogasto.appendChild(btnborrar);

        listgasto.appendChild(nuevogasto);

    })

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

function agregar(e){
    e.preventDefault()

    const nombre = document.querySelector('#gasto').value;
    const cantidad = Number(document.querySelector ('#cantidad').value);

    if (nombre ==='' || cantidad === ''){
        ui.imprimiralerta('Ambos campos son obligatorios', 'error');
    }else{
        const gasto= {nombre,cantidad,id:Date.now()}

        Presupuesto.nuevogasto(gasto);

        ui.imprimiralerta('Correcto', 'correcto');

        const {gastos}= Presupuesto;
        ui.agregarlista(gastos)
    }



}
function eliminar(){
    
}