import React, { useState } from "react";
import Task from "../components/task";  
import TaskForm from "../components/taskForm";  

const App: React.FC = () => {
  const [tasks, setTasks] = useState<{ id: number; name: string; completed: boolean }[]>([
    { id: 1, name: "Buy groceries", completed: false },
    { id: 2, name: "Read a book", completed: false },
    { id: 3, name: "Workout", completed: false },
  ]);

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

  return (
    <div>
      <h1>Daily to do list</h1>
      <h3>{tasks.filter((task) => !task.completed).length} tasks remaining</h3>

      <TaskForm addTask={addTask} />

      <div>
        {tasks.map((task) => (
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
