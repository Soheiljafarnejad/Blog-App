import React from "react";
import SingleComment from "./SingleComment";

const ReplyComment = ({ parentId, comments }) => {
  return (
    <div className="mr-8 ">
      {comments.map((item) => {
        return (
          item.responseTo === parentId && (
            <React.Fragment key={item._id}>
              <SingleComment comment={item} />
              <ReplyComment comments={comments} parentId={item._id} />
            </React.Fragment>
          )
        );
      })}
    </div>
  );
};

export default ReplyComment;
