import { useRouter } from "next/router";
import { useState } from "react";
import toast from "react-hot-toast";
import { sendCommentApi } from "services/apis/Post";

const SendComment = ({ postId, responseTo, setToggle }) => {
  const [value, setVale] = useState({ content: "" });
  const router = useRouter();

  const submitHandler = () => {
    sendCommentApi({ ...value, postId, responseTo })
      .then((res) => {
        toast.success(res.message);
        router.push({ pathname: router.pathname, query: router.query });
        SendComment({ content: "" });
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
  };

  return (
    <div className="bg-white flex-start flex-col items-start gap-4 p-4 max-w-4xl rounded-xl mb-4">
      <p className="mb-2">ارسال دیدگاه جدید</p>
      <textarea
        value={value.content}
        name="content"
        className="w-full border p-2"
        rows={4}
        onChange={(e) => setVale({ ...value, [e.target.name]: e.target.value })}
      />
      <button className="!bg-blue-500 text-white py-2 px-6 rounded-lg" onClick={submitHandler}>
        ارسال نظر
      </button>
    </div>
  );
};

export default SendComment;
