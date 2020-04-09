var arrayOfTodos;
const fetchTodos = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then( (response) => response.json())
    .then( (json) => arrayOfTodos = json)
  }

  const newButton = () => {
      document.getElementById ("todo-list")
      .innerHTML = ""
      var toDos = document.getElementById ("todo-list")
        console.log (toDos)
        var numberInputted = document.getElementById ("number-input") .value
        console.log (numberInputted)
        var i;
        for (i = 0; i < arrayOfTodos.length; i++) {
        if (arrayOfTodos [i] .userId == numberInputted) {
            var newElement = document.createElement ("li")
            newElement.innerHTML = arrayOfTodos [i] .title
            toDos.appendChild (newElement)
            if (arrayOfTodos [i] .completed == false) {
                newElement.style.color = "red"
            }
        
        }
    }
  }

  const remove = () => {
    document.getElementById ("todo-list")
    .innerHTML = ""
  }

  const complete = () => {
    document.getElementById ("todo-list")
    .innerHTML = ""
    var toDos = document.getElementById ("todo-list")
        console.log (toDos)
        var i;
        for (i = 0; i < arrayOfTodos.length; i++) {
        if (arrayOfTodos [i] .completed == true) {
            var newElement = document.createElement ("li")
            newElement.innerHTML = arrayOfTodos [i] .title
            toDos.appendChild (newElement)
        }
    }
  }

  const notCompleted = () => {
    document.getElementById ("todo-list")
    .innerHTML = ""
    var toDos = document.getElementById ("todo-list")
        console.log (toDos)
        var i;
        for (i = 0; i < arrayOfTodos.length; i++) {
        if (arrayOfTodos [i] .completed == false) {
            var newElement = document.createElement ("li")
            newElement.innerHTML = arrayOfTodos [i] .title
            toDos.appendChild (newElement)
                newElement.style.color = "red"
            }
    }
  }


  const populateTodos = () => {
    var toDos = document.getElementById ("todo-list")
    console.log (toDos)
    var i;
    for (i = 0; i < arrayOfTodos.length; i++) {
        var newElement = document.createElement ("li")
        newElement.innerHTML = arrayOfTodos [i] .title
        toDos.appendChild (newElement)
        if (arrayOfTodos [i] .completed == false) {
            newElement.style.color = "red"
        }
}
  }