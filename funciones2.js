let pagina = 1;
const btnAnterior = document.getElementById('btnAnterior');
const btnSiguiente = document.getElementById('btnSiguiente');

btnSiguiente.addEventListener('click', () => {
	if(pagina < 1000){
		pagina += 1;
		cargarMas();
	}
});

btnAnterior.addEventListener('click', () => {
	if(pagina > 1){
		pagina -= 1;
		cargarMas();
	}
});


const cargarMas = async() => {


fetch(`https://entrer.tk/wp-json/wp/v2/posts?categories=1416&page=${pagina}`)     // Llamar a la API
.then( response => response.json() )                // obtener respuesta
.then( data => mostrarDatos(data) )                 // imprimir resultado
.catch( error => console.log(error) )               // en caso de error  mostrar msj

const mostrarDatos = (data) => {
    let body = ""
        for (var i = 0; i < data.length; i++) {     // Obtiene todo los Registro de la API total 10
               
            body+=
            `


            
<div id="box-principal" class="container">
        <div class="row">
            <div class="col-7" id="columna">
           <h2> ${data[i].title.rendered}</h2>
            </div>
            <div class="col">
                    <img class="img-fluid" src="${data[i].acf.portada}"" style="width: 200px;"">
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
                        <figcaption class="blockquote-footer text-end">
                        ${data[i].acf.fecha}
                        </figcaption>
                </div>
            </div> </div>
            `
            document.getElementById('contenido').innerHTML = body          

}       }   // Fin de la API





}

cargarMas();