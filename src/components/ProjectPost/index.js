import "../App/App.css";

function ProjectPost({ projectgoal, projecttype, projecttools, username }) {
  return (
    <li className="projectPost">
      <header>
        <h3 className="projectType">{projecttype}</h3>
      </header>
      <article>
        <div className="projectContent"><b>Project Title:</b> {projectgoal}</div>
        <div className="projectContent">
          <b>The tools I want to use:</b> {projecttools}
        </div>
        <div className="projectContent"><b>Username:</b> {username}</div>
      </article>
    </li>
  );
}

export default ProjectPost;
