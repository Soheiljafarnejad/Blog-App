import { useState } from "react";
import { sendCommentApi } from "services/apis/Post";

const SendComment = ({ id }) => {
  const [value, setVale] = useState({ comment: "" });

  const submitHandler = () => {
    sendCommentApi({ ...value, postId: id })
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  };

  return (
    <div className="bg-white flex-start flex-col items-start gap-4 p-4">
      <p className="mb-4">ارسال دیدگاه جدید</p>
      <textarea value={value.comment} name="comment" className="w-[300px] border" onChange={(e) => setVale({ ...value, [e.target.name]: e.target.value })} />
      <button className="!bg-blue-500 text-white py-2 px-6 rounded-lg" onClick={submitHandler}>
        ارسال نظر
      </button>
    </div>
  );
};

export default SendComment;
