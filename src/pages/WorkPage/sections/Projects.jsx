import React from "react";
import {projects} from '../../../constants';
import {ProjectCard} from '../../../components/index.js';

const Projects = () => {
  return (
    <section className="section-work-projects bg-white">
      <div className="page-padding">
        <div className='pb-20'>
          <div className="project-gird grid grid-cols-1 md:grid-cols-2 gap-10">
	          {projects.map((project) => (
		          <>
			          <ProjectCard key={project.id} project={project} />
		          </>
	          ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Projects;
