/* eslint-disable react/prop-types */
function StarRating({ rating }) {
  const starPercentage = (rating / 5) * 100;
  
  return (
    <span className="stars-outer">
      <span className="stars-inner" style={{ width: `${starPercentage}%` }}></span>
    </span>
  );
}

function Rating(props) {  
  return (
    <>
      <StarRating rating={props.rating} />
    </>
  );
}

export default Rating;
