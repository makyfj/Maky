import Image from "next/image";

// components
import { projects } from "../../data/projects";
import classes from "./projects.module.scss";

const Projects = () => {
  return (
    <div className={classes.container}>
      <ul className={classes.projects}>
        {projects.map((project, index) => (
          <li key={index} className={classes.project}>
            <div className={classes.image}>
              <Image
                src={project.image}
                alt={project.title}
                height={300}
                width={300}
                layout="fixed"
              />
            </div>
            <h1>{project.title}</h1>
            <p className={classes.description}>{project.description}</p>
            <p className={classes.skills}>Skills: {project.skills}</p>
            <ul className={classes.links}>
              <li>
                <a href={project.github}>{project.gitHubIcon} GitHub</a>
              </li>
              <li>
                <a href={project.liveVersion}>{project.liveVersionIcon} Demo</a>
              </li>
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
