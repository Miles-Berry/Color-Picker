// filename: colors.component.js
// author: Miles-Berry

import './colors.css'

export default function Colors({colorData}) {
    /* 
            Look to database for colors
    */
    const colors = colorData.map(color => 
        <div 
            className='color'
            style={{
                backgroundColor: color.hex,
                width: "80px",
                height: "100px",
                margin: "10px"
            }}
        >
            <div className='colorName'>
                {color.name}
            </div>
        </div>
    );

    return (
        <div className='colors'>
            {colors}
        </div>
    )
}