import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPenToSquare,
  faTrash,
  faCheck,
} from '@fortawesome/free-solid-svg-icons';
import './index.css';

const Task = ({ task, deleteTask, updateTask }) => {
  const [isEditing, setIsEditing] = React.useState(false);
  const [newTask, setNewTask] = React.useState(task);

  const handleClick = () => {
    updateTask(newTask);
    setIsEditing(false);
  };

  return (
    <li>
      {isEditing ? (
        <>
          <form className="updateForm">
            <input
              className="input-style"
              style={{ backgroundColor: ' rgb(72 93 106 / 25%)' }}
              onChange={(e) => setNewTask(e.target.value)}
            />
            <button onClick={handleClick} className="submitBtn">
              <FontAwesomeIcon icon={faCheck} style={{ color: '#10111c' }} />
            </button>
          </form>
        </>
      ) : (
        <>
          <div className="taskContainer">
            <form>
              <input
                type="checkbox"
                onClick={(event) =>
                  event.target.nextElementSibling.classList.toggle('checked')
                }
              />
              <span
                style={{
                  color: '#fff',
                  fontSize: '1rem',
                  textTransform: 'uppercase',
                }}
                className=""
              >
                {task}
              </span>
            </form>
            <div>
              <button
                className="editDeleteBtn"
                onClick={() => setIsEditing(true)}
              >
                <FontAwesomeIcon
                  icon={faPenToSquare}
                  style={{ color: '#727c96' }}
                />
              </button>
              <button className="editDeleteBtn" onClick={deleteTask}>
                <FontAwesomeIcon icon={faTrash} style={{ color: '#D49DA1' }} />
              </button>
            </div>
          </div>
        </>
      )}
    </li>
  );
};

export default Task;
