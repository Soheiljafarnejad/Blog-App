import CustomAccordion from "common/Accordion";
import Link from "next/link";

const Category = ({ categories }) => {
  return (
    <CustomAccordion
      header="دسته بندی بلاگ ها"
      name="category"
      className="bg-purple-200 text-purple-800 !p-0"
    >
      <div className="flex-start !items-stretch flex-col gap-4">
        <Link href={`/blogs`}>
          <a>همه</a>
        </Link>
        {categories.map((item) => {
          return (
            <Link key={item.id} href={`/blogs/${item.ename}`}>
              <a>{item.fname}</a>
            </Link>
          );
        })}
      </div>
    </CustomAccordion>
  );
};

export default Category;
