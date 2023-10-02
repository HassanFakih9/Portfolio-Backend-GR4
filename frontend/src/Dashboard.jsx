import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom'; // Import Routes

import "./App.css"


const Dashboard = () => {
    


    return (
        
            <div>
           
            
                <nav >
                    <ul>
                        
                        <li>
                            
                            <Link to="/experiences">Experiences</Link>
                        </li>
                        <li>                
                            <Link to="/projects">Projects</Link>
                        </li>
                        <li>
                            <Link to="/skills">Skills</Link>
                        </li>
                        <li>
                            <Link to="/projects">Projects</Link>
                        </li>
                    </ul>
                </nav>

              
            </div>
    )};

export default Dashboard;