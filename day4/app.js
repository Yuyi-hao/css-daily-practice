const addBtn = document.getElementById("add-task-btn");
const taskInput = document.getElementById("input-task");
addBtn.onclick = () => {
        if(taskInput.value.length === 0){
            alert("🙏 Please! Enter a task.");
        }
        else{
            // generate new element every time add a new task 
            document.getElementById("tasks").innerHTML += `
            <div class="task">
                <span id="taskName"> 
                    ${taskInput.value}
                </span>
                <button id="" class="dlt-task">
                    <i class="far fa-trash-alt"></i>
                </button>
            </div>
            `;

            // handle deletion of task 
            var current_task_dlt_btn = document.querySelectorAll(".dlt-task");
            for(var i=0; i<current_task_dlt_btn.length; ++i){
                current_task_dlt_btn[i].onclick = function(){
                        this.parentNode.remove();
                        console.log("Hey! Jane");
                    };
            }

            // strike through task text on completion 
            var current_task = document.querySelectorAll("#taskName");
            for(var i=0; i<current_task.length; ++i){
                current_task[i].onclick = function(){
                    this.classList.toggle("completed");
                    console.log("Hey! Jane");
                    };
            }

            // reset input field 
            taskInput.value = "";
        }
    };