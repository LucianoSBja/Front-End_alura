import { Cliente } from "./Cliente.js";

export class CuentaCorriente {
    #cliente;
    numero;
    agencia;
    //* Definimo un atributo privado con # método para proteger atributos e informaciones sensibles de nuestras clases */
   #saldo;
   //*? La palabra reservada static hace referencia a todas las cuentas creadas o cual otra cosa global*/
    static cantidadCuentas = 0;


    //*? setter significa asignar*/
    set cliente(valor) {
        if(valor instanceof Cliente)
            this.#cliente = valor;
    }

    //*? getter significa obtener*/
    get cliente() {
        return this.#cliente
    }

     //* Definimo un constructor para definir la inicializacion */
     constructor (cliente, numero, agencia) {
        //*! Lo hacemos null a cliente por buena practica*/
        //*? Lo hacemos privado con # para poder obtenerlo es utilizar set y get*/
        this.cliente = cliente;
        this.numero = numero;
        this.agencia = agencia;
        this.#saldo = 0;
        //*! No puedo acceder a el con this si no con el nombre de la clase */
        CuentaCorriente.cantidadCuentas++;

    }

    depositoEnCuenta(valor) {
        if(valor > 0)
          this.#saldo += valor;
        return this.#saldo
    }

    retirarDeCuenta(valor) {
        if(valor <= this.#saldo)
           this.#saldo -= valor;
        return this.#saldo
    }

    /* Podemos tener el retorno del saldo que estan en privado 
    con lo llamado encapsulamiento y liberamos las cosas que solo necesitemos*/
    verSaldo() {
        return this.#saldo;
    }

    tranferirParaCuenta(valor, cuentaDestino) {
        this.retirarDeCuenta(valor);
        cuentaDestino.depositoEnCuenta(valor);
    }
}