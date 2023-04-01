import React from "react";
import CustomerReview from "../CustomerReview/CustomerReview";
import Updates from "../Updates/Updates";
import "./RightSide.css";

const RightSide = () => {
  return (
    <div className="RightSide">
      <div className="Update">
        <h3>Updates</h3>
        <Updates />
      </div>
      <div className="Review">
        <h3>Issue Review</h3>
        <CustomerReview />
      </div>
    </div>
  );
};

export default RightSide;
