import './App.css';
import CreatePost from '../CreatePost/index.js'
import SearchBar from '../SearchBar/index.js'
import ProjectBoard from '../ProjectBoard/index.js'
import { useState } from 'react';
import samplePosts from '../../data/samplePosts';

function App() {

  // create state and import samplePosts as initial state
  const [posts, setPosts] = useState(samplePosts); 

  return (
    <div className="App">
    <header>
    <h1>Sjardin</h1>
    <p>A collaboration app for learning to code together</p>
    </header>
    
    
    <SearchBar posts={posts} setPosts={setPosts}/>
    <CreatePost posts={posts} setPosts={setPosts}/>
    <ProjectBoard posts={posts}/>
    </div>
  );
}

export default App;
