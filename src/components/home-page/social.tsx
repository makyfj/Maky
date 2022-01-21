// components
import classes from "./social.module.scss";
import { socials } from "@/data/socials";

const Social = () => {
  return (
    <ul className={classes.social}>
      {socials.map((social) => (
        <li key={social.id}>
          {social.id == 3 ? (
            <a href={social.link} download>
              <span>{social.icon}</span>
            </a>
          ) : (
            <a href={social.link}>
              <span>{social.icon}</span>
            </a>
          )}
        </li>
      ))}
    </ul>
  );
};

export default Social;
