
import React, { useState } from 'react';


const ProjectForm = ({ handleProjectSubmit }) => {
    const [ProjectData, setProjectData] = useState({
        name: '',
        description: '',
        technologies_used: [],
        links: [],
    });

    const handleSubmit = () => {
        handleProjectSubmit(ProjectData);
        setProjectData({
            name: '',
            description: '',
            technologies_used: [],
            links: [],
        });
    };

    return (
        <div>
            {/* Project Form */}
            <div>
                <input
                    type="text"
                    placeholder="Enter project name"
                    value={ProjectData.name}
                    onChange={(e) =>
                        setProjectData({ ...ProjectData, name: e.target.value })
                    }
                />
                <input
                    type="text"
                    placeholder="Enter Description"
                    value={ProjectData.description}
                    onChange={(e) =>
                        setProjectData({ ...ProjectData, description: e.target.value })
                    }
                />
                <input
                    type="text"
                    placeholder="Enter technology used"
                    value={ProjectData.technologies_used}
                    onChange={(e) =>
                        setProjectData({
                            ...ProjectData,
                            technologies_used: e.target.value,
                        })
                    }
                />
                  <input
                    type="text"
                    placeholder="Enter the link"
                    value={ProjectData.links}
                    onChange={(e) =>
                        setProjectData({
                            ...ProjectData,
                            links: e.target.value,
                        })
                    }
                />
                <button onClick={handleSubmit}>Add Project</button>
            </div>

        </div>
    );
};

export default ProjectForm;
