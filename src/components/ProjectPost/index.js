import '../App/App.css'

function ProjectPost({projectgoal, projecttype, projecttools, username}) {
    return <div className="projectPost">
    <header>
        <h3 className="projectType">{projecttype}</h3>
    </header>
    <article>
        <div className="projectContent">Project Title: {projectgoal}</div>

        <div className="projectContent">The tools I want to use: {projecttools}</div>

        <div className="projectContent">username: {username}</div>
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