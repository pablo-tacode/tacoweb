const en= document.getElementById("en");
const es= document.getElementById("es")
const esMobile = document.getElementById("es-mobile");
const enMobile = document.getElementById("en-mobile");
const headerEs = document.getElementById("header-circle");
const headerEn = document.getElementById("header-ball");

$(document).ready(()=>{
    $(en).click(()=>{
      $("#about").attr({
        "title" : "Squad"
      });
      $('#Nosotros').attr('id','Squad')

      $("#services").attr({
        "title" : "Services"
      });
      $('#Servicios').attr('id','Services')
      

      $("#contact").attr({
        "title" : "Contact"
      });
      $('#Contacto').attr('id','Contact')

    });
  });

  $(document).ready(()=>{
    $(es).click(()=>{
      $("#about").attr({
        "title" : "Nosotros"
      });
      $('#Squad').attr('id','Nosotros')

      $("#services").attr({
        "title" : "Servicios"
      });
      $('#Services').attr('id','Servicios')
      
      $("#contact").attr({
        "title" : "Contacto"
      });

      $('#Contact').attr('id','Contacto')
    });
  });

  $(document).ready(()=>{
    $(enMobile).click(()=>{
      $("#about").attr({
        "title" : "Squad",
      
      });
      $('#Nosotros').attr('id','Squad')

      $("#services").attr({
        "title" : "Services",
        
      });
      $('#Servicios').attr('id','Services')
     
      $("#contact").attr({
        "title" : "Contact"
      });
       $('#Contacto').attr('id','Contact')

    });

  
  });

  $(document).ready(()=>{
    $(esMobile).click(()=>{
      $("#about").attr({
        "title" : "Nosotros"
        
      });

      $('#Squad').attr('id','Nosotros')
    
      $("#services").attr({
        "title" : "Servicios"
      });

      $('#Services').attr('id','Servicios')

      $("#contact").attr({
        "title" : "Contacto"
      });

      $('#Contact').attr('id','Contacto')
    });
  });

  const hideEn = () => {
    
  
    en.classList.add('hide');
    es.classList.remove('hide');
    headerEs.classList.add('hide');
    headerEn.classList.remove('hide');


  }
  en.addEventListener('click', hideEn)

  const hideEs = () => {
    
  
    es.classList.add('hide');
    en.classList.remove('hide');
    headerEs.classList.remove('hide');
    headerEn.classList.add('hide');


  }
  es.addEventListener('click', hideEs)

  const hideEng = () => {
    
  
    enMobile.classList.add('hide');
    esMobile.classList.remove('hide');
    headerEs.classList.add('hide');
    headerEn.classList.remove('hide');

  }
  enMobile.addEventListener('click', hideEng)

  const hideSpa = () => {
    
  
    esMobile.classList.add('hide');
    enMobile.classList.remove('hide');
    headerEs.classList.remove('hide');
    headerEn.classList.add('hide');

  }
  esMobile.addEventListener('click', hideSpa)