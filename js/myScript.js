//Ejercicio 1

function validarfnac(){

    const input = document.getElementById("fnac");
    if (input.value){
        const fechausuario = new Date(input.value +"T00:00:00");
        const fechaactual = new Date();
        let text;

            if (fechausuario> fechaactual){
        text = "La fecha de nacimiento no puede ser posterior a la fecha actual";
        document.getElementById("pfnac").innerHTML = text;
        }
    }

}

// Ejercicio 2

function verificarDni(){

    let dniusuario = document.getElementById("dni");

    if (dniusuario.value){
        let text;
        let longituddni = 8;
        if(dniusuario.value.length < longituddni){
            text = "El DNI debe contener 8 dígitos"
            document.getElementById("pdni").innerHTML = text;
        }

    }
}

//Ejercicio 3 Gestión de actividades deportivas

function Actividad(nombre,lugar,dia,horario,cupo,estado){
    this.nombre = nombre;
    this.lugar = lugar;
    this.dia = dia;
    this.horario = horario;
    this.cupo = cupo;
    this.estado = estado;

}
let Futbol = new Actividad("Futbol","Cancha de futbol","Miércoles","19:00 - 21:00","10","disponible");
let Basquet = new Actividad("Basquet","Playón Polideportivo","Miércoles","16:00","9","disponible");
let Voley = new Actividad("Voley","Playón Polideportivo","Viernes","17:00","10","disponible");
let Atletismo = new Actividad("Atletismo","Pista de atletismo","Sábado","09:00","10","disponible");
console.log(Futbol);
console.log(Basquet);
console.log(Voley);
console.log(Atletismo);


class SistemaDeportes{
        constructor(actividades) {

            this.actividades = actividades;
        }

        agregarActividades = function(nuevasActividades){
            actividades.push(nuevasActividades);
        }
        listarActividades = function(){

        }

}

let SistemaDeportes1 = new SistemaDeportes([Futbol,Basquet,Voley,Atletismo]);
console.log(SistemaDeportes1.actividades.length);