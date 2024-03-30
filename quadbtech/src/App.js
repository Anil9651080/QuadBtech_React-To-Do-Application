
import React from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1 className='title'>QuadBTech’s To-Do List</h1>
      <TaskInput />
      <TaskList />
      <p>I ❤️ especially thank you for using the project. Boost your productivity with our easy-to-use To-Do List application.</p>
    </div>
  );
}

export default App;


