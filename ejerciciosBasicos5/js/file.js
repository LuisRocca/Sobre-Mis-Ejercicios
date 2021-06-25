function sumar(){
    const forma = document.getElementById('forma');
    let operadoA = forma['operandoA'];
    let operadoB = forma['operandoB'];
    let resultado = parseInt(operadoA.value) + parseInt(operadoB.value);
     if (isNaN(resultado)) resultado = '¿acaso eso es un numero? gafo!';
    document.getElementById('resultadoSm').innerHTML = `resultado: ${resultado}`;
}
