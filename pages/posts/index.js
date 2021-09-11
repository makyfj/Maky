import Head from "next/head";
import { getAllFilesFrontMatter } from "../../lib/mdx";
import Post from "../../components/posts/post/post";

const PostsPage = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Posts</title>
        <meta
          name="description"
          content="Software and web development tips to improve your coding skills"
        />
      </Head>
      <Post posts={posts} />
    </>
  );
};

export default PostsPage;

export async function getStaticProps() {
  // Todo Fetch blog posts
  const posts = await getAllFilesFrontMatter("posts");

  return {
    props: {
      posts,
    },
  };
}
