// Ademas, para eliminar la llamada onclick="agregar()" del elemento #boton
// window.onload = function() {
//     document.getElementById('boton').addEventListener('click', agregar);
// }


function agregar() {

    //Recuperamos texto ingresado en textarea 
    var tareas = document.getElementById('tarea').value;
    //Limpiamos textarea
    document.getElementById('tarea').value = '';

    // Valida que textarea no este vacia al presionar boton agregar, se ubica en este punto donde obtenemos
    // lo escrito por el usuario
    if (tareas == null || tareas.length == 0) {
        alert('Error! Debe ingresar una tarea');
        return false;
    }

    //Indicamos donde van a estar las tareas que recupere textarea
    var cont = document.getElementById('contenedor');

    //Creamos nuestros nuevos nodos elementos
    var nuevasTareas = document.createElement('div');
    var textoNuevaTarea = document.createTextNode('tareas');
    var elementoContenedor = document.createElement('span');

    //Asignamos padres a nodos creados
    elementoContenedor.appendChild(textoNuevaTarea);
    nuevasTareas.appendChild(elementoContenedor);
    cont.appendChild(nuevasTareas);

    //Creamos checkbox e íconos, les damos atributo y clases
    var chck = document.createElement('input');
    chck.type = 'checkbox';
    chck.setAttribute('class', 'check');
    var basura = document.createElement('span');
    basura.classList.add('fa', 'fa-trash-o');
    var cora = document.createElement('span');
    cora.classList.add('fa', 'fa-heart');

    //Asignamos padres a nodos creados
    nuevasTareas.appendChild(chck);
    nuevasTareas.appendChild(basura);
    nuevasTareas.appendChild(cora);

    //Agregamos un evento al hacer clic, para que elimine o agregue la clase tachado al elementoContenedor
    chck.addEventListener('click', function() {
        elementoContenedor.classList.toggle('tachado');
    });

    //Removemos la tarea al hacer click enel icono basurero
    basura.addEventListener('click', function() {
        cont.removeChild(nuevasTareas);
    });

    //Creamos funcion click para el corazon y le asignamos la clase red de CSS
    cora.addEventListener('click', function() {
        cora.classList.toggle('red');
    });


}