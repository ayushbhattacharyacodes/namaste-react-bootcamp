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
       {shimmerBox}
       {shimmerBox}
       {shimmerBox}
       {shimmerBox}
       {shimmerBox}
       {shimmerBox}
       {shimmerBox}
       {shimmerBox}
       {shimmerBox}
       {shimmerBox}
    </div>
  );
};

export default Shimmer;
