class LocalStorangeOperation{

    static almacenarLibro(infoLibro){
        console.log(infoLibro);
        let arrayLibros = this.ObtenerLS()
        arrayLibros.push(infoLibro)
        //console.log(arrayLibros)
        localStorage.setItem('Libros', JSON.stringify(arrayLibros))

    }
    static ObtenerLS(){
        if(localStorage.getItem('Libros') === null){
            // console.log('Vacio')
            return []
        }else{
            // console.log('Si hay libros');
            return JSON.parse(localStorage.getItem('Libros'))
        }
    }

    static BorrarStorage(){
        localStorage.clear()
    }

    static BorrarLibro(idLibro){
        console.log(idLibro)
        let arrayLibros = this.ObtenerLS()
        console.log(arrayLibros);
        let arregloNuevo = []

        for(let i = 0; i<arrayLibros.length; i++){
            if(idLibro != arrayLibros[i].id) arregloNuevo.push(arrayLibros[i])
        }
        console.log(arregloNuevo)
        localStorage.setItem('Libros', JSON.stringify(arregloNuevo))
    }

    static ultimoId(){
        let arrayLibros = this.ObtenerLS()
        if(arrayLibros == 0) return 0
        return(arrayLibros[arrayLibros.length - 1].id)
    }

    static BuscarTitulo(titulo){
        // Título viene de app.js y es el valor de un input:
        // Para nuestro método, título será nuestro parámetro de búsqueda.
        let arrayLibros= this.ObtenerLS();
        let resultados= '';
        for(let i=0; i<arrayLibros.length; i++){
            if(arrayLibros[i].titulo.tolowerCase() == titulo){
                resultados= arrayLibros[i];
            }
        }
        return resultados;
    }
    static validarTitulo(titulo, autor){
        let arrayLibros= this.ObtenerLS();
        let band=0;
        for(let i=0; i<arrayLibros.length; i++){
            if{(titulo == arrayLibros[i].titulo.trin().tolowerCase()) && (autor == arrayLibros[i].autor.trin().tolowerCase)}
       band= i;
        }
    }
return band;
}