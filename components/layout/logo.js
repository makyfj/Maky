import classes from "./logo.module.scss";
import Image from "next/image";

const Logo = () => {
  return (
    <div className={classes.logo}>
      <h1>
        <Image
          src={"/images/site/cool.svg"}
          width={40}
          height={40}
          alt="Franklin"
        />
        Franklin
      </h1>
    </div>
  );
};

export default Logo;
