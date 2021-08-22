var estadoLicuadora = false;
var licuadora = document.getElementById('blender');

/* Sonidos */
var botonLicuadora  = document.getElementById('blender-button-sound')
var sonidoLicuadora  = document.getElementById('blender-sound')

const controlarLicuadora = () => {

     //estadoLicuadora = estadoLicuadora == false ? true : false

     if (estadoLicuadora == false) {
       estadoLicuadora = true;
       ControlSonidos();
       licuadora.classList.add("active");

     } else {
       estadoLicuadora = false;
       ControlSonidos();
       licuadora.classList.remove("active");

     }
   }
   
   const ControlSonidos = () => {
   if( sonidoLicuadora.paused ){
       botonLicuadora.play();
       sonidoLicuadora.play();
     } else {
       botonLicuadora.play();
       sonidoLicuadora.pause();
       sonidoLicuadora.currentTime = 0;
     }
   }
