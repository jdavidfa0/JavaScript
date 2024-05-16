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
        this.gastos = this.gastos.filter( gasto=> gasto.id.toString() !==id);
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
        gastos.forEach(gasto=>{
        const {nombre,cantidad,id}=gasto;

        const nuevogasto =document.createElement('li');

        nuevogasto.className ='list-group-item d-flex justify-content-between aling-items-center';

        nuevogasto.dataset.id=id;

        nuevogasto.innerHTML = `${nombre} 
        <span class="badge badge-primary badge-pill">$ ${cantidad} </span>`
        
        const btnborrar =document.createElement('button');
        btnborrar.textContent= 'Eliminar'
        btnborrar.classList.add('btn', 'btn-danger', 'borrar-gasto');
        nuevogasto.appendChild(btnborrar);

        listgasto.appendChild(nuevogasto);

    });

    }
    actualizar_restante(restante){
        document.querySelector('span#restante').textContent = restante;


    }
    comprobarpresupuesto(presupuestoobj){
        const { presupuesto,restante} = presupuestoobj;
        const restanteDiv = document.querySelector('.restante');

        if ((presupuesto/4)>restante ){
            restanteDiv.classList.remove ('alert-sucess', 'alert-warning');

        }else if ((presupuesto /2 )> restante){
            restanteDiv.classList.remove ('alert-sucess');
            restanteDiv.classList.add ('alert-warning');

        }else{
            restanteDiv.classList.remove('alert-danger', 'alert-warning');
            restanteDiv.classList.add('alert-sucess');
        }

        if(restante<=0){
            ui.imprimiralerta('El presupuesto se ha agotado', 'error');
            formulario.querySelector('button[type="submit"]').disabled = true;
        }

    }
    limpiarHTML(){
        while(listgasto.firstChild){
            listgasto.removeChild(listgasto.firstChild);
        }
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
        const gasto= {nombre,cantidad,id: Date.now()}

        Presupuesto.nuevogasto(gasto);

        ui.imprimiralerta('Correcto', 'correcto');

        const {gastos}= Presupuesto;
        ui.agregarlista(gastos)

        ui.comprobarpresupuesto(Presupuesto);

        const { restante } =Presupuesto;

        ui.actualizar_restante(restante)

        formulario.reset();

    }



}

function eliminar(e){
    if(e.target.classList.contains('borrar-gasto')){
        const{id} = e.target.parentElement.dataset;
        Presupuesto.eliminar(id);

        ui.comprobarpresupuesto(Presupuesto);

        const {restante} = Presupuesto;
        ui.actualizar_restante(restante);

        e.target.parentElement.remove();


    }
    
}