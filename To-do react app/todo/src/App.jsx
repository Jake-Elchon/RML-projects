import { useState } from "react";
import styles from "./App.module.css";
import profile from "./assets/profile.jpeg";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const [taskCount, setTaskCount] = useState(0);
  const [task, setTask] = useState("");

  function HandleTaskInput(e) {
    setTask(e);
  }

  function HandleTaskUpload(task) {
    const Task = {
      checked: false,
      Task: task,
      id: Date.now(),
    };

    setTodoItems([...todoItems, Task]);
    setTaskCount(taskCount + 1);
    setTask(" ");
  }

  function HandleTaskDeletion(taskID) {
    if (todoItems.length === 0) {
      return;
    }
    setTodoItems(todoItems.filter((todo) => todo.id !== taskID));
    setTaskCount(taskCount - 1);
  }

  function HandleTaskClearance() {
    if (todoItems.length === 0) {
      return;
    }

    setTodoItems([]);
    setTaskCount(0);
    setTask(" ");
  }

  function HandleTaskCheck(taskID) {
    setTodoItems(
      todoItems.map((todoItem) =>
        todoItem.id === taskID
          ? { ...todoItem, checked: !todoItem.checked }
          : todoItem,
      ),
    );
  }

  return (
    <>
      <div id={styles.cover__body}></div>
      <div id={styles.todo__section}>
        <div id={styles.todo__headers}>
          <h1>My tasks</h1>
          <div id={styles.imageContainer}>
            <img src={profile} alt="profile photo" />
          </div>
        </div>

        <div id={styles.input__region}>
          <div id={styles.input__region__svgContainer}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={45}
              viewBox="0 0 640 640"
            >
              <path
                fill="rgb(188, 188, 188)"
                d="M512 320C512 214 426 128 320 128C214 128 128 214 128 320C128 426 214 512 320 512C426 512 512 426 512 320zM64 320C64 178.6 178.6 64 320 64C461.4 64 576 178.6 576 320C576 461.4 461.4 576 320 576C178.6 576 64 461.4 64 320zM320 400C364.2 400 400 364.2 400 320C400 275.8 364.2 240 320 240C275.8 240 240 275.8 240 320C240 364.2 275.8 400 320 400zM320 176C399.5 176 464 240.5 464 320C464 399.5 399.5 464 320 464C240.5 464 176 399.5 176 320C176 240.5 240.5 176 320 176zM288 320C288 302.3 302.3 288 320 288C337.7 288 352 302.3 352 320C352 337.7 337.7 352 320 352C302.3 352 288 337.7 288 320z"
              />
            </svg>
          </div>
          <input type="text" placeholder={task === "" ? "Enter your task": task} onChange={(e) => HandleTaskInput(e.target.value)}/>
          <button id="add__todo" onClick={() => HandleTaskUpload(task)}>ADD</button>
        </div>

        <div id={styles.todo__list__region}>
          <div id={styles.todo__statistics}>
            <h3>{taskCount} tasks left</h3>
            <button id={styles.clear__all} onClick={() => HandleTaskClearance()}>Clear all tasks</button>
          </div>

          <div id={styles.todo__elements}>
            {todoItems.length === 0 ? "" :  todoItems.map((todoItem) => (
              <div className={styles.todo__element} key={todoItem.id}>
                <input type="checkbox" name="check" id={styles.todo__task} onChange={() => HandleTaskCheck(todoItem.id)}/>
                <label htmlFor="check">{todoItem.Task}</label>
                <button className={styles.edit__element__svgContainer}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={45}
                    viewBox="0 0 576 512"
                  >
                    <path
                      fill="rgb(201, 200, 200)"
                      d="M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z"
                    />
                  </svg>
                </button>
                <button className={styles.delete__element__svgContainer} onClick={() => HandleTaskDeletion(todoItem.id)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={45}
                    viewBox="0 0 640 640"
                  >
                    <path
                      fill="rgb(240, 4, 4)"
                      d="M232.7 69.9L224 96L128 96C110.3 96 96 110.3 96 128C96 145.7 110.3 160 128 160L512 160C529.7 160 544 145.7 544 128C544 110.3 529.7 96 512 96L416 96L407.3 69.9C402.9 56.8 390.7 48 376.9 48L263.1 48C249.3 48 237.1 56.8 232.7 69.9zM512 208L128 208L149.1 531.1C150.7 556.4 171.7 576 197 576L443 576C468.3 576 489.3 556.4 490.9 531.1L512 208z"
                    />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
