import "../App/App.css";
import { useState } from "react";

function CreatePost({ handleSubmit, trigger, setTrigger }) {
  const [postObject, setPostObject] = useState({
    id: null,
    username: "",
    projectgoal: "",
    projecttype: "",
    projecttools: "",
    collaborators: null,
  });

  /* handle/functions/ here listen out for the user input and update the postObject accordingly */
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
        <label htmlFor="categories">Plant a Seed: </label>
        <select name="categories" id="categories" onChange={handleProjectType}>
          <option value="Build">Build</option>
          <option value="Study">Study</option>
          <option value="Pair">Pair</option>
        </select>
        <br />

        <label>Project Goal: </label>
        <input type="text" onChange={handleProjectGoal}></input>
        <br />
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

        <label>Username: </label>
        <input type="text" onChange={handleUsername}></input>
        <br />

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
