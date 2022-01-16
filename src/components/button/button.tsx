import Link from "next/link";
import classes from "./button.module.scss";

interface ButtonProps {
  href: string;
  name: string;
}

const Button = ({ href, name }: ButtonProps) => {
  return (
    <Link href={href} passHref>
      <button className={classes.button}>{name}</button>
    </Link>
  );
};

export default Button;
