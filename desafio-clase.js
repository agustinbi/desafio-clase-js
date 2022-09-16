class Usuario{
    constructor(nombre,apellido,libros,mascotas) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }
    addBook(nombre,autor){
        const newBook = {nombre: nombre, autor: autor};
        this.libros.push(newBook);
    }

}

const Usuario1 = new Usuario("Agustin","Julian",[{nombre:"It", autor:"sthepen king"}],["tony","lucas"])
Usuario1.addBook("El hobbit","J.R tolkien");
