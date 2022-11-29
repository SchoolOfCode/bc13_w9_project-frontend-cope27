import ProjectPost from "../ProjectPost/index.js";
import "../App/App.css";

function ProjectBoard({ posts }) {
  return (
    <div className="projectBoard">
      {posts.map((post) => (
        <ProjectPost
          projectgoal={post.projectgoal}
          projecttype={post.projecttype}
          projecttools={post.projecttools}
          username={post.username}
          key={post.id}
        />
      ))}
    </div>
  );
}

export default ProjectBoard;
