const ingresos = [
    new Ingreso('sarario', 2000.00),
     new Ingreso('Venta Coche', 1500)
];

const egresos = [
    new Egreso('Arriendo', -80.00),
    new Egreso('ropa', -100.00)
];

let cargarApp = ()=> {
    cargarCabecero();
    cargarIngresos();
    cargarEgresos();
}
let totalIngresos = ()=>{
    let totalIngreso = 0;
    for(let i of ingresos){
        totalIngreso += i.valor;
    }
    return totalIngreso;
}

let totalEgresos = ()=>{
    let totalEgreso = 0;
    for (let i of egresos){
        totalEgreso += i.valor;
    }
    return totalEgreso;
}

let cargarCabecero = () =>{
     let presupuest = totalIngresos() - totalEgresos();
     let porcentajeEgreso = totalEgresos()/totalIngresos();
     document.getElementById('presupuesto').innerHTML = formatoMoneda(presupuest);
     document.getElementById('porcentaje').innerHTML = formatoPrcentaje(porcentajeEgreso);
     document.getElementById('ingresos').innerHTML = formatoMoneda(totalIngresos());
     document.getElementById('egresos').innerHTML= formatoMoneda(totalEgresos());
}

const formatoMoneda = (valor)=>{
     return valor.toLocaleString('en-US',{style:'currency', currency:'USD', minimumFractionDigits: 2});
}

const formatoPrcentaje = (valor)=>{
    return valor.toLocaleString('en-US',{style:'percent', minimumFractionDigits:2});
}

const cargarIngresos= () =>{
    let ingresosHTML = '';
    for(let i of ingresos){
        ingresosHTML += crearIngresoHTML(i);
    }
    document.getElementById('lista-ingresos').innerHTML = ingresosHTML;
}
 const crearIngresoHTML = (i)=>{
     let ingresoHTML = `<div class="elemento limpiarEstilos">
     <div class="elemento_descripcion">${i.descripcion}</div>
      <div class="derecha limpiarEstilos">
          <div class="elemento_valor">+${formatoMoneda(i.valor)}</div>
          <div class="elemento_eliminar">
              <button class="elemento_eliminar--btn">
                <ion-icon name="close-circle-outline" onclick='eliminarIngreso(${i.id})' ></ion-icon>
                </button>
          </div>
      </div>
 </div> `;
 return ingresoHTML;
 }

const eliminarIngreso = (id)=>{
  let indiceEliminar =  ingresos.findIndex(i => i.id === id); // metodo llamado findIndex:
  ingresos.splice(indiceEliminar, 1);
  cargarCabecero();
  cargarIngresos();
  
}

 const cargarEgresos = ()=>{
     let egresosHTML = '';
     for(let e of egresos){
         egresosHTML += crearEgresosHTML(e);
     }
    document.getElementById('lista_egresos').innerHTML = egresosHTML;
 }
  const crearEgresosHTML = (e)=>{
      let egresoHTML = `<div class="elemento limpiarEstilos">
      <div class="elemento_descripcion">${e.descripcion}</div>
      <div class="derecha limpiarEstilos">
          <div class="elemento_valor">${formatoMoneda(e.valor)}</div>
          <div class="elemento_porcentaje">${formatoPrcentaje(e.valor/totalEgresos())}</div>
       <div class="elemento_eliminar">
           <button class="elemento_eliminar--btn">
             <ion-icon name="close-circle-outline"onclick='eliminarEgreso(${e.id})'></ion-icon>
             </button>
       </div>
      </div>
  </div>`;
  return egresoHTML;
  }

  const eliminarEgreso = (id)=>{
    let indiceEliminar = egresos.findIndex(e => e.id === id);
      egresos.splice(indiceEliminar, 1);
      cargarCabecero();
      cargarEgresos();

  }

  let agregarDato = ()=>{
      let forma = document.forms['forma'];
      let tipo = forma['tipo'];
      let descripcion = forma['descripcion'];
      let valor = forma['valor'];
      if (descripcion.value !== '' && valor.value !==''){
          if(tipo.value === 'ingreso'){
               ingresos.push(new Ingreso(descripcion.value, +valor.value));
               cargarCabecero();
               cargarIngresos();
          }
          else if (tipo.value === 'egreso'){
            egresos.push(new Egreso(descripcion.value, +valor.value));
            cargarCabecero();
            cargarEgresos();
          }
      }
  }