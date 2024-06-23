import React from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import './index.css';

const App = () => {
  const [tasks, setTasks] = React.useState([]);

  const addTask = (task) => setTasks([...tasks, task]);
  const deleteTask = (index) => setTasks(tasks.filter((_, i) => i != index));
  const updateTask = (index, newTask) =>
    setTasks(tasks.map((task, i) => (i === index ? newTask : task)));

  console.log(tasks);

  return (
    <div className="container-style">
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} updateTask={updateTask} />
    </div>
  );
};

export default App;
