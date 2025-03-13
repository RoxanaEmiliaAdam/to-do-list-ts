import { useState, ChangeEvent, ChangeEventHandler } from "react";
import { ITask } from "./ITask";
import ToDoTask from "./Components/ToDoTask";
import { v4 as uuidV4 } from "uuid";

import "./App.css";

function App() {
  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  const [toDoList, setToDoList] = useState<ITask[]>([]);

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setTask(event.target.value);
  };

  const handleDeadlineChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setDeadline(Number(event.target.value));
  };

  // const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
  //   if (event.target.name === "task") {
  //     setTask(event.target.value);
  //   } else {
  //     setDeadline(Number(event.target.value));
  //   }
  // };

  const addTask = (): void => {
    const newTask = { id: uuidV4(), taskName: task, deadline: deadline };
    setToDoList([...toDoList, newTask]);
    setTask("");
    setDeadline(0);
  };

  const completeTask = (taskIdToDelete: string): void => {
    setToDoList(
      toDoList.filter((task) => {
        return task.id != taskIdToDelete;
      })
    );
  };

  return (
    <div className="App">
      <div className="header">
        <div className="inputContainer">
          <input
            type="text"
            placeholder="task..."
            name="task"
            value={task}
            onChange={handleNameChange}
          />
          <input
            type="text"
            placeholder="deadline (in days)..."
            name="deadline"
            value={deadline}
            onChange={handleDeadlineChange}
          />
        </div>
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="todolist">
        {toDoList.map((task: ITask, key: number) => {
          return <ToDoTask key={key} task={task} completeTask={completeTask} />;
        })}
      </div>
    </div>
  );
}

export default App;
