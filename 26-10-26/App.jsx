
import { useState } from 'react'
import './App.css'

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleClick = () => {
    if (task.trim() === "")
      return;

    // add the task to the array
    setTasks([...tasks, { text: task, completed: false }]);
    setTask("");
  };

  const countcompleted = tasks.filter((item) => item.completed).length;

  function toggleTask(index) {
    console.log(index);

    setTasks(
      tasks.map((item, i) =>
        i === index ? { ...item, completed: !item.completed } : item
      )
    );
  }

  return (
    <div>
      <h1>Task Manager Application</h1>

      <label>
        Enter the Task
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
      </label>

      <button onClick={handleClick}>Submit</button>

      <h3>Task List</h3>

      <ul>
        {tasks.map((item, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={item.completed}
              onChange={() => toggleTask(index)}
            />

            <span
              style={{
                textDecoration: item.completed ? "line-through" : "none"
              }}
            >
              {item.text}
            </span>
          </li>
        ))}
      </ul>

      <h1>Completed Task: {countcompleted}</h1>
    </div>
  );
}

export default App;
