import { useState } from "react";
import Head from "next/head";
import { getAllFilesFrontMatter } from "../../lib/mdx";
import Post from "../../components/post/post";

const PostsPage = ({ posts }) => {
  const [searchValue, setSearchValue] = useState("");

  const filteredPosts = posts
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    )
    .filter((frontMatter) =>
      frontMatter.title.toLowerCase().includes(searchValue.toLowerCase())
    );
  return (
    <>
      <Head>
        <title>Posts</title>
        <meta
          name="description"
          content="Software and web development tips to improve your coding skills"
        />
      </Head>
      <div>
        <h1>Posts ({posts.length} posts)</h1>
        <input
          aria-label="Search by title"
          placeholder="Search by title"
          onChange={(e) => setSearchValue(e.target.value)}
        />
        {!filteredPosts.length && "No posts found :("}
        {filteredPosts.map((frontMatter) => (
          <Post key={frontMatter.title} {...frontMatter} />
        ))}
      </div>
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
