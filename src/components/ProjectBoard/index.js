import ProjectPost from '../ProjectPost/index.js'
import '../App/App.css'; 

function ProjectBoard({posts}) {
    return <div className="projectBoard">
        {posts.map( (post) => 
        <ProjectPost projectgoal={post.projectgoal} projecttype={post.projecttype} 
            projecttools={post.projecttools} username = {post.username} key={post.id}/>
            )
        }
    </div>
}

export default ProjectBoard;  

/* Old code that did not work - useful for reflection
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