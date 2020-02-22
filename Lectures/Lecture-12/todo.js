const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");
// check lS

(function gettaskFromLS() {
    if (localStorage.getItem("TaskList")) {
        const sTasks = localStorage.getItem("TaskList");
        const Tasks = JSON.parse(sTasks);
        for (let i = 0; i < Tasks.length; i++) {
            addtask(Tasks[i]);
        }

    }
})()

function addtask(task) {
    const li = document.createElement("li");
    li.innerHTML = `<p>${task}</p><button class="btn btn-danger">x</button>`;
    const cross = li.querySelector("button");
    cross.addEventListener("click", removeTask)
    ul.appendChild(li);
}

form.addEventListener("submit", function (e) {
    e.preventDefault();
    const task = input.value;
    if (task == "") {
        alert("Please input something");
        return;
    }
    addtask(task)
    addtaskToLS(task);
    input.value = "";

})

function addtaskToLS(task) {
    if (localStorage.getItem("TaskList")) {
        const stringArr = localStorage.getItem("TaskList");
        const tasks = JSON.parse(stringArr);
        tasks.push(task);
        localStorage.setItem("TaskList", JSON.stringify(tasks));

    } else {
        const tasks = [task];
        localStorage.setItem("TaskList", JSON.stringify(tasks));
    }

}

function removeTask(e) {
    // currentTarget => element on which event has occurred;
    const cross = e.currentTarget;
    const children = cross.parentElement.children;
    const rtask = children[0].textContent;
    const sTasks = localStorage.getItem("TaskList");
    const tasks = JSON.parse(sTasks);
    const newTasksArr = tasks.filter(function (task) {
        return task != rtask;

    })

    localStorage.setItem("TaskList", JSON.stringify(newTasksArr));

    cross.parentElement.remove();

}