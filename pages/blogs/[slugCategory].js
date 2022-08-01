import BlogBox from "@/components/blogs/BlogBox";
import Category from "@/components/blogs/Category";
import Sort from "@/components/blogs/Sort";
import axios from "axios";
import CustomAccordion from "common/Accordion";
import Link from "next/link";

const SlugCategory = ({ slugCategory, categories, posts }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="grid gap-4 grid-cols-12 grid-rows-[50px_minmax(200px,_1fr)] p-4">
        <div className="row-span-2 col-span-3 hidden md:block">
          <Category categories={categories} />
        </div>
        <div className="col-span-12 md:col-span-9 bg-white rounded shadow">
          <Sort />
        </div>
        <div className="col-span-12 md:col-span-9 grid grid-cols-6 gap-4">
          <BlogBox posts={posts} />
        </div>
      </div>
    </div>
  );
};

export default SlugCategory;

export async function getServerSideProps(context) {
  const { query, params } = context;
  const { data } = await axios.get(
    `http://localhost:3001/blogs?slugCategory=${query.slugCategory}`
  );
  const { data: categories } = await axios.get("http://localhost:3001/categories");
  return {
    props: {
      posts: data,
      categories,
      slugCategory: params.slugCategory,
    },
  };
}
