import ProjectPost from '../ProjectPost/index.js'
import '../App/App.css'; 

function ProjectBoard() {
    return <div className="projectBoard">
        <ProjectPost  projectGoal="Lord of the Rings API" projectType="Build" projectTools="React" userName="Jimmy08"/>
        <ProjectPost  projectGoal="Lord of the Rings API" projectType="Build" projectTools="React" userName="Jimmy08"/>
        <ProjectPost  projectGoal="Lord of the Rings API" projectType="Build" projectTools="React" userName="Jimmy08"/>
        <ProjectPost  projectGoal="Lord of the Rings API" projectType="Build" projectTools="React" userName="Jimmy08"/>
        <ProjectPost  projectGoal="Lord of the Rings API" projectType="Build" projectTools="React" userName="Jimmy08"/>
        <ProjectPost  projectGoal="Lord of the Rings API" projectType="Build" projectTools="React" userName="Jimmy08"/>

       {/* <ProjectPost projectGoal="" projectType="" projectTools="" userName=""/>
        <ProjectPost projectGoal="" projectType="" projectTools="" userName=""/> */}
    </div>
}
export default ProjectBoard;  