function SearchBar({posts}) {

    function handleClick(){

    }

    /*
    need to create a function that filters based on the categories search.
    Proposal to limit filter function to the Post categories.
    This link could be helpful https://contactmentor.com/filter-list-by-category-react-js/
    */

    return <div className="searchBar">
        <label for="categories">I want to</label>
        <select name="categories" id="categories">
            <option value="build">build</option>
            <option value="study">study</option>
            <option value="pair">pair</option>
        </select>

        <label> using</label>
            <input type="checkbox" id="css" name="css" value="css"/>
            <label for="css">CSS</label>
            <input type="checkbox" id="express" name="express" value="express"/>
            <label for="vehicle2">Express</label>
            <input type="checkbox" id="html" name="html" value="html"/>
            <label for="vehicle3">HTML</label>
            <input type="checkbox" id="js" name="js" value="js"/>
            <label for="vehicle3">Javascript</label>
            <input type="checkbox" id="node" name="node" value="node"/>
            <label for="vehicle3">Node</label>
            <input type="checkbox" id="sql" name="sql" value="sql"/>
            <label for="vehicle3">SQL</label>
            <input type="checkbox" id="react" name="react" value="react"/>
            <label for="vehicle3">React</label>
        <button onClick={handleClick}>Find me a seed</button>
    </div>
}
export default SearchBar;