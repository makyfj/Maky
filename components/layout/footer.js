import EmailIcon from "@material-ui/icons/Email";

// components
import classes from "./footer.module.scss";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <ul>
        <li>
          <a href="mailto: franklinjaradev@gmail.com">
            <EmailIcon fontSize="inherit" />
            franklinjaradev@gmail.com
          </a>
        </li>
        <li>
          <a href="https://github.com/makyfj/maky">Source Code on GitHub</a>
        </li>
        <li>
          <p>Copyright &copy; Franklin Jara</p>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
