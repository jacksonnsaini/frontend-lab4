import React from "react";

function Task({ task, toggleTask, deleteTask }) {
  return (
    <div>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTask(task.id)}
      />
      <p>{task.name}</p>
      <button onClick={() => deleteTask(task.id)}>
        Done!
      </button>
    </div>
  );
}

export default Task;
