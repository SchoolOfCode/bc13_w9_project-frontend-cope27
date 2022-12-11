import { useState } from "react";

function Comments({ toggle }) {
  // state for comments= array
  //map into comments container comments relevant to post from database

  //comment structure
  // username & comment
  const initialCommentContent = [
    { commentId: 1, userName: "FentonCodes", comment: "Absloute slander" },
    { commentId: 2, userName: "CregCodes", comment: "Absloute(ly) lost" },
    { commentId: 3, userName: "ColinCodes", comment: "Love Auth0" },
  ];

  const [commentObject, setCommentObject] = useState({
    userName: "anon",
    comment: "",
  });
  const [commentContent, setCommentContent] = useState(initialCommentContent);

  function handleChange(e) {
    setCommentObject({ ...commentObject, comment: e.target.value });
  }

  return (
    <div className="popup-inner">
      <div className="comment">
        <h1 className="post-render">POST</h1>
        <div className="comment-feed">
          {commentContent.map((comment) => {
            return (
              <div>
                <p>{comment.userName}</p> <p> {comment.comment}</p>
              </div>
            );
          })}
        </div>
        <textarea
          onChange={handleChange}
          className="text-area"
          rows="4"
          columns="80"
        ></textarea>
        <button
          className="submit-button"
          onClick={() => {
            setCommentContent([...commentContent, commentObject]);
          }}
        >
          submit
        </button>
        <button
          className="cancel-button"
          onClick={() => {
            toggle(false);
          }}
        >
          cancel
        </button>
      </div>
    </div>
  );
}

export default Comments;
