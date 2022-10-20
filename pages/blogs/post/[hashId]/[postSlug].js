import Post from "@/components/blogs/post/Post";
import ReplyComment from "@/components/blogs/post/ReplyComment";
import SendComment from "@/components/blogs/post/SendComment";
import SingleComment from "@/components/blogs/post/SingleComment";
import React from "react";
import { getPostByCategoryApi } from "services/apis/Post";

const PostSlug = ({ post }) => {
  console.log(post.comments);

  return (
    <div className="bg-gray-200 min-h-screen p-4">
      <Post posts={[post]} className="max-w-3xl mx-auto" />
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-3 mt-6 text-4xl">نظرات</h2>
        {post.comments.map((item) => {
          return (
            item.status === 2 &&
            !item.responseTo && (
              <React.Fragment key={item._id}>
                <SingleComment comment={item} />
                <ReplyComment comments={post.comments} parentId={item._id} />
              </React.Fragment>
            )
          );
        })}
        <SendComment id={post._id} />
      </div>
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
