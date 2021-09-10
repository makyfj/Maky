import { useState } from "react";
import Link from "next/link";
import ReorderIcon from "@material-ui/icons/Reorder";

// components
import Logo from "./logo";
import classes from "./navbar.module.scss";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <header className={classes.header}>
      <div className={classes.left}>
        <Link href="/">
          <a>
            <Logo />
          </a>
        </Link>
      </div>
      <div className={classes.right}>
        <nav
          className={classes.links}
          id={showLinks ? `${classes.hidden}` : ""}
        >
          <ul>
            <li>
              <Link href="/posts">Posts</Link>
            </li>
            <li>
              <Link href="/projects">Projects</Link>
            </li>
          </ul>
        </nav>
        <button
          className={classes.burger}
          onClick={() => setShowLinks(!showLinks)}
        >
          <ReorderIcon />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
