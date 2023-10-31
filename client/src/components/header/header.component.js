// filename: header.component.js
// author: Miles-Berry
import './header.css'
import logo from '../../imgs/SIREWALL-logo-200.png'

export default function Header() {
    return (
    <div>

        <div className='header'>

            <div className='logo'>
                <img 
                src={logo}
                alt="SIREWALL"/>
            </div>

            <div className='tagline'>
                <h1>YOUR FUTURE THIS IS</h1>
            </div>

        </div>
        
        <div className='navbar'>
            <h3>
                IN DEVELOPMENT - COLOR PICKER
            </h3>
        </div>
        
    </div>
    )
}
