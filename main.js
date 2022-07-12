import './style.css'
import TaskBuilder from "./builder";

const builder = TaskBuilder().setName("Do Dishes")
builder.setDescription("Clean your dishes")
builder.setDueDate("today")
builder.setFinished(false)

const task = builder.build()

//Also see "builder2.js" file