
// definir la clase

class persona{
    // definir atributos de la clase 
    constructor(nombre,apellido,edad, genero,fecha){
        this.nombre= nombre;
        this.apellido= apellido;
        this.edad= edad;
        this.genero=genero;
        this.fecha=fecha;
    }
saludar(){
    console.log(`Buenos dias, soy ${this.nombre}`);
    console.log(`Mi apellido es: ${this.apellido}`);
    console.log(`Mi edad es: ${this.edad}`);
    console.log(`Mi genero es: ${this.genero}`);
    console.log(`Mi cumpleaños es: ${this.fecha}`)

}
mayor(){
    if(this.edad >=18){
        console.log('Eres mayor de edad');

    }else{
        console.log('Eres menor de edad');
    }
}
cacularedad(){
    let cumple= Date.parse(this.fecha);
    let resta = Date.now()-cumple;
    console.log(cumple)
    console.log(resta)
    
}
    
}

// crear el objeto
console.log('Soy la primera persona= objeto1');
let persona1 =new persona ('Juan','Gomez',20, 'Masculino', '10/20/2004');
persona1.saludar();
persona1.mayor();
persona1.cacularedad();




console.log('Soy la segunda persona = objeto2');
let persona2= new persona ('Johana','Cifuentes',60,'Mujer',"09/03/1985");

persona2.saludar();
persona2.mayor();

console.log('Soy la tercera persona = objeto3');
let persona3= new persona('Yudy', 'Benavides', 17, 'Mujer');
persona3.saludar();
persona3.mayor();