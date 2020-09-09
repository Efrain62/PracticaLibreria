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
    }

}