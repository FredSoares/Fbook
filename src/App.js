import React from 'react';
import Navbar from  './components/Navbar';
import PostList from './components/PostList'
import './App.css'

function App() {
  return (
    <div className="App">
      <Navbar/> 
      <div className="postlist">
        <PostList/>
      </div>
    </div>
  );
}

export default App;
