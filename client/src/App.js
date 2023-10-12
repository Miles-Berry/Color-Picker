import './App.css';

import Header from './components/header/header.component.js'
import Colors from './components/colors.component.js'
import Layers from './components/layers.component.js'
import Tile from './components/tile.component.js'

const App = () => {
  return (
    <div className="App">

      <div className="Header">
        <Header/>
      </div>
      
      <div className="Body">
        <Tile/>
        <Colors/>
        <Layers/>
      </div>
          
    </div>
  );
}

export default App;
