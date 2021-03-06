import Image from "next/image";
import ReactPlayer from "react-player";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkIcon from "@material-ui/icons/Link";

// components
import { projects } from "@/data/projects";
import classes from "./projects.module.scss";
import Button from "../button/button";

const Projects = () => {
  return (
    <main className={classes.container}>
      <h1 className={classes.title}>My Favorite Projects</h1>
      <ul className={classes.projects}>
        {projects.map((project, index) => (
          <li key={index} className={classes.project}>
            {project.video !== "" ? (
              <div className={classes.video}>
                <ReactPlayer url={project.video} width={300} height={300} />
              </div>
            ) : (
              <div className={classes.image}>
                <Image src={project.image} alt={project.title} />
              </div>
            )}
            <h1>{project.title}</h1>
            <p className={classes.description}>
              <span>Description: </span>
              {project.description}
            </p>
            <p className={classes.skills}>
              <span>Skills: </span>
              {project.skills}
            </p>
            <ul className={classes.links}>
              <li>
                <a href={project.github}>
                  <GitHubIcon fontSize="inherit" /> GitHub
                </a>
              </li>
              <li>
                {project.liveVersion ? (
                  <a href={project.liveVersion}>
                    <LinkIcon fontSize="inherit" /> Demo
                  </a>
                ) : null}
              </li>
            </ul>
          </li>
        ))}
      </ul>

      <Button href="/" name="home" />
    </main>
  );
};

export default Projects;
