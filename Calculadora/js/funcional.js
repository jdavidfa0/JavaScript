// definir el obejto con las propiedades de la calculadora

var po={
    teclas: document.querySelectorAll(".container ul li "),
    accion: null
}

//objeto con las funciones de la calculadora 

var fun={
    inicio: function(){

        for(var i =0; i<po.teclas.length; i++){
            po.teclas[i].addEventListener("click",fun.oprimir)

        }

    },
    oprimir:function(tecla){
        po.accion= tecla.target.getAttribute("class");
        fun.calculadora(po.accion);

    },
    calculadora:function(accion){
        switch(accion){
            case "numero":
                console.log("numero");
            break;
            case "simbolo":
                console.log ("simbolo");
            break;
            case "igual":
                console.log ("igual");
            break;
            case "pi":
                console.log("pi");
            break;
            case "decimal":
                console.log("decimal");
            break;
            case "raiz":
                console.log("raiz");
            break;
            case "cubo":
                console.log("cubo");
            break;
            case "cos":
                console.log("cos");
        }

    }
}

fun.inicio();