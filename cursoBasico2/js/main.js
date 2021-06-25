var api = 'AIzaSyBOjKUtfEdRT9SmfidHrh5eEfXLpR2JuXY';

let map;

function initMap() {
  var latLng = {
    lat: 4.7133347,
    lng: -74.106222
  };

  var map = new google.maps.Map(document.getElementById("mapa"), {
    'center': latLng,
    'zoom': 14,
  });

  var informacion = new google.maps.InfoWindow({
  content: "Nicolaz es Marico"
  });

var marker = new google.maps.Marker({
    position: latLng,
    map: map,
    title: 'GDLwebcamp'
});

marker.addListener('click', function(){
informacion.open(map, marker);
});
}

(function(){
   "use strict";

   var regalo = document.getElementById('regalo');
   document.addEventListener('DOMContentLoaded', function(){

    //campos datos usuarios
    var nombre = document.getElementById('nombre');
    var apellido = document.getElementById('apellido');
    var email = document.getElementById('email');

   
   //Campos pases
   var pase_dia =document.getElementById('pase_dia');
   var pase_completos =document.getElementById('pase_completos');
   var pase_dos_dias =document.getElementById('pase_dos_dias');

   //botones y divs

   var calcular =document.getElementById('calcular');
   var errorDiv =document.getElementById('error');
   var botonRegistro =document.getElementById('btnRegistro');
   var lista_productos =document.getElementById('lista-productos');
   var suma =document.getElementById('suma-total');

   //extras
   var camisas = document.getElementById('camisa_evento');
   var etiquetas = document.getElementById('etiquetas');

   if(document.getElementsByName('calcular')) {

    calcular.addEventListener('click', calcularMontos);


   pase_dia.addEventListener('blur', mostrarDias);
   pase_completos.addEventListener('blur', mostrarDias);
   pase_dos_dias.addEventListener('blur',mostrarDias);

   nombre.addEventListener('blur', validarCampos);
   apellido.addEventListener('blur', validarCampos);
   email.addEventListener('blur', validarCampos);
   email.addEventListener('blur', validarMail);

   function validarCampos() {
    if(this.value == '')    {
        errorDiv.style.display= 'block';
        errorDiv.innerHTML= "este campo es obligatorio";
        this.style.border = '2px solid red';
        errorDiv.style.border = '1px solid red';
    } else {
        errorDiv.style.display ='none';
        this.style.border = '1px solid #cccccc';
    }   
   }   //validarCampos

   function validarMail() {
       if(this.value.indexOf("@") > -1) {
        errorDiv.style.display ='none';
        this.style.border = '1px solid #cccccc';
       } else {
        errorDiv.style.display= 'block';
        errorDiv.innerHTML= "Debes imgresar al menos @";
        this.style.border = '2px solid red';
        errorDiv.style.border = '1px solid red';

       }
   } //validarMail


   function calcularMontos(event){
       event.preventDefault();
       if(regalo.value ==='') {
           alert("debes elegir un regalo");
           regalo.focus();
       } else{
           var boletosDia = parseInt(pase_dia.value, 10)|| 0,
               boletos2Dias = parseInt(pase_dos_dias.value, 10)|| 0,
               boletoCompleto = parseInt(pase_completos.value, 10)|| 0,
               cantCamisas = parseInt(camisa_evento.value, 10)|| 0,
               cantEtiquetas = parseInt(etiquetas.value, 10)|| 0;

          var totalPagar = (boletosDia * 30) + (boletos2Dias * 45) + (boletoCompleto * 50) + ((cantCamisas * 10) * .93) + (cantEtiquetas * 2);
          console.log(totalPagar);

          var listaProductos = [];

          if(boletosDia >= 1){
            listaProductos.push(boletosDia + 'pase por dia');
          }
          if(boletos2Dias >=1){
            listaProductos.push(boletos2Dias + 'pase por dos dias');
          }
          if(boletoCompleto >=1){
            listaProductos.push(boletoCompleto + 'pase completos');  
          }
          if(cantCamisas >=1){
            listaProductos.push(cantCamisas + 'camisas');  
          }
          if(cantEtiquetas >=1){
            listaProductos.push(cantEtiquetas + 'etiquetas');  
          }

          lista_productos.style.display ="block";
          lista_productos.innerHTML = '';
         for(var i = 0; i< listaProductos.length; i++) {
             lista_productos.innerHTML += listaProductos[i] + '<br/>';   
          }
             
          suma.innerHTML = '$ ' + totalPagar.toFixed(2);
           
              }

       
        }

        function mostrarDias(){
            var boletosDia = parseInt(pase_dia.value, 10)|| 0,
               boletos2Dia = parseInt(pase_dos_dias.value, 10)|| 0,
               boletoCompleto = parseInt(pase_completos.value, 10)|| 0;

               var diasElegidos = [];

               if(boletosDia> 0){
                   diasElegidos.push('viernes');
                   console.log(diasElegidos);
               }
               if(boletos2Dia> 0){
                diasElegidos.push('viernes', 'sabado');
                console.log(diasElegidos);
               }
               if(boletoCompleto> 0){
                diasElegidos.push('viernes', 'sabado', 'domingo');
                console.log(diasElegidos);
               }

               for(var i = 0; i < diasElegidos.length; i++) {

                document.getElementById(diasElegidos[i]).style.display = 'block';
               }

            
            }

          }
   }); //DON center loade
})();

$(function() {
  //menu fijo

  var windowHeight = $(window).height();
  var barraAltura = $('.barra').innerHeight();

  $(window).scroll(function() {
var scroll = $(window).scrollTop();
if(scroll > windowHeight) {
$('.barra').addClass('fixed');
$('body').css({'margin-top': barraAltura+'px'});
} else {
  $('.barra').removeClass('fixed');
  $('body').css({'margin-top':'0px'}); 
}
  });


  //menu Responsive

  $('.menu-movil').on('click', function(){
      $('.navegacion-principal').slideToggle();
  });

//pregramade coferencias

   $('.programa-evento .info-curso:first').show();
   $('.menu-programa a:first').addClass('activo')

$('.menu-programa a').on('click', function(){
    $('.menu-programa a').removeClass('activo');
    $(this).addClass('activo'); 
    $('.ocultar').hide();
    var enlace = $(this).attr('href');
    $(enlace).fadeIn(1000);
    return false;
  });


  //animaciones para los numeros 
  var resumenLista = jQuery('.resumen-evento');
  if(resumenLista.length > 0 ) {
      $('.resumen-evento').waypoint(function(){

        $('.resumen-evento li:nth-child(1) p').animateNumber({number:6}, 1000);
        $('.resumen-evento li:nth-child(2) p').animateNumber({number:15}, 3000);
        $('.resumen-evento li:nth-child(3) p').animateNumber({number:3}, 2000);
        $('.resumen-evento li:nth-child(4) p').animateNumber({number:9}, 1500);

      }, {
        offset: '60%'
      });
  }

//cuneta regresiva

$('.cuenta-regresiva').countdown('2021/05/19 09:00:00', function(event){
$('#dias').html(event.strftime('%D'));
$('#horas').html(event.strftime('%H'));
$('#minutos').html(event.strftime('%M'));
$('#segundos').html(event.strftime('%S'));
});






}); 














