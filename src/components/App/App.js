import './App.css';
import CreatePost from '../CreatePost/index.js'
import SearchBar from '../SearchBar/index.js'
import ProjectBoard from '../ProjectBoard/index.js'


function App() {
  return (
    <div className="App">
    <h1>Sjardin</h1>
    <CreatePost/>
     <SearchBar/>
     <ProjectBoard/>
    </div>
  );
}

export default App;
