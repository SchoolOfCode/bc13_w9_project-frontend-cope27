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
    {/* edit html here
    edit data insertion in the js */}
        <label for="Tools">Tool I'll be using</label>
        <select name="Tools" id="Tools">
            <option value="CSS">CSS</option>
            <option value="HTML">HTML</option>  
            <option value="JavaScript">JavaScript</option>
            <option value="Node">Node.js</option>
            <option value="React">React</option>
            <option value="SQL">SQL</option>
            </select><br />

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