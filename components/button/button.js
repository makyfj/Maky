import Link from "next/link";
import classes from "./button.module.scss";

const Button = ({ href, name }) => {
  return (
    <Link href={href} passHref>
      <button className={classes.button}>{name}</button>
    </Link>
  );
};

export default Button;
