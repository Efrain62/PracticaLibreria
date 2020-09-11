// Elementos input con información de libro Nuevo
const autor = document.getElementById('inputAutor')
const titulo = document.getElementById('inputTitulo')
const tabla = document.getElementById('tbody')
const inputBuscar = document

const patern = /^[a-zA-Z0-9]{3,20}$/;
/^[a-zA-ZÁ-ÿ0-9\s]{3,20}$/;

const libro = new Libro()

EventListener()
PrepararDom()


function EventListener(){
    document.getElementById('btnAdd').addEventListener('click', PrepararLibro)
    tabla.addEventListener('click', Acciones)
    document.getElementById('btnVaciar').addEventListener('click', vaciarLibreria)
    document.getElementById('btnBuscar').addEventListener('click', BuscarLibro)
}

let ultimoId = Number(LocalStorangeOperation.ultimoId)()
ultimoId++

function PrepararLibro(){
    
    console.log(ultimoId)

   
    if((autor.value != '' || titulo.value != '') && (patern.test(autor.value) || patern.test(titulo.value))){
        //libro.agregar([autor.value,titulo.value])

        const infoLibro = {
            id: ultimoId,
            titulo: titulo.value.trim(),
            autor: autor.value.trim()
        }

        let tr = libro.agregar([infoLibro])
        console.log(tr);
        tabla.appendChild(tr)
        LocalStorangeOperation.almacenarLibro(infoLibro)

        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Se agregó libro',
            showConfirmButton: false,
            timer: 1000
          })
          autor.value = ''
          titulo.value = ''
      
    }else{
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Error',
            showConfirmButton: false,
            timer: 1000
          })
    }
    
}

function Acciones(){
    //console.log(event.target.tagName);
    if(event.target.tagName === 'I' || event.target.tagName === 'BUTTON'){
        
        // libro.eliminar(event.target.tagName)
       
        // Filtrar botones editar y eliminar
        if(event.target.className.includes('btn-outline-danger') || event.target.className.includes('fa-trash')){
            console.log('eliminado')
            libro.eliminar(event.target)
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Se eliminó el libro',
                showConfirmButton: false,
                timer: 1000
              })
        }
    }
}

function PrepararDom(){
    const librosLS = LocalStorangeOperation.ObtenerLS()
    console.log(librosLS.length);

    for(let i = 0; i<librosLS.length; i++){
        console.log(librosLS[i]);
        // const instanciaLibro = new Libro()
        const tr = libro.agregar(librosLS[i])
        tabla.appendChild(tr)
    }
}

function vaciarLibreria(){
    console.log(tabla.firstChild)
    while(tabla.firstChild){
        tabla.firstChild.remove()
    }
    LocalStorangeOperation.BorrarStorage()
}

function BuscarLibro(){
    event.preventDefault()
    // Validar que el input tenga texto:
    if(inputBuscar.value != ''){

        // Resultado es la salida del método BuscarTitulo que se encuentra en la clase LocasStorageOperation
    let resultado = LocalStorangeOperation.BuscarTitulo(inputBuscar.value.trim().toLowerCase())
    console.log('resultado');
    if(resultado != ''){
        // Cuando una búsqueda genera resultados se imprime una alerta con dichos resultados:
        Swal.fire(
            'Sin resultados',
            `No existe un libro con título ${inputBuscar.value}`, 
            'error'
        )
        // Cuando la búsqueda no genera resultados regresa un '' y se imprime una alerta de error.

    }

    inputBuscar.value = ''
    }

    
}
