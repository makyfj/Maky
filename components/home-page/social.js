// components
import classes from "./social.module.scss";
import { socials } from "./socials";

const Social = () => {
  return (
    <ul className={classes.social}>
      {socials.map((social) => (
        <li key={social.id}>
          <a href={social.link}>
            <span>{social.icon}</span>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Social;
