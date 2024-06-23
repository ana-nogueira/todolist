import React from 'react';
import './index.css';

const TaskForm = ({ addTask }) => {
  const [task, setTask] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      // Verifica se a tarefa não está vazia
      addTask(task);
      setTask('');
    } else {
      alert('Task cannot be empty'); // Opcional: alerta o usuário
    }
  };
  return (
    <div>
      <h1 className="title">GERENCIADOR DE TAREFAS</h1>;
      <form className="editUpdateForm" onSubmit={handleSubmit}>
        <input
          className="input-style"
          style={{ borderBottom: '2px solid #D49DA1', background: 'none' }}
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Write your task here"
        />
        <button type="submit" className="addBtn">
          +
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
