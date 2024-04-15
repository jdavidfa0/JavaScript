//definir variables 

let num1 = 10; //numerica
let nombre= "David";//texto
let estado = true;//booleano
let lista =[1,2,3,4,5];//arreglo
let persona= {nombre:"Jose", apellido:"Fandiño", email:"Jdavidfa0"}//objeto


console.log(num1);
console.log(nombre);
console.log(estado);
document.write(lista);
console.log(persona);
document.write(persona.nombre);

//definir constante

const ambiente=109;
console.log(ambiente)

//condicionales 
// ingreso de datos x teclado

let notestudiante;
let nota;

notestudiante= prompt('Ingrese nombre del estudiante');
nota = parseFloat(prompt('Ingrese nota'));

if(nota >= 3.8)
{
    document.write(`<br> ${notestudiante} ha aprobado con ${nota}`);
}
else{
    document.write(`<br> ${notestudiante} ha reprobado con ${nota}`)
    }



