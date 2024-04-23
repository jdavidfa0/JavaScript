// definir funciones sin argumentos sin retorno de agumentos
var peso;
var altura;

// definir contador y acumulador

var contesta=0;
var acumuesta=0;
var acumpeso=0;
function ingresardatos(){
    // variables globales
  
    peso= parseFloat(prompt('Ingrese el peso: '));
    altura= parseFloat(prompt('Ingrese altura:'));
    contesta++;
    acumuesta += altura;
    acumpeso +=peso;
}

// funcion sin argumento pero con retorno

function preguntar(){
    var respuesta = prompt('Desea continuar? (Si/No)').toLowerCase();
    return respuesta == 'si' || respuesta == 'SI';
}
function calcularimc()
{
    // variable local
    let imc= peso/(altura*altura);

    if (imc<18.5)
    {
        document.write(` <br> IMC es: ${imc} Clasificación: Peso bajo`);
    } else if (imc>=18.5 && imc <25)
    {
        document.write(`<br> IMC es: ${imc} Clasificación: Normal`);
    }else if(imc>=25 && imc<30)
    {
        document.write(`<br> IMC es: ${imc} Clasificación: Sobrepeso`);
    }else
    {
        document.write(`<br> IMC es: ${imc} Clasificación: Obesidad`);
    }

}


function promedioaltura()
{
    if (contesta ==0){
        console.log('No se han ingresado datos')

    }else{
        let promedio = acumuesta/contesta;
        document.write(`<br> El promedio de estatura es: ${promedio.toFixed(2)} metros`);

    }
}

function promediopeso()
{
    if (contesta==0){
        console.log('No se han ingresado datos')
    }else{
        let promedio= acumpeso/contesta;
        document.write(`<br> El promedio de peso es: ${promedio.toFixed(2)} Kilogramos`)
    }
}

do{
    ingresardatos();
    calcularimc();

}while(preguntar());
promedioaltura();
promediopeso();