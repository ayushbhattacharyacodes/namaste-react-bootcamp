import React from "react";
import "./Shimmer.css";

const ShimmerBox = () => {
  return <div className="restaurant-card__shimmer"></div>;
};

const Shimmer = () => {
  return (
    <div className="shimmer">
      {Array(10)
        .fill(" ")
        .map((e, idx) => (
          <ShimmerBox key={idx} />
        ))}
    </div>
  );
};

export default Shimmer;
