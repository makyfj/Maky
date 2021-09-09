import { useState } from "react";
import Logo from "./logo";
import Link from "next/link";
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
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <button
          className={classes.burger}
          onClick={() => setShowLinks(!showLinks)}
        >
          Boom
        </button>
      </div>
    </header>
  );
};

export default Navbar;
