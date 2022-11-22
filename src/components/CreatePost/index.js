import React from "react";
import '../App/App.css'

function CreatePost() {
    return <div className="createPost">
        <label for="categories">Plant a Seed:</label>
        <select name="categories" id="categories">
            <option value="build">build</option>
            <option value="study">study</option>
            <option value="pair">pair</option>
        </select><br/>

        <label>Project Goal</label><input type="text"></input><br/>
        
        <label>Tools I'll be using</label><br />
            <input type="checkbox" id="css" name="css" value="css"/>
            <label for="css">CSS</label><br/>
            <input type="checkbox" id="express" name="express" value="express"/>
            <label for="vehicle2">Express</label><br/>
            <input type="checkbox" id="html" name="html" value="html"/>
            <label for="vehicle3">HTML</label><br></br>
            <input type="checkbox" id="js" name="js" value="js"/>
            <label for="vehicle3">Javascript</label><br></br>
            <input type="checkbox" id="node" name="node" value="node"/>
            <label for="vehicle3">Node</label><br></br>
            <input type="checkbox" id="sql" name="sql" value="sql"/>
            <label for="vehicle3">SQL</label><br></br>
            <input type="checkbox" id="react" name="react" value="react"/>
            <label for="vehicle3">React</label><br></br>

        <label>Username: </label><input type="text"></input><br/>

        <button>SUBMIT</button>
    </div>
}
export default CreatePost;

// Component one- is a create post app

    //Button - essentially (add) - Create Post button 
    // input (type: multi select) - build, 
    //          

    // CSS
    // Express
    // HTML
    // Javascipt
    // Node
    // SQL
    // React