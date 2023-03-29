import "./App.css";
import CreatePost from "../CreatePost/index.js";
import SearchBar from "../SearchBar/index.js";
import ProjectBoard from "../ProjectBoard/index.js";
import { useState, useEffect } from "react";
import logo from "../../sjardin-logo-css.svg";

function App() {
  const [posts, setPosts] = useState([]);
  const [buttonPopup, setButtonPopup] = useState(false);
  const [newPost, setNewPost] = useState({});
  const [toggle, setToggle] = useState(false);
  const [searchObject, setSearchObject] = useState({
    all: true,
    projectTool: "Build",
    projectType: "CSS",
  });

  /** GET request from database on mount of the app
   *
   */
  useEffect(() => {
    async function getAllposts() {
      let response = await fetch("https://sjardin-backend-repo.onrender.com/api/posts", {
        mode: "cors",
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      let data = await response.json();

      setPosts([...data.payload]);
      console.log("The data loaded: ", data);
      console.log("The posts state: ", posts);
    }
    getAllposts();
  }, []);

  /** POST request upon the user creating a newPost (which is the useEffect's dependency)
   *
   */
  useEffect(() => {
    if (toggle) {
      async function createAPost(newPost) {
        console.log("useEffect postObject from state: ", newPost);
        const post = await fetch("https://sjardin-backend-repo.onrender.com/api/posts", {
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
      }

      createAPost(newPost);
      console.log("CreateAPost useEffect has worked");
      setToggle(false);
    } else {
      console.log("Unexpected error - check if toggle is false");
    }
  }, [newPost]);

  /** handleSubmit takes in the postObject by the users in CreatePost and updates the state variable newPost
   *
   * @param {*} postObject
   */
  function handleSubmit(postObject) {
    console.log("You clicked postObject");
    setToggle(true);
    setNewPost(postObject);
    console.log("handleSubmit postObject: ", postObject);
  }

  /**handleClick takes in the filterValue object from searchBar which keys are then used to update the searchObject which is used by ProjectBoard to re-render a filtered list
   *
   * @param {*} searchObject
   */
  function handleClick(filterValues) {
    setSearchObject({
      ...searchObject,
      all: false,
      projectTool: filterValues.projectTool,
      projectType: filterValues.projectType,
    });
  }

  function handleClickReset() {
    setSearchObject({
      ...searchObject,
      all: true,
    });
  }

  return (
    <div className="App">
      <header>
        <div className="logo">
          <img id="standard-green-logo" src={logo} alt="Sjardin-logo" />
        </div>
        {/* <h1 className="title">Sjardin</h1> // h1 element removed in favour of logo image */}
        <p className="slogan">
          A collaboration app for learning to code together
        </p>
      </header>
      <div className="createButtonContainer">
        <button id="create-button" onClick={() => setButtonPopup(true)}>
          Create Post
        </button>
      </div>
      {/* This div below is purely for testing. Potentially app interfering so please delete if render is not as expected. */}
      <div role="article"></div>
      <div className="navbar">
        <SearchBar
          handleClick={handleClick}
          handleClickReset={handleClickReset}
        />
      </div>
      <div>
        <ProjectBoard posts={posts} searchObject={searchObject} />
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
