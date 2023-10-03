


import React, { useState } from 'react';
import axios from 'axios';


const ExperienceForm = ({ handleExperienceSubmit }) => {

    const [experienceData, setExperienceData] = useState({
        company_name: '',
        job_title: '',
        start_date: '',
        end_date: '',
        accomplishments: [],
    });

    const handleSubmit = () => {
        handleExperienceSubmit(experienceData);
        setExperienceData({
            company_name: '',
            job_title: '',
            start_date: '',
            end_date: '',
            accomplishments: [],
        });
    };

    return (

        < div >
            <input
                type="text"
                placeholder="Company Name"
                value={experienceData.company_name}
                onChange={(e) =>
                    setExperienceData({
                        ...experienceData,
                        company_name: e.target.value,
                    })
                }
            />
            <input
                type="text"
                placeholder="Job Title"
                value={experienceData.job_title}
                onChange={(e) =>
                    setExperienceData({
                        ...experienceData,
                        job_title: e.target.value,
                    })
                }
            />
            <input
                type="text"
                placeholder="Start Date"
                value={experienceData.start_date}
                onChange={(e) =>
                    setExperienceData({
                        ...experienceData,
                        start_date: e.target.value,
                    })
                }
            />
            <input
                type="text"
                placeholder="End Date"
                value={experienceData.end_date}
                onChange={(e) =>
                    setExperienceData({
                        ...experienceData,
                        end_date: e.target.value,
                    })
                }
            />
            <input
                type="text"
                placeholder="Accomplishments (comma-separated)"
                value={experienceData.accomplishments}
                onChange={(e) =>
                    setExperienceData({
                        ...experienceData,
                        accomplishments: e.target.value.split(',').map((item) => item.trim()),
                    })
                }
            />
            <button onClick={handleSubmit}>Add Experience</button>
        </div >
    );
};

export default ExperienceForm;
