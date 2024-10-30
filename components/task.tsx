import React from "react";

interface TaskProps {
  task: {
    id: number;
    name: string;
    completed: boolean;
  };
  toggleTask: (id: number) => void;
  deleteTask: (id: number) => void;
}

function Task({ task, toggleTask, deleteTask }: TaskProps) {
  return (
    <div className="task">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTask(task.id)}
        disabled={task.completed} 
      />
      <p>{task.name}</p>
      <button onClick={() => deleteTask(task.id)}>
        Done!
      </button>
    </div>
  );
}

export default Task;
