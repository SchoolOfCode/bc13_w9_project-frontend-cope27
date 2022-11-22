import ProjectPost from '../ProjectPost/index.js'
import '../App/App.css'; 
//import samplePosts from '../../data/samplePosts'

// We import state from App and render the current state in the board

function ProjectBoard({posts}) {
    return <div className="projectBoard">

        {
            /*
            We need a reduce perhaps here
            */
        }

        {posts.map( (post) => 
        <ProjectPost projectGoal={post.projectGoal} projectType={post.projectType} 
            projectTools={post.projectTools} userName = {post.userName}/>
            )
        }

        

        {/* <ProjectPost  projectGoal="Lord of the Rings API" projectType="Build" projectTools="React" userName="Jimmy08"/>
        <ProjectPost  projectGoal="Lord of the Rings API" projectType="Build" projectTools="React" userName="Jimmy08"/>
        <ProjectPost  projectGoal="Lord of the Rings API" projectType="Build" projectTools="React" userName="Jimmy08"/>
        <ProjectPost  projectGoal="Lord of the Rings API" projectType="Build" projectTools="React" userName="Jimmy08"/>
        <ProjectPost  projectGoal="Lord of the Rings API" projectType="Build" projectTools="React" userName="Jimmy08"/>
        <ProjectPost  projectGoal="Lord of the Rings API" projectType="Build" projectTools="React" userName="Jimmy08"/> */}

       {/* <ProjectPost projectGoal="" projectType="" projectTools="" userName=""/>
        <ProjectPost projectGoal="" projectType="" projectTools="" userName=""/> */}
    </div>
}
export default ProjectBoard;  

/*
{
        id: 1,
        userName: 'Jimmy08',
        projectGoal: 'Lord of the Rings API',
        projectType: 'Build',
        projectTools: 'React',
        collaborators: 1
    },

    */