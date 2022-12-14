import ProjectPost from "../ProjectPost/index.js";
import "../App/App.css";
//import samplePosts from '../../data/samplePosts'

// We import state from App and render the current state in the board

/** State imported from parent level (App)
 * The amount of project posts rendered by this component when imported into map will map depending on the amount of project post objects contained in the database
 * When the state is updated for posts- this will mean a new project post component element will be rendered
 * This new project post will display on the page
 */

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

// legacy testing (hardcoded posts)

/* <ProjectPost  projectGoal="Lord of the Rings API" projecttype="Build" projecttools="React" username="Jimmy08"/>
        <ProjectPost  projectGoal="Lord of the Rings API" projecttype="Build" projecttools="React" username="Jimmy08"/>
        <ProjectPost  projectGoal="Lord of the Rings API" projecttype="Build" projecttools="React" username="Jimmy08" background-color="#CAB39F"/>
        <ProjectPost  projectGoal="Lord of the Rings API" projecttype="Build" projecttools="React" username="Jimmy08"/>
        <ProjectPost  projectGoal="Lord of the Rings API" projecttype="Build" projecttools="React" username="Jimmy08" background-color="#CAB39F"/>
        <ProjectPost  projectGoal="Lord of the Rings API" projecttype="Build" projecttools="React" username="Jimmy08"/>
        <ProjectPost  projectGoal="Lord of the Rings API" projecttype="Build" projecttools="React" username="Jimmy08" background-color="#CAB39F"/>
        <ProjectPost  projectGoal="Lord of the Rings API" projecttype="Build" projecttools="React" username="Jimmy08"/>
        <ProjectPost  projectGoal="Lord of the Rings API" projecttype="Build" projecttools="React" username="Jimmy08"/> */

/* <ProjectPost projectGoal="" projecttype="" projecttools="" username=""/>
        <ProjectPost projectGoal="" projecttype="" projecttools="" username=""/> */

/*
{
        id: 1,
        username: 'Jimmy08',
        projectGoal: 'Lord of the Rings API',
        projecttype: 'Build',
        projecttools: 'React',
        collaborators: 1
    },

     {posts.map( (post) => 
        <ProjectPost projectGoal={post.projectGoal} projecttype={post.projecttype} 
            projecttools={post.projecttools} username = {post.username}/>
            )
        }

    */
