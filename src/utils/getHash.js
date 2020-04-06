const getHash = () => 
    location.hash.slice(1).toLocaleLowerCase().split('/')[1] || '/'; //|| o si no que mande a la raiz del proyecto
    // ['', '1', '']esto es lo que hace y con el [1] esta trayendo el id
    //hash significasdo en el archivo apuntes word
// slice sirve para eliminar el primer elemento osea el 1

/*.split(’/’) separa la cadena en un array, y elimina el / quedando un espacio vacio Ej [’’, ‘1’ ,’’]
[1] trae el primer elemento del split anterior que en este caso es 1 (representa la id 1)
@gndx
*/

export default getHash;