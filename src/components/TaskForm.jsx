import React from "react";

const TaskForm = ({ createTask, name, handelInputChange, label }) => {
  return (
    <form className="task-form" onSubmit={createTask}>
      <input
        type="text"
        placeholder="Add a Task"
        name="name"
        value={name}
        onChange={handelInputChange}
      />
      <button type="submit">{label}</button>
    </form>
  );
};

export default TaskForm;
