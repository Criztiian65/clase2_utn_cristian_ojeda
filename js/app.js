const operadores = document.querySelectorAll("#operadores")

for (const operador of operadores) {
    
    operador.addEventListener("click", function () {
        const num1 = parseFloat(document.getElementById("num1").value)
        const num2 = parseFloat(document.getElementById("num2").value)
        const resultado = document.getElementById("resultado")
        

        let total
        
       switch(operador.name) {
       
        case "suma":{
                total = num1 + num2
                resultado.innerHTML = `
                                    <div class='p-3'>El resultado es ${total.toFixed(2)}</div>`}
            break;

        case "resta":{
                total = num1 - num2
                resultado.innerHTML = `
                                    <div class='p-3'>El resultado es ${total.toFixed(2)}</div>`}
            break;

        case "division":{
                total = num1 / num2
            resultado.innerHTML = `
                                <div class='p-3'>El resultado es ${total.toFixed(2)}</div>`}
            break;

        case "multiplicacion":{
                total = num1 * num2
            resultado.innerHTML = `
                                <div class='p-3'>El resultado es ${total.toFixed(2)}</div>`}
            break;

        default:
            resultado.innerHTML = `
            <div class='p-3'>Elije una operatoria!</div>`
            break;
    }}

)}
