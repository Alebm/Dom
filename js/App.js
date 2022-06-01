const divs = document.getElementsByTagName("div");
const inputs = document.getElementsByTagName("input");
const btns = document.getElementsByTagName("button");
const labels = document.getElementsByTagName("label");

//Manejamso el boton para darle modo oscuro

const btn = document.querySelector('#switch');

        btn.addEventListener('click', () => {

            document.body.classList.toggle('dark');
            btn.classList.toggle('active');

            //guardar el modo en localstorage
            if(document.body.classList.contains('dark')){
                localStorage.setItem('dark-mode', 'true');
            }else{
                localStorage.setItem('dark-mode', 'false');
            }
        
        });

if(localStorage.getItem('dark-mode')==='true'){
    document.body.classList.add('dark');
    btn.classList.add('active');
}else{
    document.body.classList.remove('dark');
    btn.classList.remove('active');
}

const calcular = document.getElementById("Calcular");


function cuotaDelPrestamo(valorprestamo,meses,tasa){


    cuota = Math.round((valorprestamo*tasa)/(1-((Math.pow((1+tasa),-meses)))));

    pagoTotal = cuota*meses;

}

//con el clic hago la oepracion de la cuota, y quiero reemplazar el valor si ya lo hice una vez, lo logre hacer así pero el else no es optimo

calcular.addEventListener("click", () =>{

    cuotaDelPrestamo(parseInt(inputs[0].value),parseInt(inputs[1].value),parseFloat(inputs[2].value));

    const salidas = [`La cuota es de ${cuota} `,`
    El pago total es ${pagoTotal}` ];

    if(!document.getElementById("salidas")){

        for (const salida of salidas) {
        
            let label = document.createElement("label");
            label.setAttribute("ID","salidas");
            label.className="label";
            label.innerText = salida;
            divs[1].appendChild(label);
            console.log(labels);

        }
    }else{

    //este else no me convence
            labels[3].innerText = `La cuota es de ${cuota} 
            `;
            labels[4].innerText = ` El pago total es ${pagoTotal}`;
        
    
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













































