// components
import { experiences } from "../../data/experiences";
import classes from "./experience.module.scss";

const Experience = () => {
  return (
    <section className={classes.experiences}>
      <h1 className={classes.title}>Experience</h1>
      <ul className={classes.experience}>
        {experiences.map((experience) => (
          <li key={`e-${experience.id}`}>
            <h2>{experience.title}</h2>
            <h3>{experience.subTitle}</h3>
            <p>Skills: {experience.skills}</p>
            <ul className={classes.bulletPoint}>
              {experience.bulletPoints.map((bullet, index) => (
                <li key={`b-${index}`}>
                  <p>{bullet}</p>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Experience;
