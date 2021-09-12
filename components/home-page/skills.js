import Image from "next/image";

import classes from "./skills.module.scss";
import {
  frontEndSkills,
  backEndSkills,
  programmingSkills,
  otherSkills,
} from "../../data/skills";

const Skills = () => {
  return (
    <aside className={classes.container}>
      <h1>Skills</h1>
      <div className={classes.skills}>
        <ul className={classes.front}>
          <h3>Front End</h3>
          {frontEndSkills.map((skill, index) => (
            <li key={index}>
              <h4>{skill.name}</h4>
              <Image src={skill.icon} width={50} height={50} alt={skill.name} />
            </li>
          ))}
        </ul>
        <ul className={classes.back}>
          <h3>Back End</h3>
          {backEndSkills.map((skill, index) => (
            <li key={index}>
              <h4>{skill.name}</h4>
              <Image src={skill.icon} width={50} height={50} alt={skill.name} />
            </li>
          ))}
        </ul>

        <ul className={classes.programming}>
          <h3>Programming Languages</h3>
          {programmingSkills.map((skill, index) => (
            <li key={index}>
              <h4>{skill.name}</h4>
              <Image src={skill.icon} width={50} height={50} alt={skill.name} />
            </li>
          ))}
        </ul>
        <ul className={classes.other}>
          <h3>OtherSkills</h3>
          {otherSkills.map((skill, index) => (
            <li key={index}>
              <h4>{skill.name}</h4>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Skills;
