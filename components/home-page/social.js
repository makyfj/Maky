import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

// components
import classes from "./social.module.scss";

const Social = () => {
  const socials = [
    {
      id: 1,
      link: "https://github.com/makyfj",
      icon: <GitHubIcon />,
    },
    {
      id: 2,
      link: "https://linkein.com/franklinjara-fj",
      icon: <LinkedInIcon />,
    },
  ];

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
