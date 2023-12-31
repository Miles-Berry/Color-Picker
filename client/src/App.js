import './App.css';

import { useState } from 'react';

import Header from './components/header/header.component.js';
//import Tile from './components/tile/tile.component';
import { colorData } from './colorData';
import { layerData } from './layerData';

import Jimp from "jimp";

import image from './imgs/SIREWALL-tile.jpg';

const App = () => {
  
  const [ selectedColor, setSelectedColor ] = useState(colorData[0]);

  /* Layers */
  const [layers, setLayers] = useState(layerData);
  const [selectedLayer, setSelectedLayer] = useState(0);

  // Add Layer
  function addLayer() {
    layers.push({
      color: {
        name: 'Eiger',
        hex: '#C7C5C5',
        r: 197,
        g: 197,
        b: 197,
        a: 1
      }, 
      intensity: 2, 
      id: (layers.length)
    });
    setLayers([...layers]);
  }


  // Remove Layer
  function removeLayer(id) {
    const newLayers = [...layers];
    newLayers.splice(id, 1);
    for (let i = 0; i < newLayers.length; i++) {
      newLayers[i].id = i;
    }
    setLayers(newLayers)
  }

  // Change Intensity
  function changeIntensity(id, val) {
    const newLayers = layers.map( layer => {
      if (layer.id === id) {
        return {
          color: {
            name: layer.color.name,
            hex: layer.color.hex,
            r: layer.color.r,
            g: layer.color.g,
            b: layer.color.b,
            a: layer.color.a
          },
          intensity: val,
          id: layer.id
        }
      }
      return layer
    });
    setLayers([...newLayers]);
  }

  function handleLayerSelect(layer) {
    setSelectedLayer(layer.id);
    setSelectedColor(layer.color.name);
  }

  function handleColorSelect(color){
    const newLayers = layers.map(layer => {
      if (layer.id === selectedLayer) {layer.color = color};
      return layer;
    });
    setSelectedColor(color);
    modifyImage();
    return [...newLayers]
  }

  // Rendering List of Layers
  const Layers = layers.map(layer =>
    <div className="Layer" key={"layer" + layer.id}>
      {/* Color Tile on Layer */}
      <div className={layer.id === selectedLayer ? "HighlightLayer" : "NoHighlightLayer"}>
          <div 
              className="Color"
              style={{
                  background: layer.color.hex,}}
              onClick={ () => handleLayerSelect(layer)}
          >
              {layer.color.name}
          </div>
      </div>

      {/* Intensity Buttons */}
      <div 
        className={(layer.intensity === 1) ? 
          "IntensityButtonHighlight" : 
          "IntensityButtonNoHighlight"} 
        onClick={ () => changeIntensity(layer.id, 1) }
      >
          1
      </div>
      <div 
        className={(layer.intensity === 2) ? 
          "IntensityButtonHighlight" : 
          "IntensityButtonNoHighlight"} 
        onClick={ () => changeIntensity(layer.id, 2) }
      >
          2
      </div>
      <div 
        className={(layer.intensity === 3) ? 
          "IntensityButtonHighlight" : 
          "IntensityButtonNoHighlight"} 
        onClick={ () => changeIntensity(layer.id, 3) }
      >
          3
      </div>
      <div 
        className="DeleteButton" 
        onClick={ () => removeLayer(layer.id) }
      >
          X
      </div>
    </div>
  )

  /* Colors */

  function ColorMenu() {

    const ColorOptions = colorData.map(color =>
      <div className={selectedColor === color? "HighlightColor" : "NoHighlightColor"}> 
        <div 
          className='Color'
          key={color.name}
          onClick={ () => handleColorSelect(color) }
          style={{background: color.hex}}>
          {color.name}
        </div>
      </div>
    )

    return(
      <div className='Colors'>
        {ColorOptions}
      </div>
    )
  }

  /* IMAGE */
  const [img, setImg] = useState(image);

  var differenceMap = [];
  for (var i = 0; i < 1182; i++) {
    differenceMap[i] = [];
    for (var j = 0; j < 1182; j++) {
        differenceMap[i][j] = {
          r: 0,
          g: 0,
          b: 0
        };
    }
  }

  Jimp.read(image, (err, img) => {
    if (err) {throw err};
    var avgR = 127;
    var avgG = 127;
    var avgB = 127;
    img.greyscale()
    // find avg color in image
    img.scan(0, 0, img.bitmap.width, img.bitmap.height, function(x, y, idx) {
      avgR = (avgR + this.bitmap.data[idx+0])/2;
      avgG = (avgG + this.bitmap.data[idx+1])/2;
      avgB = (avgB + this.bitmap.data[idx+2])/2;
    });
    // find difference of that pixel from avg color
    img.scan(0, 0, img.bitmap.width, img.bitmap.height, function(x, y, idx) {
      differenceMap[x][y] = {
        r: avgR - this.bitmap.data[idx+0],
        g: avgG - this.bitmap.data[idx+1],
        b: avgB - this.bitmap.data[idx+2]
      }
    });
  });
  
  function modifyImage() {
    Jimp.read(image, (err, img) => {
      if (err) {throw err};
      var img2 = img.clone();
      img2.greyscale();

      img2.scan(0, 0, img.bitmap.width, img.bitmap.height, function (x, y, idx) {
        this.bitmap.data[idx+0] = selectedColor.r - differenceMap[x][y].r;
        this.bitmap.data[idx+1] = selectedColor.g - differenceMap[x][y].g;
        this.bitmap.data[idx+2] = selectedColor.b - differenceMap[x][y].b;
      }).getBase64(Jimp.AUTO, (err, res) => {
        if (err) {throw err};
        setImg(res);
      });
    })
  };

  

  /* App */

  return (
    <div className="App">
      <div className="Header">
        <Header/>
      </div>

      <div className="Body">

        {/* Render Left Half of Body */}
        <div className="BodyLeft">
          
          {/* Render Tile */}
          <img
            className="tile"
            src={img}
            style={{width: '450px', height: '450px'}}
            alt='tile'
          />         
          {/* Render Layers */}
          {Layers}

          {/* Render Add Layer button */}
          <button className="AddLayer" onClick={() => addLayer()}>
            Add Layer
          </button>
        </div>

        {/* Render Right Half of Body */}
        <div className="BodyRight">

          {/* Render Colors */}
          <div className="Colors">
            <ColorMenu/>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default App;
