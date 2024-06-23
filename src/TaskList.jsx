import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, deleteTask, updateTask }) => {
  return (
    <ul>
      {tasks.map(
        (task, index) => (
          console.log(task),
          (
            <Task
              key={index}
              task={task}
              deleteTask={() => deleteTask(index)}
              updateTask={(newTask) => updateTask(index, newTask)}
            />
          )
        ),
      )}
    </ul>
  );
};

export default TaskList;
