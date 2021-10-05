import Image from "next/image";
import profile from "../../public/images/site/avatar.jpg";

// components
import Social from "./social";
import classes from "./hero.module.scss";

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image src={profile} alt="Image showing Franklin" />
      </div>
      <h1>Franklin Jara</h1>
      <p>
        Student @ Adelphi University pursuing a Master&apos;s Degree in Computer
        Science. I love <span>coding</span>, and I am working hard to become a
        great software engineer.
      </p>
      <Social />
    </section>
  );
};

export default Hero;
