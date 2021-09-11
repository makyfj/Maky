import Image from "next/image";

// components
import Social from "./social";
import classes from "./hero.module.scss";

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/avatar.jpg"
          alt="Image showing Franklin"
          width={300}
          height={300}
        />
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
