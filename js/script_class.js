alert("Aqui le daremos 3 planes de credito ingrese los datos que se le pediran a continuacion")

        let nombre = prompt("Ingresa tu nombre");
        let apellido = prompt("y tu primer apellido");
        let edad = parseInt(prompt("edad"));
        let pasivos = parseInt(prompt("Cuales son sus pasivos en $"));
        let activos = parseInt(prompt("Cuales son sus activos en $"));
        let contrato = prompt("Esbriba el tipo de trabajo segun esta lista \n Indefinido \n Fijo \n Prestación");
    
    
alert("Datos ingresados \n"+ nombre +" "+ apellido + "\n Edad: " + edad + "\n Pasivos: " + pasivos +"\n Activos: " + activos+ "\n Contrato: " + contrato);
    



//VxI veces por ingreso
class Creditos {
    constructor(clase = String, tasa = parseFloat, VxI = parseInt) {

        this.clase = clase;
        this.tasa = tasa;
        this.VxI = VxI;
    }
}

const vip = new Creditos("Vip", 0.15, 1.8 );

const platino = new Creditos("Platino", 0.13, 2.5);

const Black = new Creditos("Black", 0.08, 3.2);





class PersonaSolicitante{
    constructor(nombre, apellido, edad, pasivos, activos, contrato, aprobado){

        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.pasivos = pasivos;
        this.activos = activos;
        this.contrato = contrato;
        this.aprobado = aprobado;

    }



    Calculo(){


    
        if (((this.activos-this.pasivos)*2) > this.pasivos && this.edad>30 && this.contrato == "Indefinido" ){
    
            
            return this.aprobado= true;
    
            
    
        }else if(this.activos-this.pasivos>pasivos && this.edad>25 && this.contrato == "Indefinido"){
    

    
    
        } else if(this.activos-this.pasivos>this.pasivos && this.edad>20 ){

    
        }else if(this.edad<20){
    
            alert(`Señor ${nombre} ${apellido} su prestamo no puede ser concedido`);
    
    
        }

        

}



}




const Persona1 = new PersonaSolicitante(nombre, apellido, edad, pasivos, activos, contrato);
Persona1.Calculo();
console.log(Persona1.aprobado);

