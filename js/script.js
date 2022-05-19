
//VxI veces por ingreso
class Credito {
    constructor(clase = String, tasa = parseFloat, VxI = parseInt) {

        this.clase = clase;
        this.tasa = tasa;
        this.VxI = VxI;
    }
}

const vip = new Credito("Vip", 0.15, 1.8 );

const platino = new Credito("Platino", 0.13, 2.5);

const Black = new Credito("Black", 0.08, 3.2);

const ListaDeCreditos = [vip, platino, Black]

console.log(ListaDeCreditos);

for (const creditos of ListaDeCreditos) {
    console.log(creditos);
}

ListaDeCreditos.push(new Credito("Esmeralda", 0.065, 3.8));

for (const creditos of ListaDeCreditos) {
    console.log(creditos);
}

console.log(ListaDeCreditos.length-1);


alert("Aqui le daremos 3 planes de credito ingrese los datos que se le pediran a continuacion")


function DatosDelCliente(){

    let nombre = prompt("Ingresa tu nombre");
    let apellido = prompt("y tu primer apellido");
    let edad = parseInt(prompt("edad"));
    let pasivos = parseInt(prompt("Cuales son sus pasivos en $"));
    let activos = parseInt(prompt("Cuales son sus activos en $"));
    let contrato = prompt("Esbriba el tipo de trabajo segun esta lista \n Indefinido \n Fijo \n Prestación");


    alert("Datos ingresados \n"+ nombre +" "+ apellido + "\n Edad: " + edad + "\n Pasivos: " + pasivos +"\n Activos: " + activos+ "\n Contrato: " + contrato);

    CalculoDelPrestamo(nombre, apellido, edad, pasivos, activos, contrato);

};

DatosDelCliente();

function CalculoDelPrestamo(nombre, apellido, edad, pasivos, activos, contrato){

    ingresoNeto = activos-pasivos;

    console.log(ingresoNeto);

    if ((ingresoNeto*2) > pasivos && edad<35 && contrato == "Indefinido" ){

        valorP = ingresoNeto*Black.VxI;

        alert(`Señor ${nombre} ${apellido} su prestamo es un ${Black.clase} con tasa de ${Black.tasa} EA
        por un valor total de ${valorP}`);

    }else if(ingresoNeto>pasivos && edad<25 && contrato == "Indefinido"){

        valorP = ingresoNeto*platino.VxI;

        alert(`Señor ${nombre} ${apellido} su prestamo es un ${platino.clase} con tasa de ${platino.tasa} EA
        por un valor total de ${valorP}`);


    } else if(ingresoNeto>pasivos && edad>20 && edad<=24 ){

        valorP = ingresoNeto*vip.VxI;

        alert(`Señor ${nombre} ${apellido} su prestamo es un ${vip.clase} con tasa de ${vip.tasa} EA
        por un valor total de ${valorP}`);

    }else if(edad<20){

        alert(`Señor ${nombre} ${apellido} su prestamo no puede ser concedido`);


    }else if((ingresoNeto*2) > pasivos && edad>35 && contrato == "Indefinido"){

        const ultimoCreditoAgregado = ListaDeCreditos[ListaDeCreditos.length-1];

        valorP = ingresoNeto*ultimoCreditoAgregado.VxI;

        alert(`Señor ${nombre} ${apellido} su prestamo es un ${ultimoCreditoAgregado.clase} con tasa de ${ultimoCreditoAgregado.tasa} EA
        por un valor total de ${valorP}`);
    }

}