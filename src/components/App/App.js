import "./App.css";
import CreatePost from "../CreatePost/index.js";
import SearchBar from "../SearchBar/index.js";
import ProjectBoard from "../ProjectBoard/index.js";
import { useState, useEffect, useRef } from "react";
import logo from "../../sjardin-logo-css.svg";

function App() {
  const [posts, setPosts] = useState([]);
  const [buttonPopup, setButtonPopup] = useState(false);
  const [newPost, setNewPost] = useState({});
  const [toggle, setToggle] = useState(false);
  /* initArray info
  This stores the initial get request so it can be used in the handleClick function so the search filter can work */
  const [initArray, setInitArray] = useState([]);

  useEffect(() => {
    async function getAllposts() {
      let response = await fetch("http://localhost:3005/api/posts", {
        mode: "cors",
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      let data = await response.json();
      setPosts([...data.payload]);
      console.log("The data loaded: ", data);
      console.log("The posts state: ", posts);
      setInitArray([...data.payload]);
    }
    getAllposts();
  }, []);

  useEffect(() => {
    if (toggle) {
      async function createAPost(newPost) {
        console.log("useEffect postObject from state: ", newPost);
        const post = await fetch("http://localhost:3005/api/posts", {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newPost),
        });

        if (post.success) {
          console.log("Post was success");
        }
        setPosts([...posts, newPost]);
        //const data = await post.json();
      }
      createAPost(newPost);
      console.log("CreateAPost useEffect has worked");
      setToggle(false);
    } else {
      console.log("Toggle is false! Hahah.");
    }
    // THIS DEPENDENCY DOES NOT WORK ON A DELETE REQUEST
  }, [newPost]);

  /* handleSubmit
  when handleSubmit runs, set toggle to true
  use if condition in useEffect and when useEffect ends, set toggle to false */
  function handleSubmit(postObject) {
    console.log("You clicked postObject");
    setToggle(true);
    setNewPost(postObject);
    console.log("handleSubmit postObject: ", postObject);
  }

  /* Current issue logged in comment
  Because this function uses the initialArray state, it will not filter new posts added to the database. */
  function handleClick(searchObject) {
    console.log(initArray);
    const newArray = initArray.filter((post) => {
      return (
        post.projecttools === searchObject.tool ||
        post.projecttype === searchObject.type
      );
    });
    setPosts([...newArray]);
  }

  return (
    <div className="App">
      <header>
        <div className="logo">
          <img id="standard-green-logo" src={logo} alt="Sjardin-logo" />
        </div>
        {/* <h1 className="title">Sjardin</h1> */}
        <p className="slogan">
          A collaboration app for learning to code together
        </p>
      </header>
      <div className="createButtonContainer">
        <button id="create-button" onClick={() => setButtonPopup(true)}>
          Create Post
        </button>
      </div>
      <div className="navbar">
        <SearchBar
          posts={posts}
          setPosts={setPosts}
          handleClick={handleClick}
        />
      </div>
      <div>
        <ProjectBoard posts={posts} />
      </div>
      <div>
        <CreatePost
          handleSubmit={handleSubmit}
          trigger={buttonPopup}
          setTrigger={setButtonPopup}
        />
      </div>
    </div>
  );
}

export default App;