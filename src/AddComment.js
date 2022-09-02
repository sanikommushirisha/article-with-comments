import React from "react";

export const AddComment = ({ onAdd }) => {
  const [comment, setComment] = React.useState();
  const onChange = (event) => setComment(event.target.value);
  const onSubmit = () => {
    onAdd(comment);
    setComment("");
  };
  return (
    <>
      <textarea value={comment} onChange={onChange} />
      <button onClick={onSubmit}>Submit</button>
    </>
  );
};
