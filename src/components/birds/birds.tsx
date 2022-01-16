import classes from "./birds.module.scss";

const Birds = () => {
  // this script is from here
  // https://codepen.io/matchboxhero/pen/RLebOY?editors=1100
  return (
    <div className={classes.container}>
      <div
        className={`${classes["bird-container"]} ${classes["bird-container--one"]}`}
      >
        <div className={`${classes.bird} ${classes["bird--one"]}`}></div>
      </div>

      <div
        className={`${classes["bird-container"]} ${classes["bird-container--two"]}`}
      >
        <div className={`${classes.bird} ${classes["bird--two"]}`}></div>
      </div>
      <div
        className={`${classes["bird-container"]} ${classes["bird-container--three"]}`}
      >
        <div className={`${classes.bird} ${classes["bird--three"]}`}></div>
      </div>
      <div
        className={`${classes["bird-container"]} ${classes["bird-container--four"]}`}
      >
        <div className={`${classes.bird} ${classes["bird--four"]}`}></div>
      </div>
    </div>
  );
};

export default Birds;
