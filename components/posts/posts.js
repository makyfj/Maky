import Link from "next/link";
import { parseISO, format } from "date-fns";

// components
import classes from "./post.module.scss";

const Posts = ({ title, date, summary, slug }) => {
  return (
    <div className={classes.container}>
      <Link href={`/posts/${slug}`} passHref className={classes.link}>
        <div className={classes.card}>
          <h1>{title}</h1>
          <time>Posted on: {format(parseISO(date), "MMMM dd, yyyy")}</time>
          <p>{summary}</p>
        </div>
      </Link>
    </div>
  );
};

export default Posts;
