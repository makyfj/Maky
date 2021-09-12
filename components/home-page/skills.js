import Image from "next/image";

import { skills } from "../../data/skills";

const Skills = () => {
  return (
    <div>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>
            <h2>{skill.name}</h2>
            <Image src={skill.icon} width={100} height={100} alt={skill.name} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
