import { useState } from "react";
import "./App.css";

function App() {
  const [done, setDone] = useState([]);
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    const newTodoList = [...todoList, newTask];
    setTodoList(newTodoList);
    setDone([...done, "0"]);
    document.getElementById("input").value = "";
  };

  const completeTask = (index) => {
    setDone([...done, { id: index, name: "1" }]);
  };

  return (
    <div className="App">
      <div class="addTask">
        <input
          id="input"
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
        style={{
          fontFamily: "monospace",
          color: "blue",
          textAlign: "left",
          marginTop: "50px",
        }}
      >
        <div>
          <table
            style={{
              fontSize: "0.9em",
              borderRadius: "10px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            {todoList.map((todo, index) => {
              if (done[index] === "0") {
                return (
                  <tr
                    style={{
                      backgroundColor: "#ff7b25",
                      color: "black",
                      borderRadius: "10px",
                    }}
                  >
                    <td>
                      <span
                        style={{
                          fontSize: "28px",
                          fontWeight: "bolder",
                          padding: "10px",
                        }}
                      >
                        TASK {index + 1}:{todo}
                      </span>
                    </td>
                    <td style={{ padding: "10px" }}>
                      {" "}
                      <button
                        onClick={() => completeTask(index)}
                        style={{
                          marginLeft: "10px",
                          height: "30px",
                          width: "150px",
                          fontFamily: "monospace",
                          fontWeight: "bolder",
                          backgroundColor: "red",
                          borderRadius: "5px",
                          color: "white",
                          cursor: "pointer",
                        }}
                      >
                        Complete Task
                      </button>
                    </td>
                  </tr>
                );
              } else {
                return (
                  <tr
                    style={{
                      backgroundColor: "#86af49",
                      color: "black",
                      borderRadius: "10px",
                    }}
                  >
                    <td>
                      <span
                        style={{
                          fontSize: "28px",
                          fontWeight: "bolder",
                          padding: "10px",
                        }}
                      >
                        TASK {index + 1}:{todo}
                      </span>
                    </td>
                    <td style={{ padding: "10px" }}>
                      {" "}
                      <button
                        style={{
                          marginLeft: "10px",
                          height: "30px",
                          width: "150px",
                          fontFamily: "monospace",
                          fontWeight: "bolder",
                          backgroundColor: "green",
                          borderRadius: "5px",
                          color: "white",
                          cursor: "pointer",
                        }}
                      >
                        Done
                      </button>
                    </td>
                  </tr>
                );
              }
            })}
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
