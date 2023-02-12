var u_l = document.querySelector("#ul")
var progress_ul = document.querySelector("#progress-ul")
var done_ul = document.querySelector("#done-ul")

var add_btn = document.querySelector(".add-task-btn")
add_btn.addEventListener("click", function(event){
    event.preventDefault()
});


var task_field = document.querySelector("input[name='task-name']")

function fun(){

    // console.log(option_text)

    var list_item = document.createElement("li")
    list_item.className="li";

    list_item.textContent=task_field.value;

    var break_line = document.createElement("br")

    var dlt_btn = document.createElement("button")
    dlt_btn.className="delete_btn"
    dlt_btn.textContent="Delete"

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
    
}