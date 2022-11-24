import { useState } from 'react'

function SearchBar({handleClick}) {
    const [searchObject, setSearchObject] = useState({tool: 'CSS', type: 'Build'});

    function handleToolChange(e){
        setSearchObject({...searchObject, tool: e.target.value})
    }

    function handleProjectTypeChange(e) {
        setSearchObject({...searchObject, type: e.target.value})
    }

    // we neet a state variable to capture the two values
        // that will be an object and we will set the initial state to two values
    
    // we need an on change function in html that calls the handlechange function x 2
        // 1 for the pair/build/study
        // 1 for tools

        // updates the state variable object
    
    // handleclick function that triggers the search
        // handleclick is being passed down as a prop from app level


    /*
    need to create a function that filters based on the categories search.
    Proposal to limit filter function to the Post categories.
    This link could be helpful https://contactmentor.com/filter-list-by-category-react-js/
    */

    return <div className="searchBar">

        <label htmlFor="categories">I want to </label>

        <select name="categories" id="categories" onChange={handleProjectTypeChange}>
            <option value="Build">Build</option>
            <option value="Study">Study</option>
            <option value="Pair">Pair</option>
        </select>
        <br/>
        <br/>
        <label> using...</label>
        <select name="tools" id="tools" onChange={handleToolChange}>
            <option value="CSS">CSS</option>
            <option value="HTML">HTML</option>
            <option value="Express">Express</option>
            <option value="JavaScript">JavaScript</option>
            <option value="Node">Node</option>
            <option value="SQL">SQL</option>
            <option value="React">React</option>
        </select>
        {/* <br/>
            <input type="checkbox" id="css" name="css" value="css"/>
            <label htmlFor="css">CSS</label><br/>
            <input type="checkbox" id="express" name="express" value="express"/>
            <label htmlFor="vehicle2">Express</label><br/>
            <input type="checkbox" id="html" name="html" value="html"/>
            <label htmlFor="vehicle3">HTML</label><br/>
            <input type="checkbox" id="js" name="js" value="js"/>
            <label htmlFor="vehicle3">Javascript</label><br/>
            <input type="checkbox" id="node" name="node" value="node"/>
            <label htmlFor="vehicle3">Node</label><br/>
            <input type="checkbox" id="sql" name="sql" value="sql"/>
            <label htmlFor="vehicle3">SQL</label><br/>
            <input type="checkbox" id="react" name="react" value="react"/>
            <label htmlFor="vehicle3">React</label><br/> */}
        <div>
        <br/>
        <button className="searchButton" onClick={() => handleClick(searchObject)}>Find me a buddy</button>
        </div>
        <br/>
    </div>
}
export default SearchBar;