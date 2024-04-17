
// definir el array
let numeros =[1,2,3,4,5 ];

document.write(numeros);

// acceder al elemento del array

document.write(`<br>El primer elemento es : ${numeros[0]}`);
document.write(`<br> El ultimo elemento es: ${numeros[4]} <br>`);


// modificar elementos del array
numeros[3]=50;
document.write(numeros);

// añadir elemento al array
numeros.push(6);
document.write(numeros);

// eliminar ultimo elemento
let ultimo= numeros.pop();
document.write(ultimo);
document.write(numeros)


// recorrer el array
for(let i=0; i<=numeros.length;i++){
    document.write(`<br> Elememto ${i} : ${numeros[i]}`)
}



let ciudades= ['Bogotá','Cali', 'Medellin', 'Barranquilla','Armenia','Pereira','Ibagué']



