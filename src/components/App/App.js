import './App.css';
import CreatePost from '../CreatePost/index.js'
import SearchBar from '../SearchBar/index.js'
import ProjectBoard from '../ProjectBoard/index.js'
import { useState, useEffect } from 'react';
import samplePosts from '../../data/samplePosts';
import logo from '../../sjardin-logo-green.svg'
//import cors from 'cors';


// when handleSubmit runs, set toggle to true 
// use if condition in useEffect
// when useEffect ends, set toggle to false



function App() {
  //const [posts, setPosts] = useState(samplePosts); //empty this state when switching to live database 
  const [posts, setPosts] = useState([]);
  const [buttonPopup, setButtonPopup] = useState(false);
  const [newPost, setNewPost] = useState({});
  const [toggle, setToggle] = useState(false);
  
  useEffect(() => {
    async function getAllposts() {
     let response = await fetch("http://localhost:3005/api/posts", {mode: "cors", method: "GET", headers: {"Content-Type": "application/json",}});
     let data = await response.json();
  
     setPosts([...data.payload]);
     (console.log("The data loaded: ", data))
     console.log("The posts state: ", posts)
    }
    getAllposts();
  }, []);

  useEffect(() => {

  if (toggle){
    async function createAPost(newPost) {
      console.log("useEffect postObject from state: ", newPost)
      const post = await fetch("http://localhost:3005/api/posts", 
        {
          method: "POST", 
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          }, 
          body: JSON.stringify(newPost)
        }
      );

      if (post.success) {
        console.log("Post was success");    
      }
      setPosts([...posts, newPost])
      //const data = await post.json();
    }

    createAPost(newPost);
    console.log('CreateAPost useEffect has worked')
    setToggle(false);
  } else {
    console.log("Toggle is false! Hahah.");
  }
    // THIS DEPENDENCY DOES NOT WORK ON A DELETE REQUEST
  }, [newPost])


  //JSON.stringify(posts[-1])


  // Create Route (POST) for creating a new post 
    //create a post 
      //convert stringify data



  // create state and import samplePosts as initial state
  //const [posts, setPosts] = useState(samplePosts); //empty this state when switching to live database 

  // on handleSubmit we wil have a function that spreads out the previous array of postObjects and append the new object
  function handleSubmit(postObject) {
    console.log('You clicked postObject');
    setToggle(true);
    setNewPost(postObject);

    //setPosts([...posts, postObject])
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
    <div>
    <button className="create-button" onClick={() => setButtonPopup(true)}>
      Create Post
    </button>

    </div>
    <div className="navbar">
      <SearchBar posts={posts} setPosts={setPosts}/>
    </div>
    <div>
    <ProjectBoard posts={posts}/>
    
    </div>
    <div><CreatePost handleSubmit={handleSubmit} trigger={buttonPopup} setTrigger={setButtonPopup}/></div>
    </div>
    
  );
}

export default App;
