// import { useState } from "react";
// import "./App.css";
// import Blogs from "./Blogs";

// function App() {
//   const [blogs,setBlogs] = useState([
//     { title: "My new website", body: "lorem ipsum", author: "mario", id: 1 },
//     { title: "Welcome party!", body: "lorem ipsum", author: "yoshi", id: 2 },
//     { title: "Web dev top tips", body: "lorem ipsum", author: "mario", id: 3 },
//   ]);

//   return (
//     <div className="App">
//       {blogs.map((blog) => {
//         return(
//           <Blogs id={blog.id} title={blog.title} author={blog.author}/>
//         );
//       })}
//     </div>
//   );
// }

// export default App;

// import { useState } from "react";
// import "./App.css";
// import Planets from "./Planets";

// function App() {
//   const planets = [
//     { name: "Mars", isGasPlanet: false },
//     { name: "Earth", isGasPlanet: false },
//     { name: "Jupiter", isGasPlanet: true },
//     { name: "Venus", isGasPlanet: false },
//     { name: "Neptune", isGasPlanet: true },
//     { name: "Uranus", isGasPlanet: true },
//   ];
//   return (
//     <div className="App">
//       {planets.map((planet) => !planet.isGasPlanet && <h1 style={{color:"blue"}}>{planet.name}</h1>)}
//     </div>
//   );
// }

// export default App;

// import { useState } from "react";
// import "./App.css";

//useState - > Rerenders the the UI of the App

// function App() {
//   let [age, setAge] = useState(21);

//   const increaseAge = () => {
//     setAge(age + 1);
//   };

//   const decreaseAge = () => {
//     setAge(age - 1);
//   };

//   return (
//     <div className="App">
//       <h1>React Time Machine</h1>
//       <h2 style={{ color: "rgb(240, 144, 11)" }}>Your current Age:{age}</h2>
//       <br />
//       <button
//         onClick={increaseAge}
//         style={{
//           color: "blue",
//           width: "180px",
//           height: "50px",
//           fontWeight: "bolder",
//           cursor: "pointer",
//         }}
//       >
//         Increase Age (+)
//       </button>
//       <button
//         onClick={decreaseAge}
//         style={{
//           color: "green",
//           width: "180px",
//           height: "50px",
//           fontWeight: "bolder",
//           cursor: "pointer",
//           marginLeft: "30px",
//         }}
//       >
//         Decrease Age (-)
//       </button>
//     </div>
//   );
// }

// export default App;

// using react states

// import { useState } from "react";
// import "./App.css";

//useState - > Rerenders the the UI of the App

// function App() {
//   const [inputValue,setInputValue] = useState("");
//   const HandleInputValue = (event) => {
//     setInputValue(event.target.value);
//   };
//   return (
//     <div className="App">
//       <input
//         onChange={HandleInputValue}
//         type="text"
//         style={{
//           fontWeight:"bolder",
//           width: "150px",
//           height: "35px",
//           border: "3px solid blue",
//         }}
//       />
//       <h2>Message:{inputValue}</h2>
//     </div>
//   );
// }

// export default App;

// Change color using react

// import { useState } from "react";
// import "./App.css";

//   function App() {
//   let [changeText, setChangeText] = useState(true);
//   return (
//     <div className="App">
//       <button
//         onClick={() => {
//           setChangeText(!changeText);
//         }}
//         style={{
//           color: "blue",
//           width: "180px",
//           height: "35px",
//           fontWeight: "bolder",
//           cursor: "pointer",
//         }}
//       >
//         Change color
//       </button>
//       <h2
//         style={
//           changeText
//             ? {
//                 color: "green",
//                 fontWeight: "bolder",
//               }
//             : {
//                 color: "black",
//                 fontWeight: "bolder",
//               }
//         }
//       >
//         Message Shown
//       </h2>
//     </div>
//   );
// }

// export default App;

// Counter app

// import { useState } from "react";
// import "./App.css";

// function App() {
//   let [count, setCount] = useState(0);

//   const increase=()=>{
//     setCount(count+1);
//   }
//   const decrease=()=>{
//     setCount(count-1);
//   }
//   const setToZero=()=>{
//     setCount(0);
//   }

