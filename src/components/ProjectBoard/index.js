import ProjectPost from "../ProjectPost/index.js";
import "../App/App.css";

function ProjectBoard({ posts, searchObject }) {
  console.log('This is the searchObject in projectBoard', searchObject)
  let sortedPosts = []
  if (searchObject.all === false) {
    console.log('search Object is false')
    sortedPosts = posts.filter((post) => {
      return posts.projecttype === searchObject.projectType || posts.projecttools === searchObject.projectTool
    })
  } else {
    console.log('search Object is true')
    sortedPosts = posts;
  }
  console.log('sortedPosts:', sortedPosts)
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
