// filename: tile.component.js
// author: Miles-Berry
import './tile.css'
import tile from "../../imgs/SIREWALL-tile.jpg"

export default function Tile() {
    return (
    <div>

        <div className = 'TileBox'>
            <img className='Tile'
            src={tile}
            alt="TILE IMG"
            />
        </div>

        <div className="Buttons">
            <button className='Export'>
                Export .jpg
            </button>

            <button className='Export'>
                Export data
            </button>
        </div>
        
        
    </div>
    )
}
