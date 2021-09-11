import { useRouter } from "next/router";
import Head from "next/head";
import { parseISO, format } from "date-fns";

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
    <div>
      <Head>
        <title>{slugCase}</title>
      </Head>
      <h1>{frontMatter.title}</h1>
      <p>{frontMatter.summary}</p>
      <p>{format(parseISO(frontMatter.date), "MMMM dd, yyyy")}</p>
      <p>{frontMatter.readingTime.text}</p>
      <div>{children}</div>
    </div>
  );
};

export default PostLayout;
