import { BookmarkIcon, HeartIcon } from "@heroicons/react/outline";

const BlogBox = ({ className }) => {
  return (
    <div className={`bg-white p-4 rounded-md shadow max-w-xs ${className}`}>
      <div className="bg-gray-500 w-full h-48 rounded-md mb-4"></div>
      <div>
        <h2 className="text-xl font-bold mb-2">عنوان</h2>
        <p className="mb-2">توضیحات</p>
        <div className="flex-start gap-2">
          <HeartIcon className="w-6 h-6 stroke-red-600" />
          <BookmarkIcon className="w-6 h-6 stroke-blue-600" />
        </div>
      </div>
    </div>
  );
};

export default BlogBox;
