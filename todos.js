var listEl = document.querySelector('#app ul')
var inputEl = document.querySelector('#app input')
var btnEl = document.querySelector('#app button')

var todos = [
    'Alguma coisa',
    'Alguma coisa2',
    'Alguma coisa3'
]

function renderTodos(){
    //especifico para arrays
        listEl.innerHTML = ''
        for (todo of todos){
        var todoEl = document.createElement('li')
        var todotext = document.createTextNode(todo)

        var linkEl = document.createElement('a')
        linkEl.setAttribute('href', '#')

        var pos = todos.indexOf(todo)
        linkEl.setAttribute('onclick' , 'delTodo('+ pos +')')
        var linkText = document.createTextNode('Excluir')

        linkEl.appendChild(linkText)
        todoEl.appendChild(todotext)
        todoEl.appendChild(linkEl)
        listEl.appendChild(todoEl)
        
    }
}

renderTodos()

function addTodo(){
    var todotext = inputEl.value

    todos.push(todotext)
    inputEl.value = ''
    renderTodos()
}

btnEl.onclick = addTodo

function delTodo(pos){
    todos.splice(pos, 1)
    renderTodos()
}