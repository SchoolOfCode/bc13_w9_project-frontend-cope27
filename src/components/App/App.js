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
  
  useEffect(() => {
    async function getAllposts() {
     let response = await fetch("http://localhost:3005/api/posts", {mode: "cors", method: "GET", headers: {"Content-Type": "application/json",}});
     let data = await response.json();
     (console.log(data))
     setPosts(data.payload);
    }
    getAllposts();
  }, []);

  useEffect(() => {

   

   async function createAPost(posts) {
    // const tempBody = {
    //   username: "te39248394",
    //   projectgoal: "sdfdsfsdfThing",
    //   projecttype: "Build",
    //   projecttools: "SQL",
    //   collaborators: 123
    // };

    // we need an alternative way of getting the created post
    const postObject = posts[posts.length-1];



    const post = await fetch("http://localhost:3005/api/posts", 
    {
      method: "POST", 
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      }, 
      body: JSON.stringify(postObject)
    }
    );
    if (post.success) {
      console.log("Post was success");    
    }
    //const data = await post.json();
   }
   createAPost(posts);
   console.log('CreateAPost useEffect has worked')
   // THIS DEPENDENCY DOES NOT WORK ON A DELETE REQUEST
  }, [posts])

  //JSON.stringify(posts[-1])


  // Create Route (POST) for creating a new post 
    //create a post 
      //convert stringify data



  // create state and import samplePosts as initial state
  //const [posts, setPosts] = useState(samplePosts); //empty this state when switching to live database 

  // on handleSubmit we wil have a function that spreads out the previous array of postObjects and append the new object
  function handleSubmit(postObject) {
    console.log('You clicked postObject');
    setPosts([...posts, postObject])
    console.log("handleSubmit postObject: ", postObject)
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
    
    <button onClick={() => setButtonPopup(true)}>
      Create Post
    </button>
    <div className="navbar">
      <CreatePost handleSubmit={handleSubmit} trigger={buttonPopup} setTrigger={setButtonPopup}/>
      <SearchBar posts={posts} setPosts={setPosts}/>
    </div>
    <ProjectBoard posts={posts}/>
    </div>
  );
}

export default App;
