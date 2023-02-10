
var task_btn = document.querySelector("#add-task-btn")
task_btn.addEventListener("click", function(event){event.preventDefault()})

function fun(){
    var task_counter = 0;
    var task_field = document.querySelector("input[name='task-name']")


    var unodered_list = document.querySelector("#ul")
    var list_item = document.createElement('li')

    var edit_btn = document.createElement("button")
    edit_btn.className = "edit_btn"
    edit_btn.textContent = "edit"
    var delete_btn = document.createElement('button')
    delete_btn.className = "delete_btn"
    delete_btn.textContent = "Delete"
    

    list_item.textContent = task_field.value;
    list_item.className = "li"
    list_item.setAttribute("data-id", task_counter)
    console.log(list_item)
    

    if(task_field.selectionStart >= 1){
        list_item.appendChild(edit_btn)
        list_item.appendChild(delete_btn)
        unodered_list.appendChild(list_item)
    }
    task_counter++;

    dltbtn = document.querySelector(".delete_btn")
    dltbtn.addEventListener("click", function(event) {  
        if (event.target.task_counter === 'delete-btn') {

            console.log(task_counter)
        }
    }
    )
    
}