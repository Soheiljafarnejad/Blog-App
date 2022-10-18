import { BookmarkIcon, HeartIcon } from "@heroicons/react/outline";
import { BookmarkIcon as BookmarkIconSolid, HeartIcon as HeartIconSolid } from "@heroicons/react/solid";
import Link from "next/link";
import { getPostByCategory } from "services/apis/Post";

const PostSlug = ({ post }) => {
  return (
      <div className="mx-auto max-w-screen-md">
        <div className={`bg-white p-4 rounded-xl shadow col-span-2`}>
          <div className="aspect-w-16 aspect-h-9">
              <a>
                <img src={`/assets${post.coverImage}`} alt="img" className="rounded-xl w-full h-full object-center object-cover" />
              </a>
          </div>
          <div className="bg-gray-100 px-3 py-4 rounded-xl mt-3 shadow">
              <a>
                <h2 className="text-xl font-bold my-1">{post.title}</h2>
                <p className="mb-2">{post.text}</p>
              </a>
            <div className="flex-start gap-2 w-full">
              <div className="flex-start gap-1 bg-red-100 text-red-600 rounded-lg py-1.5 px-4">
                <span>{post.isLiked ? <HeartIconSolid className="w-5 h-5 fill-red-600" /> : <HeartIcon className="w-5 h-5 stroke-red-600" />}</span>
                <span>{post.likesCount}</span>
              </div>
              <span className="bg-blue-100 rounded-lg py-1.5 px-4">{post.isBookmarked ? <BookmarkIconSolid className="w-5 h-5 fill-blue-600" /> : <BookmarkIcon className="w-5 h-5 stroke-blue-600" />}</span>
              <Link href={`/blogs/${post?.category?.englishTitle}`}>
                <a>
                  <p className="py-2 px-3 rounded-lg bg-blue-600 text-white mr-auto">{post?.category?.title}</p>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
  );
};

export default PostSlug;

export const getServerSideProps = async (context) => {
  const { query, params } = context;

  console.log({ query });
  console.log({ params });

  const { data } = await getPostByCategory(query.postSlug);
  return {
    props: {
      post: data,
    },
  };
};
