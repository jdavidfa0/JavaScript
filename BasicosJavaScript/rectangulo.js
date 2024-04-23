
class figura{
    constructor(alto, ancho){
        this.alto=alto;
        this.ancho=ancho;
    }
    area(){
        let area=this.ancho*this.alto;
        console.log(`El area del rectángulo es: ${area}`);
    }
    perimetro(){
        let perimetro= 2*(this.alto+this.ancho);
        console.log("El perimetro es :"+perimetro);

    }
    cuadrado(){
       if (this.ancho == this.alto){
        console.log ("Es un cuadrado");

       }else{
        console.log("Es un rectángulo");
       }

    }
    comparador(){

    const area1 =this.area();
    const area2= this.area();

    if(area1>area2){
        console.log("La figura 1 es mas grande");
    }else if (area1<area2){
        console.log("La figura 2 es mas grande")
    }else{
        console.log("Las figuras son del mismo tamaño");
    }

    }

}

let figura1 =new figura(1.60, 2.50);
let figura2= new figura (3.50,4.50);


figura1.area();
figura1.perimetro();
figura1.cuadrado();

figura2.area();
figura2.perimetro();
figura2.cuadrado();



