import Image from "next/image";

import classes from "./skills.module.scss";
import {
  frontEndSkills,
  backEndSkills,
  programmingSkills,
  otherSkills,
} from "../../../data/skills";
import Skill from "./skill-item/skill-item";

const Skills = () => {
  return (
    <aside className={classes.container}>
      <h1>Skills</h1>
      <div className={classes.skills}>
        <Skill skills={frontEndSkills} title="Front End" />
        <Skill skills={backEndSkills} title="Back End" />
        <Skill skills={programmingSkills} title="Programming Languages" />
        <Skill skills={otherSkills} title="Other Skills" />
      </div>
    </aside>
  );
};

export default Skills;
