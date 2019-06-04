class AddTask {
    constructor(taskBoard) {
        this.taskBoard = taskBoard;
    }

    add(text, color) {
        if (!text == "") {
            const taskDiv = document.createElement("div");
            taskDiv.style.backgroundColor = color;
            taskDiv.classList.add("task");
            taskDiv.appendChild(this.createInsideTextDiv(text));
            taskDiv.appendChild(this.createDeleteIcon());

            if (text.length > 80) taskDiv.style.minHeight = "130px"
            else if (text.length > 40) taskDiv.style.minHeight = "90px"
            this.taskBoard.appendChild(taskDiv);
        } else alert("podaj treść taska")
    }

    createDeleteIcon() {
        // const iconContainer = document.createElement("div");
        // iconContainer.classList.add("ic");
        const icon = document.createElement("i");
        icon.classList.add("fas", "fa-minus");
        // iconContainer.appendChild(icon);
        return icon
    }

    createInsideTextDiv(text) {
        const insideText = document.createElement("div");
        insideText.textContent = text;
        insideText.classList.add("insideText");
        return insideText
    }
}