//   return (
//     <div className="App">
//       <h2 style={{ fontFamily: "monospace" }}>COUNT:{count}</h2>
//       <button
//         onClick={increase}
//         style={{
//           fontFamily: "monospace",
//           fontWeight: "bolder",
//           width: "180px",
//           height: "35px",
//           borderRadius: "8px",
//           backgroundColor: "red",
//           marginTop: "30px",
//           cursor:"pointer"
//         }}
//       >
//         Increase ( + )
//       </button>
//       <br />
//       <button
//         onClick={decrease}
//         style={{
//           fontFamily: "monospace",
//           fontWeight: "bolder",
//           width: "180px",
//           height: "35px",
//           borderRadius: "8px",
//           backgroundColor: "rgb(255, 168, 5)",
//           marginTop: "30px",
//           cursor:"pointer"
//         }}
//       >
//         Decrease ( - )
//       </button>
//       <br />
//       <button
//         onClick={setToZero}
//         style={{
//           fontFamily: "monospace",
//           fontWeight: "bolder",
//           width: "180px",
//           height: "35px",
//           borderRadius: "8px",
//           backgroundColor: "green",
//           marginTop: "30px",
//           cursor:"pointer"
//         }}
//       >
//         Set to Zero
//       </button>
//       <br />
//     </div>
//   );
// }

// export default App;

// TodoList App (1.0)

// import { useState } from "react";
// import "./App.css";

// function App() {
//   const [todoList, setTodoList] = useState([]);
//   const [newTask, setNewTask] = useState("");

//   const handleChange = (event) => {
//     setNewTask(event.target.value);
//   };

//   const addTask = () => {
//     const newTodoList = [...todoList, newTask];
//     setTodoList(newTodoList);
//     document.getElementById("input").value = "";
//   };

//   const completeTask = (index) => {
//     setTodoList(
//       todoList.filter(
//         (task, taskIndex) => taskIndex !== index
//         //filter function returns true for the element that need to be remained after filtering
//         // if (taskIndex === index) {
//         //   return false;
//         // } else {
//         //   return true;
//         // }
//       )
//     );
//   };

//   const deleteAllTasks = () => {
//     setTodoList([]);
//   };

//   return (
//     <div className="App">
//       <div class="addTask">
//         <input
//           id="input"
//           onChange={handleChange}
//           type="text"
//           style={{
//             fontSize: "18px",
//             width: "380px",
//             height: "30px",
//             border: "2px solid green",
//             fontFamily: "monospace",
//             fontWeight: "bolder",
//           }}
//         />
//         <button
//           onClick={addTask}
//           style={{
//             marginLeft: "10px",
//             height: "30px",
//             width: "80px",
//             fontFamily: "monospace",
//             fontWeight: "bolder",
//             backgroundColor: "green",
//             borderRadius: "5px",
//             color: "white",
//             cursor: "pointer",
//           }}
//         >
//           Add Task
//         </button>
//         <button
//           onClick={deleteAllTasks}
//           style={{
//             marginLeft: "10px",
//             height: "30px",
//             width: "180px",
//             fontFamily: "monospace",
//             fontWeight: "bolder",
//             backgroundColor: "orange",
//             borderRadius: "5px",
//             color: "black",
//             cursor: "pointer",
//           }}
//         >
//           Delete all tasks
//         </button>
//       </div>
//       <div
//         class="List"
//         style={{
//           fontFamily: "monospace",
//           color: "blue",
//           textAlign: "left",
//           marginTop: "50px",
//         }}
//       >
//         <div>
//           <table
//             style={{
//               fontSize: "0.9em",
//               borderRadius: "10px",
//               marginLeft: "auto",
//               marginRight: "auto",
//             }}
//           >
//             {todoList.map((todo, index) => {
//               return (
//                 <tr
//                   style={{
//                     backgroundColor: "#ff7b25",
//                     color: "black",
//                     borderRadius: "10px",
//                   }}
//                 >
//                   <td>
//                     <span
//                       style={{
//                         fontSize: "28px",
//                         fontWeight: "bolder",
//                         padding: "10px",
//                       }}
//                     >
//                       TASK {index + 1}:{todo}
//                     </span>
//                   </td>
//                   <td style={{ padding: "10px" }}>
//                     {" "}
//                     <button
//                       onClick={() => completeTask(index)}
//                       style={{
//                         marginLeft: "10px",
//                         height: "30px",
//                         width: "150px",
//                         fontFamily: "monospace",
//                         fontWeight: "bolder",
//                         backgroundColor: "red",
//                         borderRadius: "5px",
//                         color: "white",
//                         cursor: "pointer",
//                       }}
//                     >
//                       Complete Task
//                     </button>
//                   </td>
//                 </tr>
//               );
//             })}
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;

// TodoList 2.0

// import { useState } from "react";
// import "./App.css";

// function App() {
//   const [todoList, setTodoList] = useState([]);
//   const [newTask, setNewTask] = useState("");

