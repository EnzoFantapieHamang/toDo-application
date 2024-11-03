document.querySelector("#push").onclick = function(){

    if(document.querySelector(".newtask input").value == ""){
        alert("Veuillez ajouter une tâche");
    }
    else{
        
        document.querySelector(".tasks").innerHTML += 
        `
            <div class="task">
                <span id="taskname">
                    ${document.querySelector(".newtask input").value}
                </span>
                <button class="delete">
                    <i class="fa-solid fa-trash"></i>
                </button>
            </div>
        `
    }

    var current_tasks = document.querySelectorAll(".delete");
    for(let i = 0; i<current_tasks.length; i++){
        current_tasks[i].onclick = function(){
            this.parentNode.remove();
        } 
    }

    var completed_tasks = document.querySelectorAll(".task");
    for (let i = 0; i<completed_tasks.length; i++){
        completed_tasks[i].onclick = function(){
            this.classList.toggle("completed");
        }
    }



}
