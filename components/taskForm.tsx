import React, { useState } from "react";

const TaskForm: React.FC<{ addTask: (taskName: string) => void }> = ({ addTask }) => {
  const [newTask, setNewTask] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault(); 
    addTask(newTask);
    setNewTask("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Enter a new task"
      />
      <button type="submit">Add to list</button>
    </form>
  );
};

export default TaskForm;
