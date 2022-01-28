// Import data
// import { postings } from './postings';
// Import components
import './App.css';
import { Searchbar } from './searchbar.js'
import { Directory } from './directory.js'
import { Gallery } from './gallery.js'
import { Sidebar } from './sidebar.js'



function App(){
  return (
    <div>
      <h1>craigslist</h1>
      <div className="App">
        {/* Your content will go here! */}
        <Searchbar />
        <Directory />
        <Gallery />
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
