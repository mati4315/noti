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




           <a class="example-image-link" href="${data[i].acf.image}" data-lightbox="example-1" data-title="${data[i].title.rendered}">
                    <img src="${data[i].acf.portada}" class="img-fluid">
                    </a>


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
    



    $('#exampleModalLabel').on('shown.bs.modal', function () {
        $('#exampleModal').trigger('focus')
      })


