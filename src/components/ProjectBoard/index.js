import ProjectPost from "../ProjectPost/index.js";
import "../App/App.css";

function ProjectBoard({ posts }) {
  return (
    <ul className="projectBoard" data-testid="Project Board">
      {posts.map((post) => (
        <ProjectPost
          projectgoal={post.projectgoal}
          projecttype={post.projecttype}
          projecttools={post.projecttools}
          username={post.username}
          key={post.id}
        />
      ))}
    </ul>
  );
}

export default ProjectBoard;
