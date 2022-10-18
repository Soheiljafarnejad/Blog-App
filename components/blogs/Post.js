import { BookmarkIcon, HeartIcon } from "@heroicons/react/outline";
import { BookmarkIcon as BookmarkIconSolid, HeartIcon as HeartIconSolid } from "@heroicons/react/solid";
import Link from "next/link";
import { bookmarkPostApi, likePostApi } from "services/apis/Post";

const Post = ({ posts }) => {
  const likeHandler = (id) => {
    likePostApi(id)
      .then(({ data }) => {
        console.log(data);
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  };

  const bookmarkHandler = (id) => {
    bookmarkPostApi(id)
      .then(({ data }) => {
        console.log(data);
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  };

  return (
    <div className="col-span-12 md:col-span-9 grid grid-cols-6 gap-8">
      {posts.map((item) => {
        return (
          <div key={item._id} className={`bg-white p-4 rounded-xl shadow col-span-2`}>
            <div className="aspect-w-16 aspect-h-9">
              <Link href={`/blogs/post/${item.hashId}/${item.slug}`}>
                <a>
                  <img src={`/assets${item.coverImage}`} alt="img" className="rounded-xl w-full h-full object-center object-cover" />
                </a>
              </Link>
            </div>
            <div className="bg-gray-100 px-3 py-4 rounded-xl mt-3 shadow">
              <Link href={`/blogs/post/${item.hashId}/${item.slug}`}>
                <a>
                  <h2 className="text-xl font-bold my-1">{item.title}</h2>
                  <p className="mb-2">{item.text}</p>
                </a>
              </Link>
              <div className="flex-start gap-2 w-full">
                <div className="flex-start gap-1 bg-red-100 text-red-600 rounded-lg py-1.5 px-4">
                  <span onClick={() => likeHandler(item._id)}>{item.isLiked ? <HeartIconSolid className="w-5 h-5 fill-red-600" /> : <HeartIcon className="w-5 h-5 stroke-red-600" />}</span>
                  <span>{item.likesCount}</span>
                </div>
                <span onClick={() => bookmarkHandler(item._id)} className="bg-blue-100 rounded-lg py-1.5 px-4">
                  {item.isBookmarked ? <BookmarkIconSolid className="w-5 h-5 fill-blue-600" /> : <BookmarkIcon className="w-5 h-5 stroke-blue-600" />}
                </span>
                <Link href={`/blogs/${item?.category?.englishTitle}`}>
                  <a>
                    <p className="py-2 px-3 rounded-lg bg-blue-600 text-white mr-auto">{item?.category?.title}</p>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Post;
