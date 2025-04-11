import { FaExternalLinkAlt } from "react-icons/fa";

import { useState, useEffect } from "react";
import axios from "axios";


function Projects(){
    const [projects, setProjects] = useState([]);

    useEffect(() => {
      const fetchProjects = async () => {
        try {
          const response = await axios.get("${process.env.https://backend-portfolio-zgb9.onrender.com}/api/projects");
          setProjects(response.data);
        } catch (error) {
          console.error("Error fetching projects", error);
        }
      };
      fetchProjects();
    }, []);
    return(
        <>
          <section >
                <div id="portfolio"  >
                    <div className="main-text" id="project">
                        <h2>Latest <span>Project</span></h2>
                        <div className="portfolio-content">
                        {projects.map((project, index) => (
                              <div key={index} className="row">
                                <img src={project.image} alt={project.title} />
                                <div className="layer">
                                <h5>{project.title}</h5>
                                <p>{project.description}</p>
                                   
                                <ul>
              <span>Live project</span>
              <a href={project.liveLink} className="pro" target="_blank" rel="noopener noreferrer">
                <FaExternalLinkAlt />
              </a>
              <span>Github link</span>
              <a href={project.githubLink} className="pro" target="_blank" rel="noopener noreferrer">
                <FaExternalLinkAlt />
              </a>
            </ul>
                                </div>
                            </div>
                              ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Projects;