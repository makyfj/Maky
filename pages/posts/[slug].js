import { MDXRemote } from "next-mdx-remote";
import { getFiles, getFileBySlug } from "../../lib/mdx";
import PostLayout from "../../layouts/post";
import MDXComponents from "../../components/mdx/mdx-components";

export default function Post({ mdxSource, frontMatter }) {
  const content = MDXRemote(mdxSource, {
    components: MDXComponents,
  });

  return <PostLayout frontMatter={frontMatter}>{content}</PostLayout>;
}

export async function getStaticPaths() {
  // finds posts in data/posts/
  const posts = await getFiles("posts");

  return {
    paths: posts.map((post) => ({
      params: {
        slug: post.replace(/\.mdx/, ""),
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = await getFileBySlug("posts", params.slug);

  return {
    props: post,
  };
}
