import './App.css';
import CreatePost from '../CreatePost/index.js'
import SearchBar from '../SearchBar/index.js'
import ProjectBoard from '../ProjectBoard/index.js'


function App() {
  return (
    <div className="App">
    <header>
    <h1 className="title">Sjardin</h1>
    <p className="slogan">A collaboration app for learning to code together</p>
    </header>
    
    
    <SearchBar/>
    <CreatePost/>
     <ProjectBoard/>
    </div>
  );
}

export default App;
