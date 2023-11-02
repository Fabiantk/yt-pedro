// import './App.css';
import "./todo-list.css";
import { useState, useEffect } from "react";
import { Task } from "./Task";

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  useEffect(() => {}, [tasks, newTask]);

  const addTask = () => {
    if (newTask.trim()) {
      const task = {
        taskName: newTask,
        id: !tasks.length ? 1 : tasks[tasks.length - 1].id + 1,
        checked: "",
      };

      setTasks([...tasks, task]);
    }
  };

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const updateTask = (id) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id)
          return {
            ...task,
            checked: !task.checked ? "true" : "",
          };
        else return task;
      })
    );
  };

  return (
    <div className="todo-list">
      <div className="addTask">
        <input type="text" onChange={handleChange} />
        <button onClick={addTask}>Add Task</button>
      </div>

      <table className="tasklist">
        {tasks.map((task, key) => {
          return (
            <Task
              id={task.id}
              taskName={task.taskName}
              value={key + 1}
              checked={task.checked}
              deleteTask={deleteTask}
              updateTask={updateTask}
            />
          );
        })}
      </table>
    </div>
  );
}

export default TodoList;
