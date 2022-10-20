import Post from "@/components/blogs/post/Post";
import Category from "@/components/blogs/Category";
import Sort from "@/components/blogs/Sort";
import { getAllCategoryApi } from "services/apis/Category";
import { getAllPostApi } from "services/apis/Post";

const BlogsPage = ({ posts, categories }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="grid gap-4 grid-cols-12 grid-rows-[50px_minmax(200px,_1fr)] p-4">
        <Category categories={categories} />
        <Sort />
        <Post posts={posts.docs} />
      </div>
    </div>
  );
};

export default BlogsPage;

export const getServerSideProps = async (context) => {
  const { params } = context;
  const { data: category } = await getAllCategoryApi();
  const { data: dataPost } = await getAllPostApi({ categorySlug: params.slug, limit: 10, page: 1 });

  return {
    props: {
      categories: category,
      posts: dataPost,
    },
  };
};
