function SearchBar({posts}) {

    function handleClick(){

    }

    /*
    need to create a function that filters based on the categories search.
    Proposal to limit filter function to the Post categories.
    This link could be helpful https://contactmentor.com/filter-list-by-category-react-js/
    */

    return <div className="searchBar">

        <label htmlFor="categories">I want to </label>

        <select className="categoriesBar" name="categories" id="categories">
            <option value="build">build</option>
            <option value="study">study</option>
            <option value="pair">pair</option>
        </select>
        <br/>
        <br/>
        <label> using...</label>
        <br/>
        <br/>

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
            <label htmlFor="vehicle3">React</label>
        <div ><br/>
            <button className="searchButton" onClick={handleClick}>Find me a buddy</button>
        </div>
        <br/>
    </div>
}
export default SearchBar;