import Link from "next/link";
import { parseISO, format } from "date-fns";
import Image from "next/image";

// components
import classes from "./post.module.scss";

const Posts = ({ title, date, image, summary, slug }) => {
  return (
    <div className={classes.container}>
      <Link href={`/posts/${slug}`} passHref className={classes.link}>
        <div className={classes.card}>
          <h1>{title}</h1>
          <div className={classes.contents}>
            <div className={classes.image}>
              <Image src={image} alt={title} width={400} height={300} />
            </div>

            <div className={classes.content}>
              <p className={classes.time}>
                <span>Posted on: </span>
                {format(parseISO(date), "MMMM dd, yyyy")}
              </p>
              <p className={classes.summary}>
                <span>Summary: </span>
                {summary}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Posts;
