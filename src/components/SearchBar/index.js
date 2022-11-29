import { useState } from "react";
/** Renders the SearchBar component.
 *  A state variable captures type (category) and tool, takes in handleclick function as prop that triggers the search.
 *
 * @param {*} handleClick prop
 * @returns JSX
 */

function SearchBar({ handleClick }) {
  const [searchObject, setSearchObject] = useState({
    tool: "CSS",
    type: "Build",
  });

  /**
   * This takes an event when the tool menu is selected and changes the tool key of the searchObject state
   * @param {*} e
   */
  function handleToolChange(e) {
    setSearchObject({ ...searchObject, tool: e.target.value });
  }

  /**
   * This takes an event when the Project Type menu is selected and changes the type key of the searchObject state
   * @param {*} e
   */
  function handleProjectTypeChange(e) {
    setSearchObject({ ...searchObject, type: e.target.value });
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
      <select name="tools" id="tools" onChange={handleToolChange}>
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
          onClick={() => handleClick(searchObject)}
        >
          Find me a buddy
        </button>
      </div>
      <br />
    </div>
  );
}
export default SearchBar;
