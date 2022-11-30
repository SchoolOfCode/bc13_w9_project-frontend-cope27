import ProjectPost from "../ProjectPost/index.js";
import "../App/App.css";

function ProjectBoard({ posts, searchObject }) {
  let sortedPosts = []
  if (searchObject.all === false) {
    sortedPosts = posts.filter((post) => {
      return (post.projecttype === searchObject.projectType && post.projecttools === searchObject.projectTool)
    })
  } else {
    sortedPosts = posts;
  }
  return (
    <ul className="projectBoard" data-testid="Project Board">
      {sortedPosts.map((post) => (
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
