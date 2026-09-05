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

