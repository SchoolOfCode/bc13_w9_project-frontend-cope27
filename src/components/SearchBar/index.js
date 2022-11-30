import { useState } from "react";
/** Renders the SearchBar component.
 *  A state variable captures type (category) and tool, takes in handleclick function as prop that triggers the search.
 *
 * @param {*} handleClick prop
 * @returns JSX
 */

/* PLAN
Add two extra options to each menu which would be default, text would be "All". 
  Value would be 'All' -- if value is true, set searchObject.all to true

Add to the logic in App.   


*/

function SearchBar({ handleClick, handleClickReset }) {
  /** The reason for this state instead of using searchObject handed down as a prop is to stop unneccesary rerenders when user events happen */
  const [filterValues, setFilterValues] = useState({
    projectType: "",
    projectTool: "",
  });

  function handleProjectToolChange(e) {
    setFilterValues({ ...filterValues, projectTool: e.target.value });
  }

  function handleProjectTypeChange(e) {
    setFilterValues({ ...filterValues, projectType: e.target.value });
  }

  return (
    <div className="searchBar">
      <label htmlFor="categories">I want to </label>
      <select
        name="categories"
        id="categories"
        onChange={handleProjectTypeChange}
      >
        <option value="Build">Build</option>
        <option value="Study">Study</option>
        <option value="Pair">Pair</option>
      </select>
      <br />

      <br />
      <label> using...</label>
      <select name="tools" id="tools" onChange={handleProjectToolChange}>
        <option value="CSS">CSS</option>
        <option value="HTML">HTML</option>
        <option value="Express">Express</option>
        <option value="JavaScript">JavaScript</option>
        <option value="Node">Node</option>
        <option value="SQL">SQL</option>
        <option value="React">React</option>
      </select>

      <div>
        <br />
        <button
          className="searchButton"
          onClick={() => handleClick(filterValues)}
        >
          Find me a buddy
        </button>

        <button
          className="searchButton"
          id="reset"
          onClick={() => handleClickReset()}
        >
          Reset
        </button>
      </div>
      <br />
    </div>
  );
}

export default SearchBar;
