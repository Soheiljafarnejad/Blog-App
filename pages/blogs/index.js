import Post from "@/components/blogs/post/Post";
import Category from "@/components/blogs/blog/Category";
import Sort from "@/components/blogs/blog/Sort";
import { getAllCategoryApi } from "services/apis/Category";
import { getAllPostApi } from "services/apis/Post";
import CustomPagination from "@/components/common/CustomPagination";

const BlogsPage = ({ posts, categories }) => {
  return (
    <div>
      <div className="grid gap-4 grid-cols-12 grid-rows-[50px_minmax(200px,_1fr)] p-4">
        <div className="row-span-2 col-span-3 hidden md:block">
          <Category categories={categories} />
        </div>
        <div className="col-span-12 md:col-span-9">
          <Sort />
        </div>
        <div className="col-span-12 md:col-span-9 grid grid-cols-6 gap-8">
          <Post posts={posts.docs} />
          {posts.totalPages > 1 && (
            <div className="col-span-6">
              <CustomPagination count={posts.totalPages} page={posts.page} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogsPage;

export const getServerSideProps = async ({ req, query }) => {
  const { data: category } = await getAllCategoryApi();

  let headers = undefined;
  if (req?.headers?.cookie) headers = { Cookie: req.headers?.cookie };
  const { data: dataPost } = await getAllPostApi({ page: 1, limit: 3, ...query }, headers);

  return {
    props: {
      categories: category,
      posts: dataPost,
    },
  };
};
