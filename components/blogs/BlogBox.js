import { BookmarkIcon, HeartIcon } from "@heroicons/react/outline";
import Image from "next/image";

const BlogBox = ({ posts }) => {
  return (
    <>
      {posts.map((item) => {
        return (
          <div key={item.id} className={`bg-white p-4 rounded-md shadow max-w-xs col-span-2`}>
            <Image
              src="/public/assets/images/next.png"
              alt="Landscape picture"
              width={500}
              height={500}
            />
            <div>
              <h2 className="text-xl font-bold mb-2">{item.title}</h2>
              <p className="mb-2">{item.text}</p>
              <div className="flex-start gap-2">
                <HeartIcon className="w-6 h-6 stroke-red-600" />
                <BookmarkIcon className="w-6 h-6 stroke-blue-600" />
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default BlogBox;
