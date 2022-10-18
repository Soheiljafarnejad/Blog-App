import Post from "@/components/blogs/Post";
import Category from "@/components/blogs/Category";
import Sort from "@/components/blogs/Sort";
import { getAllCategory } from "services/apis/Category";
import { getAllPost } from "services/apis/Post";

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
  const { data: category } = await getAllCategory();
  const { data: dataPost } = await getAllPost({ categorySlug: params.slug, limit: 10, page: 1 });

  return {
    props: {
      categories: category,
      posts: dataPost,
    },
  };
};
