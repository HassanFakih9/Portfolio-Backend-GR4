import React from 'react'
import {  Link } from 'react-router-dom'; // Import Routes

const Navbar = () => {
    return (
        <div>
            <nav >
                <ul>

                    <li>
                        <Link to="/skills">Skills</Link>
                    </li>
                    <li>
                        <Link to="/educations">Educations</Link>
                    </li>
                    <li>
                        <Link to="/experiences">Experiences</Link>
                    </li>
                    <li>
                        <Link to="/projects">Projects</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;