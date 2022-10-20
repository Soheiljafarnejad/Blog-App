import Post from "@/components/blogs/post/Post";
import SendComment from "@/components/blogs/post/SendComment";
import { getPostByCategoryApi } from "services/apis/Post";

const PostSlug = ({ post }) => {
  return (
    <div className="bg-gray-200 min-h-screen">
      <Post posts={[post]} />
      <SendComment id={post._id} />
    </div>
  );
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
