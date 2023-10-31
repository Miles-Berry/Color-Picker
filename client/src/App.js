import './App.css';

import { useState } from 'react';

import Header from './components/header/header.component.js'
import Colors from './components/colors/colors.component.js'
import Layers from './components/layers/layers.component.js'
import Tile from './components/tile/tile.component.js'

import { colorData } from './colorData'
import { layerData } from './layerData'



const App = () => {
  
  
  const [selectedLayer] = useState(0);
  
  /*
  function handleColorSelection() {
    selectedColor()
  }

  function addLayer(layers) {
    layers.push({
      selectedColor: selectedColor,
      intensity: selected
    })
  }

  function removeLayer(layers) {
    return 0;
  }

  function changeIntensity() {

  }

  */



  return (
    <div className="App">

      <div className="Header">
        <Header/>
      </div>

      <div className="Body">
        <div className="BodyLeft">
          <Tile/>
          <Layers
            layerData={layerData}
            selectedLayer={selectedLayer}
          />
        </div>

        <div className="BodyRight">
          <Colors colorData={colorData} />
        </div>
      </div>
          
    </div>
  );
}

export default App;
