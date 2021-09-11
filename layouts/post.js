import { useRouter } from "next/router";
import Head from "next/head";
import { parseISO, format } from "date-fns";

const PostLayout = ({ children, frontMatter }) => {
  console.log(frontMatter);
  console.log(children);

  const router = useRouter();
  const slug = router.asPath.replace("/posts/", "");
  return (
    <div>
      <Head>
        <title>{slug} - Franklin Jara</title>
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
