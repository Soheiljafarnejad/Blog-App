import CustomAccordion from "common/Accordion";
import Link from "next/link";

const BlogsPage = () => {
  return (
    <div className="grid gap-4 grid-cols-12 grid-rows-[50px_minmax(200px,_1fr)] min-h-screen">
      <div className="row-span-2 col-span-3 hidden md:block">
        <CustomAccordion
          header="دسته بندی بلاگ ها"
          name="category"
          className="bg-purple-200 text-purple-800 !p-0"
        >
          <div className="flex-start !items-stretch flex-col gap-4">
            <Link href="">
              <a>همه پست ها</a>
            </Link>
            <Link href="">
              <a>جاوااسکریپت</a>
            </Link>
            <Link href="">
              <a>ریکت</a>
            </Link>
            <Link href="">
              <a> نکست </a>
            </Link>
          </div>
        </CustomAccordion>
      </div>
      <div className="col-span-12 md:col-span-9 bg-white rounded shadow">
        <ul className="flex-start gap-8 px-4 h-full">
          <li className="cursor-pointer">جدید ترین</li>
          <li className="cursor-pointer">پربازدید ترین </li>
          <li className="cursor-pointer">محبوب ترین</li>
        </ul>
      </div>
      <div className="col-span-12 md:col-span-9 bg-red-300">blog</div>
    </div>
  );
};

export default BlogsPage;
