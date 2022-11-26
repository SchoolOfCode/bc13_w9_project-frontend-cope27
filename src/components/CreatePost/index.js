import "../App/App.css";
import { useState } from "react";

function CreatePost({ handleSubmit, trigger, setTrigger }) {
  const [postObject, setPostObject] = useState({
    username: "",
    projectgoal: "",
    projecttype: "Build",
    projecttools: "CSS",
    collaborators: 1,
  });

  function handleUsername(e) {
    console.log(e.target.value);
    setPostObject({ ...postObject, username: e.target.value });
  }

  function handleProjectGoal(e) {
    console.log(e.target.value);
    setPostObject({ ...postObject, projectgoal: e.target.value });
  }

  function handleProjectType(e) {
    setPostObject({ ...postObject, projecttype: e.target.value });
  }

  function handleProjectTools(e) {
    setPostObject({ ...postObject, projecttools: e.target.value });
  }

  return trigger ? (
    <div className="createPost">
      <div className="popup-inner">
        <h2>Where would you like to grow?</h2>
        {/* BUILD/STUDY/PAIR */}
        <label htmlFor="categories">Plant a Seed: </label>
        <select name="categories" id="categories" onChange={handleProjectType}>
          <option value="Build">Build</option>
          <option value="Study">Study</option>
          <option value="Pair">Pair</option>
        </select>
        <br />
        {/* PROJECT GOAL*/}
        <label>Project Goal: </label>
        <input type="text" onChange={handleProjectGoal}></input>
        <br />
        {/* PROJECT TOOLS */}
        <label htmlFor="Tools">Tool I'll be using: </label>
        <select name="Tools" id="Tools" onChange={handleProjectTools}>
          <option value="CSS">CSS</option>
          <option value="HTML">HTML</option>
          <option value="JavaScript">JavaScript</option>
          <option value="Node">Node.js</option>
          <option value="React">React</option>
          <option value="SQL">SQL</option>
        </select>
        <br />
        {/* USERNAME */}
        <label>Username: </label>
        <input type="text" onChange={handleUsername}></input>
        <br />
        {/* SUBMIT BUTTON */}
        <button
          className="submitButton"
          onClick={() => {
            handleSubmit(postObject);
            setTrigger(false);
          }}
        >
          SUBMIT
        </button>
        <br />
        {/* CLOSE BUTTON */}
        <button className="close-btn" onClick={() => setTrigger(false)}>
          Cancel
        </button>
      </div>
    </div>
  ) : (
    ""
  );
}

export default CreatePost;