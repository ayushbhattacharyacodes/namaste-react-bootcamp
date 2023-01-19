import React from "react";
import "./Shimmer.css";

const Shimmer = () => {
  let shimmerBox = (
    <div className="restaurant-card__shimmer">
      <div className="shimmer-image"></div>
    </div>
  );
  return (
    <div className="shimmer">
      {Array(10).fill(" ").map((e)=>shimmerBox)}
    </div>
  );
};

export default Shimmer;
