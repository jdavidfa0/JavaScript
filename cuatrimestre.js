
 let hoy = new Date();
 let mes = hoy.getMonth();

if (mes>=0 && mes<=3){
    document.write("Estamos en el primer cuatrimestre");
}else if( mes>=4 && mes<=7){
    document.write("Estamos en el segundo cuatrimestre");
}else{
    document.write("Estamos en el tercer cuatrimestre");
}
