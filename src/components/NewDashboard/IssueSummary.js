import React from "react";
import "./Dashboard.css";
import { PieChart } from "react-minimal-pie-chart";

const IssueSummary = () => {
  const percentage = 66;

  return (
    <>
      <div>issue Summary</div>
      <div className="row card-main">
        <div className="col">
          <div className="issue-cards bg-[#003f5c]">
            <p>Total Issues</p>
            <i><p className="text-2xl">500</p></i>
          </div>
          <div className="issue-cards bg-[#58508d]">
            <p>completed Issues</p>
            <i><p className="text-2xl">100</p></i>
          </div>
          <div className="issue-cards bg-[#bc5090]">
            <p>on progress Issues</p>
            <i><p className="text-2xl">200</p></i>
          </div>
          <div className="issue-cards bg-[#ff6361]">
            <p className="">To do Issues</p>
            <i><p className="text-2xl">200</p></i>
            
          </div>
        </div>

        <div className="col progress-cards">
          <PieChart
            className="pie-chart "
            data={[
              { label: "Total", title: "Total ", value: 50, color: "#003f5c" },
              { title: "completed ", value: 10, color: "#58508d" },
              { title: "on progress", value: 20, color: "#bc5090" },
              { title: "To do", value: 30, color: "#ff6361" },

            ]}
          />
        </div>
      </div>
    </>
  );
};

export default IssueSummary;
