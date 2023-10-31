// filename: layers.component.js
// author: Miles-Berry
import './layers.css'

export default function Layers({layers, selectedLayer}) {
    
    return (
    <div>

        {/* 
            Check if there are previously made layers

            If so, load those

            Else, default to 4

        */
        }

        




        <div className="Layer">
            <button className="Color">
                test
            </button>
            
            <button className="RoundButtons">
                0
            </button>
            <button className="RoundButtons">
                1
            </button>
            <button className="RoundButtons">
                2
            </button>
            <button className="RoundButtons">
                3
            </button>
            <button className="RoundButtons">
                X
            </button>
            
            </div>

        <div className="AddLayer">
            <button>
                Add Layer
            </button>
        </div>
        
    </div>
    )
}