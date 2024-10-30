import React, { useState } from "react";
import Task from "../components/task";
import TaskForm from "../components/taskForm";
import "./App.css"; // Import CSS file for styling

const App: React.FC = () => {
  const [tasks, setTasks] = useState<{ id: number; name: string; completed: boolean }[]>([
    { id: 1, name: "Buy groceries", completed: false },
    { id: 2, name: "Read a book", completed: false },
    { id: 3, name: "Workout", completed: false },
  ]);

  const [filter, setFilter] = useState<"all" | "completed" | "pending">("all");

  const addTask = (taskName: string) => {
    if (taskName) {
      const newTask = { id: Date.now(), name: taskName, completed: false };
      setTasks([...tasks, newTask]);
    }
  };

  const toggleTask = (id: number) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        task.completed = !task.completed;
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const deleteTask = (id: number) => {
    const remainingTasks = tasks.filter((task) => task.id !== id);
    setTasks(remainingTasks);
  };

  const handleFilterChange = (newFilter: "all" | "completed" | "pending") => {
    setFilter(newFilter);
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "pending") return !task.completed;
    return true;
  });

  return (
    <div className="app-container">
      <h1>Daily To-Do List</h1>
      <h3>{tasks.filter((task) => !task.completed).length} tasks remaining</h3>

      <TaskForm addTask={addTask} />

      <div className="filter-buttons">
        <button onClick={() => handleFilterChange("all")}>All</button>
        <button onClick={() => handleFilterChange("completed")}>Completed</button>
        <button onClick={() => handleFilterChange("pending")}>Pending</button>
      </div>

      <div className="task-list">
        {filteredTasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            toggleTask={toggleTask}
            deleteTask={deleteTask}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
