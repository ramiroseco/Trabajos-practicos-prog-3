//Ejercicio 1

function validarFechaNacimiento(inputFnac, labelError) {
    labelError.textContent = "";

    if (inputFnac && inputFnac.value) {
        const partes = inputFnac.value.split("-");
        const fechaUsuario = new Date(partes[0], partes[1] - 1, partes[2]);
        const fechaActual = new Date();
        fechaActual.setHours(0, 0, 0, 0);

        if (fechaUsuario > fechaActual) {
            labelError.textContent = "La fecha de nacimiento no puede ser posterior a la fecha actual";
            return false;
        }
    }
    return true;
}

// Ejercicio 2

function validarDni(inputDni, labelError) {
    labelError.textContent = "";

    if (inputDni && inputDni.value) {
        const valor = inputDni.value.trim();

        if (valor.length !== 8 || isNaN(valor)) {
            labelError.textContent = "El DNI debe contener 8 dígitos";
            return false;
        }
    }
    return true;
}


//Ejercicio 3


function Actividad(nombre,lugar,dia,horario,cupo,estado){
    this.nombre = nombre;
    this.lugar = lugar;
    this.dia = dia;
    this.horario = horario;
    this.cupo = cupo;
    this.estado = estado;

}

class SistemaDeportes{

        constructor(actividades = []) {
            this.actividades = actividades;
        }

        agregarActividad (nuevasActividades){
            this.actividades.push(nuevasActividades);
        }

        listarActividades (){

            for (let i=0; i<this.actividades.length; i++){
                    console.log(this.actividades[i]);
            }
        }

}

let futbol = new Actividad("Fútbol", "Cancha de fútbol", "Miércoles", "19:00 - 21:00", 10, "Disponible");
let basquet = new Actividad("Básquet", "Playón Polideportivo", "Miércoles", "16:00", 9, "Disponible");
let voley = new Actividad("Voley", "Playón Polideportivo", "Viernes", "17:00", 10, "Disponible");
let atletismo = new Actividad("Atletismo", "Pista de atletismo", "Sábado", "09:00", 10, "Disponible");


let sistemaDeportes1 = new SistemaDeportes([futbol, basquet, voley, atletismo]);


sistemaDeportes1.listarActividades();




//Ejercicio 4


function TablaActividades() {

    const cuerpoTabla = document.getElementById("cuerpoTabla");


    if (!cuerpoTabla) return;


    cuerpoTabla.innerHTML = "";

    sistemaDeportes1.actividades.forEach(actividad => {

        const fila = document.createElement("tr");


        const tdNombre = document.createElement("td");
        tdNombre.textContent = actividad.nombre;

        const tdLugar = document.createElement("td");
        tdLugar.textContent = actividad.lugar;

        const tdDia = document.createElement("td");
        tdDia.textContent = actividad.dia;

        const tdHorario = document.createElement("td");
        tdHorario.textContent = actividad.horario;

        const tdCupo = document.createElement("td");
        tdCupo.textContent = actividad.cupo;

        const tdEstado = document.createElement("td");
        tdEstado.textContent = actividad.estado;


        fila.appendChild(tdNombre);
        fila.appendChild(tdLugar);
        fila.appendChild(tdDia);
        fila.appendChild(tdHorario);
        fila.appendChild(tdCupo);
        fila.appendChild(tdEstado);

        cuerpoTabla.appendChild(fila);
    });
}


document.addEventListener("DOMContentLoaded", () => {
    TablaActividades();
});

//Ejercicio 5

document.addEventListener("DOMContentLoaded", () => {
    const btnGenerar = document.getElementById("btnGenerar");
    const inputCantidad = document.getElementById("cantidadParticipantes");
    const contenedor = document.getElementById("contenedorParticipantes");
    const errorCantidad = document.getElementById("errorCantidad");

    function generarBloquesParticipantes() {
        if (!contenedor || !inputCantidad) return;

        if (errorCantidad) errorCantidad.textContent = "";
        contenedor.innerHTML = "";

        const cantidad = parseInt(inputCantidad.value, 10);

        if (isNaN(cantidad) || cantidad < 1 || cantidad > 10) {
            if (errorCantidad) {
                errorCantidad.textContent = "Ingrese una cantidad válida entre 1 y 10.";
            }
            return;
        }

        for (let i = 1; i <= cantidad; i++) {
            const card = document.createElement("div");
            card.className = "card mb-3 border-secondary";

            card.innerHTML = `
                <div class="card-header bg-light">
                    <h5 class="card-title mb-0">Participante ${i}</h5>
                </div>
                <div class="card-body">
                    <p>
                        <label for="nombre_${i}">Apellido y Nombre:</label>
                        <input type="text" id="nombre_${i}" name="nombre_${i}" class="form-control" maxlength="100" required>
                    </p>
                    <p>
                        <label for="dni_${i}">DNI:</label>
                        <input type="text" id="dni_${i}" name="dni_${i}" class="form-control" placeholder="Ej: 30123123" maxlength="8" required>
                        <span id="pdni_${i}" class="text-danger"></span>
                    </p>
                    <p>
                        <label for="fnac_${i}">Fecha de nacimiento:</label>
                        <input type="date" id="fnac_${i}" name="fnac_${i}" class="form-control" required>
                        <span id="pfnac_${i}" class="text-danger"></span>
                    </p>
                    <p>
                        <label>Sexo:</label><br>
                        <input type="radio" id="sexo_f_${i}" name="sexo_${i}" value="Femenino" required>
                        <label for="sexo_f_${i}">Femenino</label>
                        <input type="radio" id="sexo_m_${i}" name="sexo_${i}" value="Masculino">
                        <label for="sexo_m_${i}">Masculino</label>
                    </p>
                    <p>
                        <label for="nivel_${i}">Nivel:</label>
                        <select id="nivel_${i}" name="nivel_${i}" class="form-select">
                            <option value="inicial">Inicial</option>
                            <option value="intermedio">Intermedio</option>
                            <option value="avanzado">Avanzado</option>
                        </select>
                    </p>
                </div>
            `;

            contenedor.appendChild(card);

                const inputDni = card.querySelector(`#dni_${i}`);
                const labelDni = card.querySelector(`#pdni_${i}`);
                const inputFnac = card.querySelector(`#fnac_${i}`);
                const labelFnac = card.querySelector(`#pfnac_${i}`);

                if (inputDni) {
                    inputDni.addEventListener("blur", () => validarDni(inputDni, labelDni));
                }
                if (inputFnac) {
                    inputFnac.addEventListener("change", () => validarFechaNacimiento(inputFnac, labelFnac));
                }
        }
    }

    if (btnGenerar) {
        btnGenerar.addEventListener("click", generarBloquesParticipantes);
    }

    const formInscripcion = document.querySelector("form");
    if (formInscripcion) {
            formInscripcion.addEventListener("submit", (event) => {
            let esValido = true;

            const inputsDni = contenedor.querySelectorAll("[id^='dni_']");
            const inputsFnac = contenedor.querySelectorAll("[id^='fnac_']");

            inputsDni.forEach(input => {
                const idNum = input.id.split("_")[1];
                const labelError = document.getElementById(`pdni_${idNum}`);
                if (!validarDni(input, labelError)) esValido = false;
            });

            inputsFnac.forEach(input => {
                const idNum = input.id.split("_")[1];
                const labelError = document.getElementById(`pfnac_${idNum}`);
                if (!validarFechaNacimiento(input, labelError)) esValido = false;
            });

            if (!esValido) {
                event.preventDefault();
            }
        })
    }
});