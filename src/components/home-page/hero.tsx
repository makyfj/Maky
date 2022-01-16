import Image from "next/image";
import profile from "../../../public/images/site/profile.jpeg";

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
        Science with specialization in Software Engineering. I enjoy{" "}
        <span>coding, working out and techno</span>. Always pushing myself
        harder than yesterday to become a great software engineer and human
        being.
      </p>
      <Social />
    </section>
  );
};

export default Hero;
