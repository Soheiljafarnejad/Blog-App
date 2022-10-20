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
    <div className="bg-white flex-start flex-col items-start gap-4 p-4 max-w-4xl rounded-xl mb-4">
      <p className="mb-2">ارسال دیدگاه جدید</p>
      <textarea
        value={value.comment}
        name="comment"
        className="w-full border p-1"
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
