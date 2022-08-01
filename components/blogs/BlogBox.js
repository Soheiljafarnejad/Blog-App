import { BookmarkIcon, HeartIcon } from "@heroicons/react/outline";

const BlogBox = ({ posts }) => {
  return (
    <div className="col-span-12 md:col-span-9 grid grid-cols-6 gap-8">
      {posts.map((item) => {
        return (
          <div key={item.id} className={`bg-white p-4 rounded-xl shadow col-span-2`}>
            <div className="aspect-w-16 aspect-h-9">
              <img
                src={`/assets/images${item.images}`}
                alt="img"
                className="rounded-xl w-full h-full object-center object-cover"
              />
            </div>
            <div className="bg-gray-100 px-3 py-4 rounded-xl mt-3 shadow">
              <h2 className="text-xl font-bold my-1">{item.title}</h2>
              <p className="mb-2">{item.text}</p>
              <div className="flex-start gap-2 w-full">
                <span className="bg-red-100 rounded-lg py-1.5 px-4">
                  <HeartIcon className="w-5 h-5 stroke-red-600" />
                </span>
                <span className="bg-blue-100 rounded-lg py-1.5 px-4">
                  <BookmarkIcon className="w-5 h-5 stroke-blue-600" />
                </span>
                <p className="py-2 px-3 rounded-lg bg-blue-600 text-white mr-auto">
                  {item.slugCategory}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BlogBox;
