import { useState } from "react";
import SendComment from "./SendComment";

const SingleComment = ({ comment }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="bg-white border shadow-md p-4 rounded-md pb-4 mb-4">
      <p className="mb-2">{comment.content}</p>
      <p className="cursor-pointer text-blue-500 flex-end font-bold" onClick={() => setToggle(!toggle)}>
        {toggle ? "بیخیال" : "پاسخ دادن"}
      </p>

      {toggle && <SendComment postId={comment.postId} responseTo={comment._id} />}
    </div>
  );
};

export default SingleComment;
