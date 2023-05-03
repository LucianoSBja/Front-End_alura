/* Importacion de clases */
import {Cliente} from './Cliente.js'
import {CuentaCorriente} from './CuentaCorrientes.js'

const cliente = new Cliente('Luciano','13804405', '3342' );
const cliente2 = new Cliente('Maria', '1380777','3377');

const cuentaDeLuciano = new CuentaCorriente(cliente, '1', '001');
const cuentaDeMaria = new CuentaCorriente(cliente2, '2', '002');


/* console.log(cuentaDeLuciano.cliente);
console.log(cuentaDeMaria.cliente); */

console.log(`Cantidad de cuentas creadas: ${CuentaCorriente.cantidadCuentas}`);





/* cuentaDeLuciano.tranferirParaCuenta(100, cuentaDeMaria);
const saldoMaria = cuentaDeMaria.verSaldo();
console.log(`El Saldo actual (CuentaMaria) ${saldoMaria}`);

const saldoLuciano = cuentaDeLuciano.verSaldo();
console.log(`El Saldo actual (CuentaLuciano) ${saldoLuciano}`); */