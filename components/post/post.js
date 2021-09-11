import Link from "next/link";
import { parseISO, format } from "date-fns";

const Post = ({ title, date, summary, slug }) => {
  return (
    <Link href={`posts/${slug}`} passHref>
      <div>
        <h1>{title}</h1>
        <time>{format(parseISO(date), "MMMM dd, yyyy")}</time>
        <p>{summary}</p>
      </div>
    </Link>
  );
};

export default Post;
