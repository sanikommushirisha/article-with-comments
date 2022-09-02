import React from "react";
import { AddComment } from "./AddComment";

export const Article = ({ title, comments: initialComments }) => {
  const [comments, setComments] = React.useState(initialComments);
  const [showTextBox, setShowTextBox] = React.useState(false);
  const onAddComment = (text) => {
    setComments([...comments, text]);
    setShowTextBox(false);
  };
  return (
    <>
      <h4> {title}</h4>
      <button onClick={() => setShowTextBox(true)}>Add Comment</button>
      {showTextBox && (
        <div>
          <AddComment onAdd={onAddComment} />
        </div>
      )}
      <div>
        {comments.map((comment, index) => (
          <div key={index}> - {comment} </div>
        ))}
      </div>
    </>
  );
};
