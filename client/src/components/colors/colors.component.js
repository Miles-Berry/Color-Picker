// filename: colors.component.js
// author: Miles-Berry

import './colors.css'

export default function Colors({colorData}) {
    /* 
            Look to database for colors
    */
    const colors = colorData.map(c => 
        <div 
            className='color'
            style={{
                backgroundColor: c.color.hex,
                width: "80px",
                height: "100px",
                margin: "10px"
            }}
        >
            <div className='colorName'>
                {c.name}
            </div>
        </div>
    );

    return (
        <div className='colors'>
            {colors}
        </div>
    )
}