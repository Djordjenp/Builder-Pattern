// This could also be constructor function
function Task(name, description, isFinished, dueDate) {
    return ({
        name,
        description,
        isFinished,
        dueDate
    })
}

// Builder function
function TaskBuilder(){
    let name;
    let description;
    let isFinished = false;
    let dueDate;

    return {
        setName(name){
            this.name = name
            return this;
        },

        setDescription(description){
            this.description = description
            return this;
        },
        setFinished: function (finished) {
            this.finished = finished;
            return this;
        },
        setDueDate: function (dueDate) {
            this.dueDate = dueDate;
            return this;
        },
        build: function () {
            return Task(name, description, isFinished, dueDate);
        }
    }
}

export default TaskBuilder;