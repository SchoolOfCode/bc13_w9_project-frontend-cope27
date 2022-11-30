import "../App/App.css";

function ProjectPost({ projectgoal, projecttype, projecttools, username }) {
  return (
    <li className="projectPost">
      <header>
        <h3 className="projectType">{projecttype}</h3>
      </header>
      <article>
        <div className="projectContent">Project Title: {projectgoal}</div>
        <div className="projectContent">
          The tools I want to use: {projecttools}
        </div>
        <div className="projectContent">username: {username}</div>
      </article>
    </li>
  );
}

export default ProjectPost;
