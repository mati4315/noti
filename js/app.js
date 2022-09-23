let pagina = 1
let peliculas = "";
let ultimaPelicula;



const cargarPeliculas = async() => {
    
// Creamos el observador
let observador = new IntersectionObserver((entradas, observador) => {
	
	entradas.forEach(entrada => {
		if(entrada.isIntersecting){
			pagina++;
			cargarPeliculas();
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
            peliculas+=`
            
    


            <div class="col-xs-12 col-sm-4">
            <div class="card">
              <a class="img-card" href="http://www.fostrap.com/2016/03/5-button-hover-animation-effects-css3.html">
              <img class="img-fluid" src="${data[i].acf.portada}">
            </a>
              <div class="card-content">
                  <h4 class="card-title">
                      <a href=""> ${data[i].title.rendered}
                    </a>
                  </h4>
                  <p class="">
                      ${data[i].excerpt.rendered}
                  </p>
                  <h6>
                  ${data[i].acf.fecha}
                  </h6>
              </div>
              <div class="card-read-more">
                  <a href="" class="btn btn-link btn-block">
                  ${data[i].acf.name_diario}
                  </a>
              </div>
            </div>
            </div>


            

            
      







            `
        

            document.getElementById('contenedor').innerHTML = peliculas

            // x = 100 colocar numero maximo de Paginacion  
            if(pagina < 100){

                if(ultimaPelicula){
                    observador.unobserve(ultimaPelicula);
                }
                
                const peliculasEnPantalla = document.querySelectorAll('.contenedor .img-fluid');
                ultimaPelicula = peliculasEnPantalla[peliculasEnPantalla.length - 1];
                observador.observe(ultimaPelicula);
                                }

            
        }
        }   // Fin de la API
        
        
        
    }
    cargarPeliculas();
    