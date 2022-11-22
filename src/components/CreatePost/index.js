function CreatePost() {
    return <div>
        <label for="categories">Plant a Seed:</label>
        <select name="categories" id="categories">
            <option value="build">build</option>
            <option value="study">study</option>
            <option value="pair">pair</option>
        </select>

        <label>Project Goal</label><input type="text"></input>
        
        <label>Tools I'll be using</label>
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
            <label for="vehicle1"> I have a bike</label><br/>
            <input type="checkbox" id="vehicle2" name="vehicle2" value="Car"/>
            <label for="vehicle2"> I have a car</label><br/>
            <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>
            <label for="vehicle3"> I have a boat</label><br></br>

        <label>Username</label><input type="text"></input>
    </div>
}
export default CreatePost;

// Component one- is a create post app

    //Button - essentially (add) - Create Post button 
    // input (type: multi select) - build, 
    //          