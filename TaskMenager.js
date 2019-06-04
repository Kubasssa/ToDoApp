class TaskMenager {
    constructor() {
        this.colors = ["#ff3333", "royalblue", "#5cd65c", "#ffff4d", "white"];
    }

    getText(input) {
        return input.value;
    }

    getColor(colors) {
        let result = "royalblue";
        colors.forEach((element, i) => {
            if (element.classList.contains("checked")) result = this.colors[i];
        });
        return result;
    }
}