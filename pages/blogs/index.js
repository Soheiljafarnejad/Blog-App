import Post from "@/components/blogs/post/Post";
import Category from "@/components/blogs/blog/Category";
import Sort from "@/components/blogs/blog/Sort";
import { getAllCategoryApi } from "services/apis/Category";
import { getAllPostApi } from "services/apis/Post";

const BlogsPage = ({ posts, categories }) => {
  return (
    <div>
      <div className="grid gap-4 grid-cols-12 grid-rows-[50px_minmax(200px,_1fr)] p-4">
        <Category categories={categories} />
        <Sort />
        <Post posts={posts.docs} className="col-span-12 md:col-span-9 grid grid-cols-6 gap-8" />
      </div>
    </div>
  );
};

export default BlogsPage;

export const getServerSideProps = async ({ req }) => {
  const { data: category } = await getAllCategoryApi();
  
  let headers = undefined;
  if (req?.headers?.cookie) headers = { Cookie: req.headers?.cookie };
  const { data: dataPost } = await getAllPostApi({ page: 1, limit: 10 }, headers);

  return {
    props: {
      categories: category,
      posts: dataPost,
    },
  };
};
