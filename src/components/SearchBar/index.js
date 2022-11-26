import { useState } from "react";

function SearchBar({ handleClick }) {
  const [searchObject, setSearchObject] = useState({
    tool: "CSS",
    type: "Build",
  });

  function handleToolChange(e) {
    setSearchObject({ ...searchObject, tool: e.target.value });
  }

  function handleProjectTypeChange(e) {
    setSearchObject({ ...searchObject, type: e.target.value });
  }

  return (
    <div className="searchBar">
    {/* CATEGORIES BUILD/STUDY/PAIR */}
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
      {/* USING TOOLS */}
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
      {/* SEARCH BUTTON */}
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
