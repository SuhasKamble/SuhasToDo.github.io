// selectorors

let todoInput=document.querySelector('.todo-input')
let todoButton=document.querySelector('.todo-button')
let todoList=document.querySelector('.todo-list')

//Even Listerner
todoButton.addEventListener('click',addTodo)
todoList.addEventListener('click',deleteCheck)



//functions

function addTodo(e){
    e.preventDefault()
    let todoDiv=document.createElement('div')
    todoDiv.classList.add('todo')

    let newTodo = document.createElement('li')
    newTodo.innerText=todoInput.value;
    newTodo.classList.add('todo-item')
    todoDiv.appendChild(newTodo)

    let completeButton=document.createElement('button')
    completeButton.innerHTML=`<i class='fas fa-check'></i>`
    completeButton.classList.add('complete-btn')
    todoDiv.appendChild(completeButton)


    let trashButton=document.createElement('button')
    trashButton.innerHTML=`<i class='fas fa-trash'></i>`
    trashButton.classList.add('trash-btn')
    todoDiv.appendChild(trashButton)

    todoList.appendChild(todoDiv)
    todoInput.value=''
}

function deleteCheck(e){
    let item=e.target
    if(item.classList[0]==='trash-btn'){
      let todo=item.parentElement;
      todo.remove()

    }
    else if(item.classList[0]==='complete-btn'){
        let todo=item.parentElement;
        todo.classList.toggle('completed')
    }
}