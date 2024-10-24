import { useEffect, useState } from "react";
import Rating from "./RatingStars";
import fakeComments from "./fake-comments";
function RatingsComments() {
  const [comments, setComments] = useState();
  useEffect(() => {
    setComments(fakeComments);
  }, []);
  const comments_elements = comments?.map((comment) => {
    return (
      <div key={comment.id}>
        <span>Unknown</span>
        <Rating rating={comment.rating} />
        <p>{comment.comment}</p>
      </div>
    );
  });

  return (
    <div className="comments-container">
      <h2>Comments & Ratings</h2>
      {comments_elements}
    </div>
  );
}

export default RatingsComments;
