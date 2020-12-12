import React from "react";

const Review = ({
  image,
  name,
  title,
  quote,
  showNextReview,
  showPreviousReview,
  left,
  right,
}) => {
  return (
    <div>
      <img src={image} />
      <h3>{name}</h3>
      <h4>{title}</h4>
      <div>
        {left && (
          <button className={"button1"} onClick={showPreviousReview}>
            {"<"}
          </button>
        )}
        {right && (
          <button className={"button2"} onClick={showNextReview}>
            {">"}
          </button>
        )}
      </div>
      <div>
        <p className={"button1"}>{quote}</p>
        <h1>"</h1>
      </div>
    </div>
  );
};
export default Review;
