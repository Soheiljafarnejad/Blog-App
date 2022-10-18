import Post from "@/components/blogs/Post";
import { BookmarkIcon, HeartIcon } from "@heroicons/react/outline";
import { BookmarkIcon as BookmarkIconSolid, HeartIcon as HeartIconSolid } from "@heroicons/react/solid";
import Link from "next/link";
import { getPostByCategoryApi } from "services/apis/Post";

const PostSlug = ({ post }) => {
  return <Post posts={[post]} />;
};

export default PostSlug;

export const getServerSideProps = async (context) => {
  const { query, params } = context;

  console.log({ query });
  console.log({ params });

  const { data } = await getPostByCategoryApi(query.postSlug);
  return {
    props: {
      post: data,
    },
  };
};
