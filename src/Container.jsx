import React from 'react';
import Input from './Input';
import './index.css';

const Container = () => {
  return (
    <div className="container-style">
      <h1 className="title">THINGS TO DO</h1>;
      <Input placeholder="Write your task here" />
    </div>
  );
};

export default Container;
