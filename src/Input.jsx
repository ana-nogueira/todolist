import React from 'react';
import Button from './Button';
import './index.css';

const Input = ({ placeholder }) => {
  return (
    <form style={{ display: 'grid', gridTemplateColumns: '2fr auto' }}>
      <input
        className="input-style"
        type="text"
        name="task"
        placeholder={placeholder}
      />
      <Button />
    </form>
  );
};

export default Input;
