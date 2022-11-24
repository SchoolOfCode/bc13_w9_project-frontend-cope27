import './App.css';
import CreatePost from '../CreatePost/index.js'
import SearchBar from '../SearchBar/index.js'
import ProjectBoard from '../ProjectBoard/index.js'
import { useState, useEffect, useRef } from 'react';
import samplePosts from '../../data/samplePosts';
import logo from '../../sjardin-logo-css.svg'
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
  const [initArray, setInitArray] = useState([]);
  
  useEffect(() => {
    async function getAllposts() {
     let response = await fetch("http://localhost:3005/api/posts", {mode: "cors", method: "GET", headers: {"Content-Type": "application/json",}});
     let data = await response.json();
  
     setPosts([...data.payload]);
     (console.log("The data loaded: ", data))
     console.log("The posts state: ", posts)
     setInitArray([...data.payload]);
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

  function handleClick(searchObject) {
    // update the array posts variable
    // filter over the array by checking where searchObject.tools === post.tool & searchObject.type === post.type
    console.log(initArray)
    const newArray = initArray.filter((post) => {
      return post.projecttools === searchObject.tool || post.projecttype === searchObject.type;
    })
    setPosts([...newArray])
  }

  /*  we want to change the state of posts based on the input values of the search bar component
  Dataflow:
    - search bar sends data > app (project board gets rerendered automatically)
  Data needed:
    - projecttype 
    - projecttools
    - We'll need to send an object state variable that contains these two keyvalues

  // App level
    - we need a function to handle the handleSearch event which sets and filters the array posts this.state.
  fu
  // search bar level we need a state variable of an object that is listening out for changes of the users input in the search bar

  CATCH CLAUSE:
  - when the filter array is applied, check if object values are null to see whether the function should be applied
  */

  return (
    <div className="App">
    <header>
    <div className="logo">
      <img id="standard-green-logo" src={logo} alt='Sjardin-logo' />
    </div>
    {/* <h1 className="title">Sjardin</h1> */}
    <p className="slogan">A collaboration app for learning to code together</p>
    </header>
    <div className="createButtonContainer">
    <button id="create-button" onClick={() => setButtonPopup(true)}>
      Create Post
    </button>

    </div>
    <div className="navbar">
      <SearchBar posts={posts} setPosts={setPosts} handleClick={handleClick}/>
    </div>
    <div>
    <ProjectBoard posts={posts}/>
    
    </div>
    <div><CreatePost handleSubmit={handleSubmit} trigger={buttonPopup} setTrigger={setButtonPopup}/></div>
    </div>
    
  );
}

export default App;
