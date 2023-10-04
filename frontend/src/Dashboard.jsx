import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom'; // Import Routes

import "./App.css"


const Dashboard = () => {



    return (

            <div>


                <nav >
                    <ul>

                        <li>
                            <Link to="/Editskills">Skills</Link>
                        </li>
                        <li>
                            <Link to="/Editeducations">Educations</Link>
                        </li>
                        <li>
                            <Link to="/Editexperiences">Experiences</Link>
                        </li>
                        <li>
                            <Link to="/Editprojects">Projects</Link>
                        </li>
                    </ul>
                </nav>


            </div>


    );
}



export default Dashboard;