/* window.onload = () => {
const parrafo = document.getElementById('text')
parrafo.innerText = 'nEW TeXt'

const saludo = document.getElementById('saludo')
saludo.innerText = 'Holi'

const parrafo2 = document.getElementById('etiqueta')
parrafo2.innerHTML = '<li>element 1</li><li>element 2</li>'
} */

// aplicación todolist
 
// paso 7 - crar una constate para enlistar nuestras tareas en un array.
const todos = JSON.parse(localStorage.getItem('todos')) || [];
 
// paso 14 - función para optimizar y darle funcionalidad a nuestra app.
const render = () => {
    const todoList = document.getElementById('todo-list');
 
// paso 8.1 simplificar código con .map y agregar un join para unir todos los arrays.
// *join sirve para juntar todos los elementos de un arreglo en donde yo le indique.
 
    const todoTemplate = todos.map( t => '<li>' + t + '</li>');
 
    todoList.innerHTML = todoTemplate.join('');
 
// paso 8.2 Agregamos un nuevo método llamado querySelectorAll para seleccionar mi id #todo-list, seguido de la etiqueta li
//Esto con el objetivo de buscar todo lo que haya en todo-list e iterarlo con el ciclo forEach para que me regresé mis valores
// que guarda mi const elementos
const elementos = document.querySelectorAll('#todo-list  li')
 
    elementos.forEach((elemento, i) => {
 
// paso 8.3 - Acudimos a los eventos, en este caso el evento listener, para escuclar y ver un mensaje en consola una vez demos click
// en nuestro método elemento previamente declarado en una función.
    elemento.addEventListener('click', () => {
 
// paso 8.4 - uso de parentNode, para eliminar elementos usaremos este método ya que tiene la facultad de elimiar a su hijo directo
// con el método removeChild.
 
    elemento.parentNode.removeChild(elemento);
    todos.splice(i, 1);
    actualizaTodos(todos);
    render()
    
 
    } )
   
})
 
}
 
const actualizaTodos = () => {
    const todoString = JSON.stringify(todos)
    localStorage.setItem('todos', todoString);  
}
//paso 1 - llamar nuestro id de todo-form con getElementById.
window.onload =() => {
    render();
    const form = document.getElementById('todo-form');
 
// paso 2 - crear una función para con el método onsubmit para que se pueda ejecutar el botón enviar.
 
form.onsubmit = (e) => {
 
// paso 3 - asignar una palabra reservada de nombre preventDefult para que nuestra aplicación no se reinicie des pués de cada submit.
    e.preventDefault();
 
// paso 4 - llamar nuestro id todo y asignarle el valor con value.
 
    const todo = document.getElementById('todo');
 
// paso 5 - creamos una constante de para aginar el valor de todo que previamente mandamos a llamar con el id todo.
    const todoText = todo.value;
 
// paso 6 - declaramos nuestro valor todo.value con un string vacío
    todo.value = '';
    todos.push(todoText);
    actualizaTodos(todos);
 
    render();
 
//paso 8 - mandamos a llamar nuestro id todo-list para posteriormente enviarle nuestras tareas.
 
 
/* paso 9 - eliminamos por <completo el innerHTML de nuestro todo list con la siguiente línea de código.
todoList.innerHTML = '';
    
// paso 10 - creamos un ciclo for para iterar nuestro array.
    for (let i = 0; i < todos.length; i++) {
 
// paso 11 - posteriormente concatenamos nuestro todoList junto con nuestro todo que están dentro del ciclo for.
 
todoList.innerHTML += '<li>' + todos[i] + '</li>';*/
 
// paso 12 método splice - sirve para indicarle de dónde a dónde quiero elimar elementos de un arreglo por ejemplo
// arr.splice (0, 1) el método eliminará el primer valor del array y retornará un nuevos valores.
 
// paso 13 QuerySelectorAll esto nos permite buscar por id, por clases, por etiqueta, etc, de nuestro HTML.
 
    }
    
}
 
// Esta en el orden como lo fue haciendo el instructor, es por eso que vaya está desordenado.
 