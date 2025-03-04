import React from "react";
import { ITask } from "../ITask";

interface Props {
  task: ITask;
  completeTask(taskNameToDelete: string): void;
}

export default function ToDoTask({ task, completeTask }: Props) {
  return (
    <div className="task">
      <div className="content">
        <span>{task.taskName}</span>
        <span>{task.deadline} </span>
      </div>
      <button
        onClick={() => {
          completeTask(task.taskName);
        }}
      >
        deleteBtn
      </button>
    </div>
  );
}
