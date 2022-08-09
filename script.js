function modal_01() {
    Swal.fire({
     title:'50% de descuento',
     html:'<span class="parrafo">en productos destacados de steam</span>',
     background:'linear-gradient(#6B11b4,#0F4FAF)',
     input:'text',
     inputPlaceholder:'Ingresa tu correo',
     confirmButtonText:'Obtenga su 50% de descuento',
     showCancelButton:true,
     cancelButtonText:'No, gracias',
     cancelButtonColor:'#FF9A15',
     showCloseButton:true,
     footer:'<span>Gracias por su visita</span>',
     customClass:{
       title:'titulo',
       input:'input',
       confirmButton:'boton_confirmacion',
       footer:	'mi_footer'
     },
    })
 }
 
 function modal_02() {
   Swal.fire({
     html:'Informate mucho <a href="https://store.steampowered.com/?l=spanish" target="_blank">más aqui</a>',
     confirmButtonText:'¡Aceptar!',
     toast:true,
     icon:'success',
     padding:'1rem',
     position:'top-right',
     showCloseButton:true,
     timer:'3000',
     timerProgressBar:true, 
     customClass:{
       actions:'content'
     }
   })
  
 }
 function modal_03() {
 Swal.fire({
   title:'Iniciar sesion',
   padding:'2rem',
   showCloseButton:true,
   showConfirmButton:false,
   html:'<div class="modal-body">'+
   '<div class="buttons_modal">' +
     '<button class="btn_facebook"><a href="https://www.facebook.com/" target="_blank">Ingresa con Facebook</a></button>'+
     '<button class="btn_google"><a href="https://accounts.google.com/signin/v2/identifier?passive=1209600&continue=https%3A%2F%2Faccounts.google.com%2FEditPasswd%3Fhl%3Des&followup=https%3A%2F%2Faccounts.google.com%2FEditPasswd%3Fhl%3Des&hl=es&flowName=GlifWebSignIn&flowEntry=ServiceLogin" target="_blank">Ingresa con Gmail</a></button>'+
     '<button class="btn_email" id="btn_email"><a href="https://login.live.com/login.srf?wa=wsignin1.0&rpsnv=13&ct=1660081593&rver=7.0.6737.0&wp=MBI_SSL&wreply=https%3a%2f%2foutlook.live.com%2fowa%2f%3fnlp%3d1%26RpsCsrfState%3d1d8f4873-46dd-2f89-fc87-87482eae3033&id=292841&aadredir=1&CBCXT=out&lw=1&fl=dob%2cflname%2cwld&cobrandid=90015" target="_blank">Ingresa con tu email</a></button>'+
   '</div>'+
   '<div class="link_form_registro">'+
     '<p>¿Aún no tienes cuenta? <b class="link_registrate" id="link_modal_registro" data-bs-toggle="modal" data-bs-target="#MuestraModalRegistro">Regístrate</b></p>'+
   '</div>'+
 '</div>',	
 })
 }