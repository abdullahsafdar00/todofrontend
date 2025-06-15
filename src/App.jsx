import './index.css';
import React from 'react';
import TaskForm from './components/AddTask';
import Navbar from './components/navbar';

function App() {
  return (
    <div>
      < Navbar/>
      <TaskForm/>
    </div>
  );
}

export default App;
