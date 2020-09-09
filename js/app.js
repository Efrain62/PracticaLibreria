// Elementos input con información de libro Nuevo
const autor = document.getElementById('inputAutor')
const titulo = document.getElementById('inputTitulo')
const tabla = document.getElementById('tbody')

const patern = /^[a-zA-Z0-9]{3,20}$/;
/^[a-zA-ZÁ-ÿ0-9\s]{3,20}$/;

const libro = new Libro()

EventListener()
PrepararDom()


function EventListener(){
    document.getElementById('btnAdd').addEventListener('click', PrepararLibro)
    tabla.addEventListener('click', Acciones)
    document.getElementById('btnVaciar').addEventListener('click', vaciarLibreria)
}

let id = 0

function PrepararLibro(){

   
    if((autor.value != '' || titulo.value != '') && (patern.test(autor.value) || patern.test(titulo.value))){
        //libro.agregar()

        const infoLibro = {
            id: id ++,
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

