import { useRouter } from "next/router";
import Head from "next/head";
import { parseISO, format } from "date-fns";

// components
import classes from "./post.module.scss";
import Button from "../components/button/button";

const PostLayout = ({ children, frontMatter }) => {
  const router = useRouter();
  const slug = router.asPath.replace("/posts/", "");
  let slugCase = slug.split("-");

  // Uppercase for the first word of each word
  slugCase = slugCase
    .map((word) => {
      return word[0].toUpperCase() + word.substring(1);
    })
    .join(" ");

  return (
    <>
      <Head>
        <title>{slugCase}</title>
      </Head>
      <main className={classes.container}>
        <article className={classes.post}>
          <h1 className={classes.title}>{frontMatter.title}</h1>
          <p className={classes.summary}>{frontMatter.summary}</p>
          <p className={classes.time}>
            <span>Posted on: </span>
            {format(parseISO(frontMatter.date), "MMMM dd, yyyy")}
          </p>
          <p className={classes.reading}>
            <span>Reading time: </span>
            {frontMatter.readingTime.text}
          </p>
          <div className={classes.content}>{children}</div>
        </article>
        <Button href="/posts" name="All Posts" />
      </main>
    </>
  );
};

export default PostLayout;
