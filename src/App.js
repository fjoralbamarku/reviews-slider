import React, { useEffect, useState } from "react";
import "./App.css";
import { data } from "./data";
import Review from "./Review";

function App() {
  const [value, setValue] = useState(0);
  const [right, setRight] = useState(true);
  const [left, setLeft] = useState(true);

  const showNextReview = () => {
    if (value !== data.length - 1) {
      setValue(value + 1);

      console.log("kjo eshte", value);
    }
  };
  const showPreviousReview = () => {
    if (value !== 0) {
      setValue(value - 1);
    }
  };
  useEffect(() => {
    const { name, title, quote, image } = data[value];
    console.log("aaaaaaaa", name, title);
    // if (value === 0) {
    //   setLeft(false);
    // } else setLeft(true);
    // if (value === data.length - 1) {
    //   setRight(false);
    // } else setRight(true);
    setTimeout(showNextReview, 4000);
  });

  return (
    <div>
      <h1 className="mesi">/Review</h1>
      <div className=" mesi center">
        <Review
          {...data[value]}
          showNextReview={showNextReview}
          showPreviousReview={showPreviousReview}
          left={!(value === 0)}
          right={!(value === data.length - 1)}
        />
      </div>
    </div>
  );
}

export default App;
