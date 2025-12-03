import {MagnetButton} from './animations/index.js';

const ProjectCard = ({ project }) => {


  return (
    <div className="card flex flex-col w-full relative">
      <div className="img-box justify-center mb-6">
        <div className="relative w-full h-full flex items-center justify-center">
          <MagnetButton primaryColor='lemon-600' textColor='black'>view</MagnetButton>
          <img
            src={project.thumbnail}
            alt={project.title}
            className="w-full h-full object-cover"
            style={{ filter: "brightness(0.8)" }}
          />
        </div>
      </div>
      <div className="content-box">
        <h2 className="text-3xl sm:text-2xl md:text-3xl font-medium uppercase tracking-wide mb-2">
          {project?.title}
        </h2>
        <p className="text-lg uppercase font-medium tracking-wider text-gray-500">
          {project?.category}
        </p>
      </div>
    </div>
  );
};
export default ProjectCard;
