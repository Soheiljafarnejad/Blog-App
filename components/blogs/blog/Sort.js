import { useRouter } from "next/router";
import { useState } from "react";

const Sort = () => {
  const router = useRouter();

  const sortOptions = [
    { label: "پر بازدید ترین", id: "most" },
    { label: "محبوب ترین", id: "popular" },
    { label: "جدید ترین", id: "newest" },
  ];

  const [sort, setSort] = useState(router.query?.sort || "");

  const sortHandler = (id) => {
    setSort(id);
    const push = { pathname: router.pathname, query: { ...router.query, sort: id } };
    router.push(push, undefined, { scroll: false });
  };

  return (
    <div className="col-span-12 md:col-span-9 bg-white rounded shadow">
      <ul className="flex-start gap-8 px-4 h-full">
        {sortOptions.map((item) => {
          return (
            <li
              key={item.id}
              className={`cursor-pointer ${sort === item.id ? "text-purple-600 font-bold" : ""}`}
              onClick={() => sortHandler(item.id)}
            >
              {item.label}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sort;
