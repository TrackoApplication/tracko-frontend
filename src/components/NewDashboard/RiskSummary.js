import React from "react";
import "./Dashboard.css";

const RiskSummary = () => {
  return (
    <div className="card-main flex">
      <div>
        <div className="cards-risk bg-red-600">
        <p className="text-3xl font-bold text-white">20%</p>
        </div>
        <div>
          <p>High Risk Issues</p>
        </div>
      </div>
      <div>
        <div className="cards-risk bg-orange-600">
        <p className="text-3xl font-bold text-[white]">30%</p>
        </div>
        <div>
          <p>Medium Risk Issues</p>
        </div>
      </div>
      <div>
        <div className="cards-risk bg-green-600">
        <p className="text-3xl font-bold text-[white]">50%</p>
        </div>
        <div>
          <p>Low Risk Issues</p>
        </div>
      </div>
    </div>
  );
};

export default RiskSummary;
