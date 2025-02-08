let allTasks = [];



    allTasks = JSON.parse(localStorage.getItem("tasks"));
  


function Tasks(title, isDone, dateTask) {
    this.title = title;
    this.isDone = isDone;
    this.dateTask = dateTask;
    allTasks.push(this);
}

function saveTasks() {
    let stringTasksArr = JSON.stringify(allTasks)
    localStorage.setItem("tasks", stringTasksArr);
}


function doneTask(i) {
    allTasks[i].isDone = !allTasks[i].isDone;
    saveTasks(); 

    let taskElement = document.getElementById(`task-${i}`);
    let checkButton = document.getElementById(`chicked${i}`);

    if (allTasks[i].isDone) {
        taskElement.style.backgroundColor = `rgb(158, 253, 160)`;
        checkButton.innerHTML = `<i class="fas fa-times"></i>`;
        checkButton.style.backgroundColor = "rgb(234, 79, 52)";
    } else {
        taskElement.style.backgroundColor = `rgb(241, 247, 241)`;
        checkButton.innerHTML = `<i class="fas fa-check"></i>`;
        checkButton.style.backgroundColor = "#5e5a78";
    }
}

function updateTask(i) {
    let newTask = prompt("تعديل عنوان مهمة", allTasks[i].title);
    if (newTask !== null) {
        allTasks[i].title = newTask;
        saveTasks();
        showTasks();
    }
}

function deleteTask(i) {
    let taskName = allTasks[i].title;
    let isConfirmed = confirm(`هل أنت متأكد من حذف المهمة: ${taskName}`);
    if (isConfirmed) {
        allTasks.splice(i, 1);
        saveTasks(); 
        showTasks();
    }
}

function showTasks() {
    let tasksContainer = document.getElementById("tasks");
    tasksContainer.innerHTML = "";

    for (let i = 0; i < allTasks.length; i++) {
        let formattedDate = new Date(allTasks[i].dateTask).toISOString().split('T')[0];

        let content = `
            <div class="task-list">
                <div class="task" id="task-${i}">
                    <div class="task-info">
                        <h3>${allTasks[i].title}</h3>
                        <input type="date" value="${formattedDate}">
                    </div>
                    <div class="task-buttons">
                        <button onClick="deleteTask(${i})"><i class="fas fa-trash"></i></button>
                        <button id="chicked${i}" onClick="doneTask(${i});"><i class="fas fa-check"></i></button>
                        <button onClick="updateTask(${i})"><i class="fas fa-edit"></i></button>
                    </div>
                </div>
            </div>
        `;

        tasksContainer.innerHTML += content;
    }
}

document.getElementById("addTask").addEventListener("click", function () {
    let newTask = prompt("أدخل المهمة الجديدة");
    if (newTask) {
        new Tasks(newTask, false, new Date());
        saveTasks();
        showTasks();
    }
});



showTasks();



// console.log(allTasks);
