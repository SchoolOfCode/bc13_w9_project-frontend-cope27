//import React from "react";
import '../App/App.css'
import { useState } from 'react';

//Goal: be able to send input data as a data object up to main App level
    // useState for username input (name, setName) = initial state- empty string DONE
    // additional: useState for object ? (for broader input)

    // function- handle change of input DONE 

// need handleclick function for submit button (sendPost)
    // handleclick (like onChange- listening for event)
    // create event listener (handleSubmit)
        //connect the handleSubmit to the submit button 
        // unique keys- on list for later 


function CreatePost() {
    const [userName, setUserName] = useState('');
    const [postObject, setPostObject] = useState({id: 20, username: '', projectgoal: '', projecttype: '', projecttools: '', collaborators: 1});

    function handleUsername (e) {
        setUserName(e.target.value); //the function that's called when event listener happens (onChange)
    };

    function handleSubmit() {
        setPostObject({id: 20, username: userName, projectGoal: '', projectType: '', projectTools: '', collaborators: 1})
    }

    return <div className="createPost">
        <label for="categories">Plant a Seed:</label>
        <select name="categories" id="categories">
            <option value="build">build</option>
            <option value="study">study</option>
            <option value="pair">pair</option>
        </select><br/>

        <label>Project Goal</label><input type="text"></input><br/>
        <label for="Tools">Tool I'll be using</label>
        <select name="Tools" id="Tools">
            <option value="CSS">CSS</option>
            <option value="HTML">HTML</option>  
            <option value="JavaScript">JavaScript</option>
            <option value="Node">Node.js</option>
            <option value="React">React</option>
            <option value="SQL">SQL</option>
            </select><br />

        <label>Username: </label><input type="text" onChange={handleUsername}></input><br/>

        <button onClick={handleSubmit}>SUBMIT</button>
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