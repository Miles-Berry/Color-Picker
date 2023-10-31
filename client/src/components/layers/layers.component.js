// filename: layers.component.js
// author: Miles-Berry
import './layers.css'

export default function Layers({ layerData, selectedLayer }) {
    
    const layers = layerData.map (layer => 
        <div className="Layer">

            <div 
                className="Color"
                style={{
                    background: layer.color.hex
                }}
            >
                {layer.color.name}
            </div>
            <div className="IntensityButtons">
                1
            </div>
            <div className="IntensityButtons">
                2
            </div>
            <div className="IntensityButtons">
                3
            </div>
            <div className="DeleteButtons">
                X
            </div>
        </div>
    );

    return (
        <div>

            {layers}

            <div className="AddLayer">
                <div>
                    Add Layer
                </div>
            </div>

        </div> 
    )
}