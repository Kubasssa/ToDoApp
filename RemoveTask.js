class RemoveTask {
    static removeAll(task) {
        if (task.length == 0) {
            alert("nie masz żadnych tasków")
        } else {
            task.forEach(element => {
                element.remove();
            });
        }
    }

    static removeOne(e) {
        console.log(e)
        e.parentNode.remove();
    }
}