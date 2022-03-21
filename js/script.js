let container = document.getElementById("container");
let input = document.querySelector('input');
let add = document.getElementById('add');
let tasks = document.createElement('ul');
let counter = 0;

tasks.className = 'todo__tasks';
container.append(tasks);


function addTask(){
    if(input.value == ""){
        alert("Поле ввода не может быть пустым!");
    } else{
        counter++;
        done = false;
            

        let task = document.createElement('li');
        task.className = "todo-task task";
        task.id = `task${counter}`

        task.innerText = input.value;
        input.value = "";
        tasks.append(task);    

        task.addEventListener('click', function(){
            currentTask = document.getElementById(task.id);

            // if(done == true){
            if(currentTask.style.cssText == "text-decoration: line-through;"){
                currentTask.style.cssText = "text-decoration: none;"
            } else{
                currentTask.style.cssText = "text-decoration: line-through;"
            }
        })

        
        task.addEventListener('dblclick', function(){
            task.parentNode.removeChild(task)
    })
    }
}


add.addEventListener('click', function(){
    addTask();
})


input.addEventListener('keydown', event =>{
    // fromCharCode(event.which);

    if(event.code === 'Enter'){
        addTask()
    }else{
        console.log('nope')
    }
})

