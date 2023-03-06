import { useState } from "react";
import "./App.css";

function App() {
  const [todoList, setTodoList] = useState(["Homework", "Gym", "Coding"]);
  let newTodoList = [...todoList];
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    newTodoList = [...todoList, newTask];
  };

  return (
    <div className="App">
      <div class="addTask">
        <input
          onChange={handleChange}
          type="text"
          style={{
            fontSize: "18px",
            width: "380px",
            height: "30px",
            border: "2px solid green",
            fontFamily: "monospace",
            fontWeight: "bolder",
          }}
        />
        <button
          onClick={addTask}
          style={{
            marginLeft: "10px",
            height: "30px",
            width: "80px",
            fontFamily: "monospace",
            fontWeight: "bolder",
            backgroundColor: "green",
            borderRadius: "5px",
            color: "white",
            cursor: "pointer",
          }}
        >
          Add Task
        </button>
      </div>
      <div
        class="List"
        style={{ fontFamily: "monospace", textAlign: "center", color: "blue" }}
      >
        {newTodoList.map((todo, index) => {
          return (
            <h1>
              TASK {index + 1}:{todo}
            </h1>
          );
        })}
      </div>
    </div>
  );
}

export default App;
