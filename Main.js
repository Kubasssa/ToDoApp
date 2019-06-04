class Main {
    constructor() {
        this.input = document.getElementById("inputText")
        this.menager = document.querySelector(".taskMenager");
        this.addBtn = document.querySelector(".add").addEventListener("click", this.openTaskMenager.bind(this));
        this.confirmBtn = document.querySelector(".confirm").addEventListener("click", this.addTaskToBoard.bind(this));
        this.returnBtn = document.querySelector(".return").addEventListener("click", this.closeTaskMenager.bind(this));
        this.colors = document.querySelectorAll(".color");
        this.tasksBoard = document.querySelector(".tasksBoard");
        this.removeAllBtn = document.querySelector(".removeAll").addEventListener("click", this.removeAllTasks.bind(this));
        document.addEventListener("click", this.removeOneTask);
        this.colors.forEach(el => {
            el.addEventListener("click", this.chooseColor.bind(this));
        })
    }

    openTaskMenager() {
        this.menager.style.left = "50%";
    }

    closeTaskMenager() {
        this.menager.style.left = "150%";
    }

    removeAllTasks() {
        const task = document.querySelectorAll(".task");
        RemoveTask.removeAll(task);
    }

    removeOneTask(e) {
        console.log(e.target.className)
        if (e.target.className == "fas fa-minus") {
            RemoveTask.removeOne(e.target);
        }
    }

    addTaskToBoard() {
        const addtask = new AddTask(this.tasksBoard);
        const taskMenager = new TaskMenager();

        addtask.add(taskMenager.getText(this.input), taskMenager.getColor(this.colors));
        if (this.input.value != "") {
            this.closeTaskMenager();
        }
        this.input.value = "";
    }

    chooseColor(e) {
        this.colors.forEach(element => {
            element.classList.remove("checked");
        });
        e.target.classList.toggle("checked");
    }
}

const main = new Main();