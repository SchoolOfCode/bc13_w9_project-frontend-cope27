import "../App/App.css";
import Comments from "../Comments/comments";
import { useState } from "react";

// props passed from create post component to child
function ProjectPost({ projectgoal, projecttype, projecttools, username }) {
  const [commentsToggle, setCommentsToggle] = useState(false);
  // set comments toggle is a new feature- this allows a trigger to display a comment component on a project post element
  // comment pop up appears if a user clicks the create comment button rendered in this component

  return (
    <div className="projectPost">
      <header>
        <h3 className="projectType">{projecttype}</h3>
      </header>
      <article>
        <div className="projectContent">Project Title: {projectgoal}</div>

        <div className="projectContent">
          The tools I want to use: {projecttools}
        </div>

        <div className="projectContent">username: {username}</div>
        <button
          className="submit-button"
          onClick={() => {
            setCommentsToggle(true);
          }}
        >
          Create Comment
        </button>
      </article>
      {commentsToggle && <Comments toggle={setCommentsToggle} />}
    </div>
  );
}
export default ProjectPost;

/*

I am looking to build X


I am looking build with  React, Javascript and SQL


I want to pair on React, Javascript and SQL>


I want to study React.
I want to study React and Javascript

*/
