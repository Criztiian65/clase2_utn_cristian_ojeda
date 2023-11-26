Es una calculadora simple donde se pueden ejecutar operadores basicos.
El resultado va a ser redondeado a 2 decimales.

La estetica es algo en lo que debería continuar trabajando MUCHO más.

Como observación todavia le falta agregar validaciones en los promps, estoy investigando al respecto.

Con respecto al ejercicio 1.

Teniendo en cuenta la siguiente estructura:

function suma (a,b,callback){
let c = a +b;
callback();
}

El tercer parametro "callback" es utilizado cuando se necesita retornar una función o llamar otra función, normalmente se lo llama función dentro de otra función y sirve justamente para retornar valores dependiendo la logica con la que este construida.