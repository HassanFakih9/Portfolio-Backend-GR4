import React, { useState } from 'react';


const EducationForm = ({ handleEducationSubmit }) => {
    const [educationData, setEducationData] = useState({
        institution: '',
        degree: '',
        graduation_date: '',
    });

    const handleSubmit = () => {
        handleEducationSubmit(educationData);
        setEducationData({
            institution: '',
            degree: '',
            graduation_date: '',
        });
    };

    return (
        <div>
            {/* Education Form */}
            <div>
                <input
                    type="text"
                    placeholder="Institution"
                    value={educationData.institution}
                    onChange={(e) =>
                        setEducationData({ ...educationData, institution: e.target.value })
                    }
                />
                <input
                    type="text"
                    placeholder="Degree"
                    value={educationData.degree}
                    onChange={(e) =>
                        setEducationData({ ...educationData, degree: e.target.value })
                    }
                />
                <input
                    type="date"
                    placeholder="Graduation Date"
                    value={educationData.graduation_date}
                    onChange={(e) =>
                        setEducationData({
                            ...educationData,
                            graduation_date: e.target.value,
                        })
                    }
                />
                <button onClick={handleSubmit}>Add Education</button>
            </div>

        </div>
    );
};

export default EducationForm;
