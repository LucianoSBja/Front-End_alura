export function valida(input) {
    const tipoDeInput = input.dataset.tipo
    if(validadores[tipoDeInput]){
        validadores[tipoDeInput](input)
    }

    console.log(input.parentElement);

    if(input.validity.valid){
        input.parentElement.classList.remove("input-container--invalid")
        input.parentElement.querySelector(".input-message-error").innerHTML = ""
    }else{
        input.parentElement.classList.add("input-container--invalid")
        input.parentElement.querySelector(".input-message-error").innerHTML = mostrarMensajeDeError(tipoDeInput, input)
    }
}

const tipoDeErrores = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    "customError",

]

const mensajeDeError = {
    nombre: {
        valueMissing: "El campo nombre no puede estar vacio"
    },
    email: {
        valueMissing: "El campo correo no puede estar vacio",
        typeMismatch: "El correo no es valido"
    },
    password: {
        valueMissing: "El campo password no puede estar vacio",
        patternMismatch:"Al menos 8 caracteres, maximo 12, debe contener una letra minuscula, un numero y no puede contener caracteres especiales."
    },
    nacimiento: {
        valueMissing: "Este campo no puede estar vacio",
        customError:"Debes tener al menos 18 anos de edad"
    },
    numero: {
        valueMissing: "Este campo no puede estar vacio",
        patternMismatch: "El formato requerido es XXXXXXXXXXXX 10 numeros"
    },
    direccion: {
        valueMissing: "Este campo no puede estar vacio",
        patternMismatch: "La direccion debe contener entre 10 a 40 caracteres"
    },
    ciudad: {
        valueMissing: "Este campo no puede estar vacio",
        patternMismatch: "La ciudad debe contener entre 10 a 40 caracteres"
    },
    provincia: {
        valueMissing: "Este campo no puede estar vacio",
        patternMismatch: "La provincia debe contener entre 10 a 40 caracteres"
    }
}

const validadores = {
    nacimiento: input => validadNacimiento(input)
}

function mostrarMensajeDeError(tipoDeInput, input) {
    let mensaje = ""
    tipoDeErrores.forEach(error => {
        if(input.validity[error]) {
            console.log(tipoDeInput,error);
            console.log(input.validity[error]);
            console.log(mensajeDeError[tipoDeInput][error]);
            mensaje = mensajeDeError[tipoDeInput][error]
        }
    })

    return mensaje
}

function validadNacimiento(input) {
    const fechaCliente = new Date (input.value);
    let mensaje = ""
    if(!mayorDeEdad(fechaCliente)) {
        mensaje = "Debes tener al menos 18 anos de edad"
    }

    input.setCustomValidity(mensaje)
}

function mayorDeEdad(fecha) {
    const fechaActual = new Date();
    const diferenciaFecha = new Date(
     fecha.getUTCFullYear() + 18, 
     fecha.getUTCMonth(), 
     fecha.getUTCDate()
     );
    return diferenciaFecha <= fechaActual;
}