//   const handleChange = (event) => {
//     setNewTask(event.target.value);
//   };

//   const addTask = () => {
//     const task = {
//       id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
//       done: 0,
//       taskName: newTask,
//     };
//     const newTodoList = [...todoList, task];
//     setTodoList(newTodoList);
//     document.getElementById("input").value = "";
//   };

//   const completeTask = (index) => {
//     const updatedTodoList = todoList.map((task) => {
//       if (task.id === index) {
//         return { ...task, done: 1 };
//       }
//       return task;
//     });
//     setTodoList(updatedTodoList);
//   };

//   const deleteTask = (index) => {
//     const newTodoList = todoList.filter((task) => {
//       return task.id === index ? false : true;
//     });
//     setTodoList(newTodoList);
//   };

//   const deleteAllTasks = () => {
//     setTodoList([]);
//   };

//   return (
//     <div className="App">
//       <div class="addTask">
//         <input
//           id="input"
//           onChange={handleChange}
//           type="text"
//           style={{
//             fontSize: "18px",
//             width: "380px",
//             height: "30px",
//             border: "2px solid green",
//             fontFamily: "monospace",
//             fontWeight: "bolder",
//           }}
//         />
//         <button
//           onClick={addTask}
//           style={{
//             marginLeft: "10px",
//             height: "30px",
//             width: "80px",
//             fontFamily: "monospace",
//             fontWeight: "bolder",
//             backgroundColor: "green",
//             borderRadius: "5px",
//             color: "white",
//             cursor: "pointer",
//           }}
//         >
//           Add Task
//         </button>
//         <button
//           onClick={deleteAllTasks}
//           style={{
//             marginLeft: "10px",
//             height: "30px",
//             width: "180px",
//             fontFamily: "monospace",
//             fontWeight: "bolder",
//             backgroundColor: "orange",
//             borderRadius: "5px",
//             color: "black",
//             cursor: "pointer",
//           }}
//         >
//           Delete all tasks
//         </button>
//       </div>
//       <div
//         class="List"
//         style={{
//           fontFamily: "monospace",
//           color: "blue",
//           textAlign: "left",
//           marginTop: "50px",
//         }}
//       >
//         <div>
//           <table
//             style={{
//               fontSize: "0.9em",
//               borderRadius: "10px",
//               marginLeft: "auto",
//               marginRight: "auto",
//             }}
//           >
//             {todoList.map((todo) => {
//               if (todo.done === 0) {
//                 return (
//                   <tr
//                     style={{
//                       backgroundColor: "#ff7b25",
//                       color: "black",
//                       borderRadius: "10px",
//                     }}
//                   >
//                     <td>
//                       <span
//                         style={{
//                           fontSize: "28px",
//                           fontWeight: "bolder",
//                           padding: "10px",
//                         }}
//                       >
//                         TASK {todo.id}:{todo.taskName}
//                       </span>
//                     </td>
//                     <td style={{ padding: "10px" }}>
//                       {" "}
//                       <button
//                         onClick={() => completeTask(todo.id)}
//                         style={{
//                           marginLeft: "10px",
//                           height: "30px",
//                           width: "150px",
//                           fontFamily: "monospace",
//                           fontWeight: "bolder",
//                           backgroundColor: "green",
//                           borderRadius: "5px",
//                           color: "white",
//                           cursor: "pointer",
//                         }}
//                       >
//                         Complete Task
//                       </button>
//                     </td>
//                   </tr>
//                 );
//               } else if (todo.done === 1) {
//                 return (
//                   <tr
//                     style={{
//                       backgroundColor: "#86af49",
//                       color: "black",
//                       borderRadius: "10px",
//                     }}
//                   >
//                     <td>
//                       <span
//                         style={{
//                           fontSize: "28px",
//                           fontWeight: "bolder",
//                           padding: "10px",
//                         }}
//                       >
//                         TASK {todo.id}:{todo.taskName}
//                       </span>
//                     </td>
//                     <td style={{ padding: "10px" }}>
//                       {" "}
//                       <button
//                         onClick={() => deleteTask(todo.id)}
//                         style={{
//                           marginLeft: "10px",
//                           height: "30px",
//                           width: "150px",
//                           fontFamily: "monospace",
//                           fontWeight: "bolder",
//                           backgroundColor: "red",
//                           borderRadius: "5px",
//                           color: "white",
//                           cursor: "pointer",
//                         }}
//                       >
//                         Delete Task
//                       </button>
//                     </td>
//                   </tr>
//                 );
//               }
//             })}
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;





