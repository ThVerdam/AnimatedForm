var inputElement = document.querySelector('#list input');
var buttonElement = document.querySelector('#list button');
var listElement = document.querySelector('#list ul');

var todos = JSON.parse(localStorage.getItem('list_todos')) || ['List', 'Your', 'ToDo'];

function renderTodos() {
    listElement.innerHTML = '';

    for (todo of todos) {
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);
        var linkElement = document.createElement('a');
        var linkText = document.createTextNode('Excluir');
        var pos = todos.indexOf(todo);

        linkElement.setAttribute('href', '#');
        linkElement.setAttribute('onclick', 'removeTodo(' + pos + ')');
        linkElement.appendChild(linkText);
        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);
        listElement.appendChild(todoElement);
    }
}

renderTodos();

function addTodo() {
    var todoText = inputElement.value;

    todos.push(todoText);
    inputElement.value = '';

    renderTodos();
    saveTodo();
}
buttonElement.onclick = addTodo;

function removeTodo(pos) {
    todos.splice(pos, 1);

    renderTodos();
    saveTodo()
}

function saveTodo() {
    localStorage.setItem('list_todos', JSON.stringify(todos))
}