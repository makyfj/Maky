import Button from "../button/button";
import classes from "./custom-404.module.scss";

const Custom404 = () => {
  return (
    <>
      <main className={classes.container}>
        <h1>404 - Page Not Found - Try again</h1>
        <Button href="/" name="Home" />
      </main>
    </>
  );
};

export default Custom404;
