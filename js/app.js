const operadores = document.querySelectorAll("#operadores")


for (const operador of operadores) {
    console.log(operador.outerText);
    operador.addEventListener("click", function () {

        
        const num1 = parseFloat(document.getElementById("num1").value)
        const num2 = parseFloat(document.getElementById("num2").value)
        const resultado = document.getElementById("resultado")
        let total
        
        
        
        
       switch(operador.name) {
        case "suma":
            total = num1 + num2
            resultado.innerText = `
                                El resultado es ${total.toFixed(2)}`
            break;

        case "resta":
            total = num1 - num2
            resultado.innerText = `
                                El resultado es ${total.toFixed(2)}`
            break;

        case "division":
            total = num1 / num2
            resultado.innerText = `
                                El resultado es ${total.toFixed(2)}`
            break;

        case "multiplicacion":
            total = num1 * num2
            resultado.innerText = `
                                El resultado es ${total.toFixed(2)}`
            break;

        default:

            resultado.innerText = `
            Elije una operatoria!`
            break;
    }}

)}


// operadores.addEventListener("click", function () {
//     const operacion = this.value

//     const num1 = parseFloat(document.getElementById("num1").value)
//     const num2 = parseFloat(document.getElementById("num2").value)
//     const resultado = document.getElementById("resultado")
//     let total

//     switch (operacion) {
//         case "suma":
//             total = num1 + num2

//             resultado.innerText = `
//                                 El resultado es ${total.toFixed(2)}
//             `
//             break;
//         case "resta":
//             total = num1 - num2
//             resultado.innerText = `
//                                 El resultado es ${total.toFixed(2)}
//             `
//             break;
//         case "division":
//             total = num1 / num2

//             resultado.innerText = `
//                                 El resultado es ${total.toFixed(2)}
//             `
//             break;
//         case "multiplicacion":
//             total = num1 * num2
//             resultado.innerText = `
//                                 El resultado es ${total.toFixed(2)}
//             `
//             break;

//         default:
//             resultado.innerText = `
//             Elije una operatoria!
// `
//             break;
//     }

// })



