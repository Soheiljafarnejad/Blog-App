import CustomAccordion from "@/components/common/CustomAccordion";
import Link from "next/link";

const Category = ({ categories }) => {
  return (
    <div>
      <CustomAccordion header="دسته بندی بلاگ ها" name="category" className="!p-0 !shadow">
        <div className="flex-start !items-stretch flex-col gap-4">
          <Link href={`/blogs`}>
            <a>همه</a>
          </Link>
          {categories.map((item) => {
            return (
              <Link key={item._id} href={`/blogs/${item.englishTitle}`}>
                <a>{item.title}</a>
              </Link>
            );
          })}
        </div>
      </CustomAccordion>
    </div>
  );
};

export default Category;
