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
        <ProjectPost projectgoal={post.projectgoal} projecttype={post.projecttype} 
            projecttools={post.projecttools} username = {post.username}/>
            )
        }


        

        {/* <ProjectPost  projectGoal="Lord of the Rings API" projecttype="Build" projecttools="React" username="Jimmy08"/>
        <ProjectPost  projectGoal="Lord of the Rings API" projecttype="Build" projecttools="React" username="Jimmy08"/>
        <ProjectPost  projectGoal="Lord of the Rings API" projecttype="Build" projecttools="React" username="Jimmy08" background-color="#CAB39F"/>
        <ProjectPost  projectGoal="Lord of the Rings API" projecttype="Build" projecttools="React" username="Jimmy08"/>
        <ProjectPost  projectGoal="Lord of the Rings API" projecttype="Build" projecttools="React" username="Jimmy08" background-color="#CAB39F"/>
        <ProjectPost  projectGoal="Lord of the Rings API" projecttype="Build" projecttools="React" username="Jimmy08"/>
        <ProjectPost  projectGoal="Lord of the Rings API" projecttype="Build" projecttools="React" username="Jimmy08" background-color="#CAB39F"/>
        <ProjectPost  projectGoal="Lord of the Rings API" projecttype="Build" projecttools="React" username="Jimmy08"/>
        <ProjectPost  projectGoal="Lord of the Rings API" projecttype="Build" projecttools="React" username="Jimmy08"/> */}

       {/* <ProjectPost projectGoal="" projecttype="" projecttools="" username=""/>
        <ProjectPost projectGoal="" projecttype="" projecttools="" username=""/> */}
    </div>
}
export default ProjectBoard;  

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