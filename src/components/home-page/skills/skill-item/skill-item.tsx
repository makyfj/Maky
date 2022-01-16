import { Skills } from "@/data/skills";
import Image from "next/image";
import classes from "./skill-item.module.scss";

interface SkillItemProps {
  skills: Skills[];
  title: string;
}

const SkillItem = ({ skills, title }: SkillItemProps) => {
  return (
    <>
      <h3 className={classes.title}>{title}</h3>
      <ul className={classes.skills}>
        {skills.map((skill, index) => (
          <li key={index}>
            <p>{skill.name}</p>
            {skill.icon ? (
              <Image src={skill.icon} width={50} height={50} alt={skill.name} />
            ) : null}
          </li>
        ))}
      </ul>
    </>
  );
};

export default SkillItem;
