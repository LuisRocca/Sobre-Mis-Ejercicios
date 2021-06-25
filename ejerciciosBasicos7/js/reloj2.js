const mostrarReloj = ()=>{
    let fecha = new Date();
    let hr = formatoHora(fecha.getHours());
    let mn = formatoHora(fecha.getMinutes());
    let sg = formatoHora(fecha. getSeconds());
    document.getElementById("hora").innerHTML =`${hr}:${mn}:${sg}`;

    const meses = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep'];
    const dias = ['domingo','lunes', 'martes', 'miercoles','jueves','viernes'];
    let diaSemana = dias[fecha.getDay()];
     let dia = fecha.getDate();
     let mes = meses[fecha.getMonth()];
     let fechaTexto = `${diaSemana}, ${dia}, ${mes} `;
     document.getElementById('fecha').innerHTML = fechaTexto;

     document.getElementById("contenedor").classList.toggle('animar');
}

const formatoHora = (hora)=>{
    if(hora < 10)
    hora = '0' + hora;
    return hora;
}

setInterval(mostrarReloj,1000);