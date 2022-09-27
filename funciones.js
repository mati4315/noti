let pagina = 1
let noticias = "";
let ultimanoticias;



const cargarnoticias = async() => {
    
// Creamos el observador
let observador = new IntersectionObserver((entradas, observador) => {
    
    entradas.forEach(entrada => {
        if(entrada.isIntersecting){
            pagina++;
            cargarnoticias();
        }
    });
}, {
    rootMargin: '0px 0px 800px 0px',
    threshold: 1.0,
});

    
    
    
       const respuesta = fetch(`https://entrer.tk/wp-json/wp/v2/posts?page=${pagina}`)     // Llamar a la API
        .then( response => response.json() )                // obtener respuesta
        .then( data => mostrarDatos(data) )                 // imprimir resultado
        
        
        
        const mostrarDatos = (data) => {
            
        for (var i = 0; i < data.length; i++) {     // Obtiene todo los Registro de la API total 10
            // Titulo    
            noticias+=`
            
            <div id="box-principal" class="container">
            <div class="row">
                <div class="col-7" id="columna">
                    <div class"titulo"> ${data[i].title.rendered}</div>
                </div>
    
    
                
    
            
    
               
    
    
    
              <div class="col">
    
              <a href="${data[i].acf.portada}" data-lightbox="mygallery" data-title="My caption">
                        <img src="${data[i].acf.portada}" class="img-fluid">
                        </a>
    
    
    
    
    
                        <br>
    
    
    
                        <!-- Button trigger modal -->
                        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#s${data[i].id}">
                          Launch demo modal
                        </button>
                        
                        <!-- Modal -->
                        <div class="modal fade" id="s${data[i].id}"  aria-hidden="true">
                          <div class="modal-dialog">
                          
                       
                        
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                              
                           <br>
                              <img src="${data[i].acf.image}" >
    
                              
                            </div>
                       
                        </div>
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
                    </div> 
                    </div>
                    <div class="row">
                        <div class="col">
                            <div class="nombre_diario">
                              <b> <u>${data[i].acf.name_diario}</u></b>
                            </div>
                        </div>
                    </div>
    
                    <div class="row align-items-center">
                    <div id="nota-diario" class="col">
    
                    <p><h6>${data[i].excerpt.rendered}</h6></p>
    
                    
    
    
    
    
    
    
                    <!-- Button trigger modal -->
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#id${data[i].id}">
     > Leer Mas...
    </button>
    
    <!-- Modal -->
    <div class="modal fade" id="id${data[i].id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Cdelu Noticias - Contenido</h5>
            <button type="button"  data-bs-dismiss="modal">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
          ${data[i].acf.contenido_full}
         </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
            
          </div>
        </div>
      </div>
    </div>
    
    
    
    
    
    
    
    
    
    
    
    
                            <figcaption class="blockquote-footer text-end">
                            ${data[i].acf.fecha}
                            </figcaption>
                    </div>
                </div> </div>
            
            `





            
            document.getElementById('contenedor').innerHTML = noticias

            // x = 100 colocar numero maximo de Paginacion  
            if(pagina < 100){

                if(ultimanoticias){
                    observador.unobserve(ultimanoticias);
                }
                
                const noticiasEnPantalla = document.querySelectorAll('.contenedor .img-fluid');
                ultimanoticias = noticiasEnPantalla[noticiasEnPantalla.length - 1];
                observador.observe(ultimanoticias);
                                }

            
        }
        }   // Fin de la API
        
        
        
    }
    cargarnoticias();
















// comienza el menu para telefonos / Tablet



/**
* Template Name: Butterfly - v4.9.0
* Template URL: https://bootstrapmade.com/butterfly-free-bootstrap-theme/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let header = select('#header')
    let offset = header.offsetHeight

    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
    })
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Mobile nav dropdowns activate
   */
  on('click', '.navbar .dropdown > a', function(e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault()
      this.nextElementSibling.classList.toggle('dropdown-active')
    }
  }, true)

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      e.preventDefault()

      let navbar = select('#navbar')
      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

  /**
   * Initiate glightbox 
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Porfolio isotope and filter
   */
  window.addEventListener('load', () => {
    let portfolioContainer = select('.portfolio-container');
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
      });

      let portfolioFilters = select('#portfolio-flters li', true);

      on('click', '#portfolio-flters li', function(e) {
        e.preventDefault();
        portfolioFilters.forEach(function(el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        portfolioIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });

      }, true);
    }

  });

  /**
   * Initiate portfolio lightbox 
   */
  const portfolioLightbox = GLightbox({
    selector: '.portfolio-lightbox'
  });

  /**
   * Portfolio details slider
   */
  new Swiper('.portfolio-details-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Testimonials slider
   */
  new Swiper('.testimonials-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Initiate galleery lightbox 
   */
  const galleeryLightbox = GLightbox({
    selector: '.galleery-lightbox'
  });

  /**
   * Initiate Pure Counter 
   */
  new PureCounter();

})()


// Finaliza el menu para telefonos / Tablet