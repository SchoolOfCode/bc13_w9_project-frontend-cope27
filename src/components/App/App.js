import './App.css';
import CreatePost from '../CreatePost/index.js'
import SearchBar from '../SearchBar/index.js'
import ProjectBoard from '../ProjectBoard/index.js'
import { useState, useEffect } from 'react';
import samplePosts from '../../data/samplePosts';
import logo from '../../sjardin-logo-green.svg'
//import cors from 'cors';


function App() {
  const [posts, setPosts] = useState(samplePosts); //empty this state when switching to live database 
  const [buttonPopup, setButtonPopup] = useState(false);
  
  // useEffect(() => {
  //   async function getAllposts() {
  //    let response = await fetch("http://localhost:3005/api/posts", {method: "GET", headers: {"Content-Type": "application/json",}});
  //    let data = await response.json();
  //    (console.log(data))
  //    setPosts(data.payload);
  //   }
  //   getAllposts();
  // }, []);

  // useEffect(() => {
  //  async function createAPost() {
  //   const post = await fetch("http://localhost:3005/api/posts", {method: "POST", headers: {"Content-Type": "application/json",}, body: {
  //     "userName": "Steph",
  //     "projectGoal": "Build an API for helping people",
  //     "projectType": "Build",
  //     "projectTools": "Express",
  //     "collaborators": "4"
  // } });
  //   //const data = await post.json();
  //  }
  //  createAPost();
  //  console.log('useEffect has worked')
  // }, [])

  //JSON.stringify(posts[-1])


  // Create Route (POST) for creating a new post 
    //create a post 
      //convert stringify data



  // create state and import samplePosts as initial state
  //const [posts, setPosts] = useState(samplePosts); //empty this state when switching to live database 

  // on handleSubmit we wil have a function that spreads out the previous array of postObjects and append the new object
  function handleSubmit(postObject) {
    console.log('You clicked me!');
    setPosts([...posts, postObject])
    console.log(postObject)
  }

  return (
    <div className="App">
    <header>
    <div className="logo">
      <img id="standard-green-logo" src={logo} alt='Sjardin-logo' />
    </div>
    {/* <h1 className="title">Sjardin</h1> */}
    <p className="slogan">A collaboration app for learning to code together</p>
    </header>
    <div className="create-button">
    <button onClick={() => setButtonPopup(true)}>
      Create Post
    </button>
    </div>
    <div className="navbar">
      <CreatePost handleSubmit={handleSubmit} trigger={buttonPopup} setTrigger={setButtonPopup}/>
      <SearchBar posts={posts} setPosts={setPosts}/>
    </div>
    <ProjectBoard posts={posts}/>
    </div>
  );
}

export default App;
