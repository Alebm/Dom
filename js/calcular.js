const divs = document.getElementsByTagName("div");
const inputs = document.getElementsByTagName("input");
const btns = document.getElementsByTagName("button");
const labels = document.getElementsByTagName("label");

const calcular = document.getElementById("Calcular");


function cuotaDelPrestamo(valorprestamo,meses,tasa){


    cuota = Math.round((valorprestamo*tasa)/(1-((Math.pow((1+tasa),-meses)))));

    pagoTotal = cuota*meses;

}



calcular.addEventListener("click", () =>{

    cuotaDelPrestamo(parseInt(inputs[0].value),parseInt(inputs[1].value),parseFloat(inputs[2].value));

    const salidas = [`La cuota es de ${cuota} `,`
    El pago total es ${pagoTotal}` ];

    for (const salida of salidas) {
        
        let label = document.createElement("label");
        label.className="label";
        label.innerText = salida;
        divs[1].appendChild(label);


}



});

 

inputs[7].addEventListener("click", () =>{


    cuotaDelPrestamo(parseInt(inputs[4].value),parseInt(inputs[5].value),parseFloat(inputs[6].value));

    const salidas = [`La cuota es de ${cuota} `,`
    El pago total es ${pagoTotal}` ];

    let label
    console.log(label);


        for (const salida of salidas) {
        
            label = document.createElement("label");
            label.className="label";
            label.innerText = salida;
            divs[2].appendChild(label);
        
    
            
        }


});

inputs[11].addEventListener("click", () =>{



    cuotaDelPrestamo(parseInt(inputs[8].value),parseInt(inputs[9].value),parseFloat(inputs[10].value));

    const salidas = [`La cuota es de ${cuota} `,`
    El pago total es ${pagoTotal}` ];

    let label


        for (const salida of salidas) {
        
            label = document.createElement("label");
            label.className="label";
            label.innerText = salida;
            divs[3].appendChild(label);
        
    
            
        }

});

inputs[15].addEventListener("click", () =>{



    cuotaDelPrestamo(parseInt(inputs[12].value),parseInt(inputs[13].value),parseFloat(inputs[14].value));

    const salidas = [`La cuota es de ${cuota} `,`
    El pago total es ${pagoTotal}` ];

    let label
    console.log(label);


        for (const salida of salidas) {
        
            label = document.createElement("label");
            label.className="label";
            label.innerText = salida;
            divs[4].appendChild(label);
        
    
            
        }

});













































