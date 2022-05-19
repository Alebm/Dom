const divs = document.getElementsByTagName("div");
const inputs = document.getElementsByTagName("input");
const btns = document.getElementsByTagName("button");
const labels = document.getElementsByTagName("label");

/* let inputValorPrestamo = document.getElementById("ValorPrestamo")
let resultadoPrestamo = document.getElementById("ResultadoPrestamo")
let calcular = document.getElementById("Calcular");
 */

let calculo;

let exponente = Math.pow(3,2);
console.log(exponente);

let divisor 
let dividendo 


function cuotaDelPrestamo(valorprestamo,meses,tasa){


    /* dividendo = valorprestamo*tasa;
    divisor = 1-((Math.pow((1+tasa),-meses)));

    cuota = dividendo/divisor; */
    

    cuota = (valorprestamo*tasa)/(1-((Math.pow((1+tasa),-meses))));

}



inputs[3].addEventListener("click", () =>{

    cuotaDelPrestamo(document.getElementById("ValorPrestamo").value,document.getElementById("meses").value,document.getElementById("tasa").value);
    console.log(document.getElementById("ValorPrestamo").value);
    console.log(document.getElementById("meses").value);
    console.log(document.getElementById("tasa").value);

    console.log(cuota);

    labels[3].innerText = `la cuota es de ${cuota}` ;

});

 

inputs[7].addEventListener("click", () =>{

    calculo = inputs[4].value*inputs[5].value*inputs[6].value;

    labels[7].innerText = `El prestamo solicitado es ${calculo}` ;

});

inputs[11].addEventListener("click", () =>{

    calculo = inputs[8].value*inputs[9].value*inputs[10].value;

    labels[11].innerText = `El prestamo solicitado es ${calculo}` ;

});

inputs[15].addEventListener("click", () =>{

    calculo = inputs[12].value*inputs[13].value*inputs[14].value;

    labels[15].innerText = `El prestamo solicitado es ${calculo}` ;

});













































