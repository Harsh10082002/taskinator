var task_counter = 0;

var u_l = document.querySelector("#ul")
var progress_ul = document.querySelector("#progress-ul")
var done_ul = document.querySelector("#done-ul")

var add_btn = document.querySelector(".add-task-btn")
add_btn.addEventListener("click", function(event){
    event.preventDefault()
});


var task_field = document.querySelector("input[name='task-name']")

function fun(){

    task_counter += 1;

    var list_item = document.createElement("li")
    list_item.className="li";
    list_item.textContent=task_field.value;
    list_item.setAttribute("data-task-id", task_counter)

    var l_task_id = list_item.getAttribute("data-task-id")

    var break_line = document.createElement("br")

    var dlt_btn = document.createElement("button")
    dlt_btn.className="delete_btn"
    dlt_btn.textContent="Delete"
    dlt_btn.setAttribute("data-task-id", task_counter)
    var dlt_task_id = dlt_btn.getAttribute("data-task-id");
    dlt_btn.onclick=remove_fun;
    function remove_fun(){
        if(dlt_task_id===l_task_id){
            list_item.remove();
        }
    }

    if(task_field.selectionStart>=1){

        list_item.appendChild(break_line)
        list_item.appendChild(dlt_btn)

        var sel = document.getElementById("select-main");
        var text= sel.options[sel.selectedIndex].text;

        if(text==="Tasks For Later"){
            // list_item.appendChild(dlt_btn)
            progress_ul.appendChild(list_item)
        }
        else if(text==="Tasks To Do"){
            u_l.appendChild(list_item)   
        }
        else{
            done_ul.appendChild(list_item)
        }
        task_field.value = ""
    }
    else{
        window.alert("field should'nt be empty!")
    }

}