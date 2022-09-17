class Usuario{
    constructor(nombre,apellido,libros,mascotas) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }
    addBook(nombre, autor){
        const newBook = {nombre: nombre, autor: autor};
        console.log(newBook);
        this.libros.push(newBook)
        
    }
    
    addMascota(nombre) {
    const newMascota = {nombre: nombre};
    console.log(newMascota);
    this.mascotas.push(newMascota);
    }
    countMascotas(){
    const contar = this.mascotas.length
    console.log(contar)
    
    }
    
    getFullName(){
    console.log('mi nombre es ${this.nombre} ${this.apellido}')
    
    }
      getBookNames(){
      let coleccion = this.libros
      let nombre = [];
          coleccion.map(libros=>{
          nombre.push(libro.nombre)
     })
          
          console.log(nombre)
    
                        
                        
    }
    
    }

const usuarioUno = new Usuario("Agustin","Julian",[{nombre:"It", autor:"sthepen king"}],["ricky","adolf"])

console.log(usuarioUno)
usuarioUno.addBook("Orgullo y Prejuicio","Jane Austen")
usuarioUno.addMascota("monina")
usuarioUno.countMascotas()
usuarioUno.getFullName()
usuarioUno.getBookNames()

