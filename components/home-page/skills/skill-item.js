import Image from "next/image";
import classes from "./skill-item.module.scss";

const SkillItem = ({ skills, title }) => {
  return (
    <ul className={classes.skill}>
      <h3>{title}</h3>
      {skills.map((skill, index) => (
        <li key={index}>
          <p>{skill.name}</p>
          {skill.icon ? (
            <Image src={skill.icon} width={50} height={50} alt={skill.name} />
          ) : null}
        </li>
      ))}
    </ul>
  );
};

export default SkillItem;
