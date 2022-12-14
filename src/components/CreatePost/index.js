//import React from "react";
import "../App/App.css";
import { useState } from "react";

//Goal: be able to send input data as a data object up to main App level
// useState for username input (name, setName) = initial state- empty string DONE
// additional: useState for object ? (for broader input)

// function- handle change of input DONE

// need handleclick function for submit button (sendPost)
// handleclick (like onChange- listening for event)
// create event listener (handleSubmit)
//connect the handleSubmit to the submit button
// unique keys- on list for later

/**CreatePost
 * CreatePost is component used to allow a user to create a project post object
 * The user can then submit this post to the project borderRadius: state is used to update a post object immutably
 * this state of postobject is passed up to parent to component to render as a project post
 */

function CreatePost({ handleSubmit, trigger, setTrigger }) {
  const [postObject, setPostObject] = useState({
    id: 20, // unused field
    username: "",
    projectgoal: "",
    projecttype: "",
    projecttools: "",
    collaborators: 1, //not used in current build- included for later functionality
  });

  /** handleUsername captures input from username field: text
   * text is inserted into post Object via setPostObject
   */

  function handleUsername(e) {
    console.log(e.target.value);
    setPostObject({ ...postObject, username: e.target.value });
  }

  /** handleProjectGoal captures input from project type field: text
   * text is inserted into post Object via setPostObject
   */

  function handleProjectGoal(e) {
    console.log(e.target.value);
    setPostObject({ ...postObject, projectgoal: e.target.value });
  }

  /**handleProjectType captures input from selected project type value
   * value is inserted into post object via setPostObject updating state
   */

  function handleProjectType(e) {
    setPostObject({ ...postObject, projecttype: e.target.value });
  }

  /**handleProjectTools captures input from selected tool type value
   * value is inserted into post object via setPostObject updating state
   * tool has options for different types of language/ programme user wants to focus project around
   */

  function handleProjectTools(e) {
    setPostObject({ ...postObject, projecttools: e.target.value });
  }

  // return is conditional on user clicking submit to create a post- option to cancel create post included
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

// Component one- is a create post app

//Button - essentially (add) - Create Post button
// input (type: multi select) - build,
//

// CSS
// Express
// HTML
// Javascipt
// Node
// SQL
// React
