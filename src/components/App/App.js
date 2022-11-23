import './App.css';
import CreatePost from '../CreatePost/index.js'
import SearchBar from '../SearchBar/index.js'
import ProjectBoard from '../ProjectBoard/index.js'
import { useState } from 'react';
import samplePosts from '../../data/samplePosts';

function App() {

  // create state and import samplePosts as initial state
  const [posts, setPosts] = useState(samplePosts); 

  // on handleSubmit we wil have a function that spreads out the previous array of postObjects and append the new object
  function handleSubmit(postObject) {
    console.log('You clicked me!');
    setPosts([...posts, postObject])
    console.log(postObject)
  }

  return (
    <div className="App">
    <header>
    <h1 className="title">Sjardin</h1>
    <p className="slogan">A collaboration app for learning to code together</p>
    </header>
    
    
    <SearchBar posts={posts} setPosts={setPosts}/>
    <CreatePost handleSubmit={handleSubmit}/>
    <ProjectBoard posts={posts}/>
    </div>
  );
}

export default App;
