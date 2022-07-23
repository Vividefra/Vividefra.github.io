
// alert de correo enviado correctamente
document.getElementById ('enviarcorreo').addEventListener('click', function() {
    alert('El correo fue enviado correctamente')

});


// toggle (interruptor tarjetas los destinos destacados)

$('.titulocard').click(function () {
    $('.textocard').toggle("fast", function () {


});

});

// cambia de color con el uso del doble click de blanco hacia amarillo 

$(document).ready(function (){

    
    $('.suscribete').on('dblclick', function(){
        $('.suscribete').css({'color':'yellow'});
    
    });  
    
    
    $('h2').on('dblclick', function(){
        $('h2').css({'color':'red'});
    
    }); 
    
    
    });