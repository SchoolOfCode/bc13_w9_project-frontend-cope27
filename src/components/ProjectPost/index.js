import '../App/App.css'

function ProjectPost({projectGoal, projectType, projectTools, userName}) {
    return <div className="projectPost">
    <header>
        <h3>{projectType}</h3>
    </header>
    <article>
        <div className="projectGoal">Project Title: {projectGoal}</div>

        <div className="projectTools">The tools I want to use: {projectTools}</div>

        <div className="userName">Username: {userName}</div>
    </article>



    </div>
}
export default ProjectPost; 



/*

I am looking to build X


I am looking build with  React, Javascript and SQL


I want to pair on React, Javascript and SQL>


I want to study React.
I want to study React and Javascript

*/