import { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import Link from "next/link";

// components
import classes from "./post.module.scss";
import Posts from "../posts";

const PostPage = ({ posts }) => {
  const [searchValue, setSearchValue] = useState("");

  const filteredPosts = posts
    .sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)))
    .filter((frontMatter) =>
      frontMatter.title.toLowerCase().includes(searchValue.toLowerCase())
    );

  return (
    <main className={classes.container}>
      <h1>Total posts: ({posts.length} posts)</h1>
      <div className={classes.search}>
        <SearchIcon fontSize="large" />
        <input
          type="text"
          aria-label="Search by title"
          placeholder="Search by title"
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>

      <div className={classes.none}>
        {!filteredPosts.length && "No posts found :(, try it again"}
      </div>
      {filteredPosts.map((frontMatter, index) => (
        <ul key={index}>
          <li>
            <Posts {...frontMatter} />
          </li>
        </ul>
      ))}
      <Link href="/" passHref>
        <button>Home</button>
      </Link>
    </main>
  );
};

export default PostPage;
