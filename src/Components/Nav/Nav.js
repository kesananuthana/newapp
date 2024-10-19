import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
export default function Nav(){
    return(
        <div>
            <nav className="navbar">
                <div className="logo">Lytis</div>
                <ul>
                    <li>
                    <Link to="/">Home</Link>
                    </li>
                    <li>
                    <Link to="/About">About</Link>
                    </li>
                    <li>
                    <Link to="/Services">Services</Link>
                    </li>
                    <li>
                    <Link to="/Contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
