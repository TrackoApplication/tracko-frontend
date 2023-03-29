import React from "react";
import { PageHeader } from "./PageHeader";
import { ProjectSummary } from "./ProjectSummary";
import IssueSummary  from "./IssueSummary";
import { TeamSummary } from "./TeamSummary";
import  RiskSummary from "./RiskSummary";
import { IssueUpdateGraph } from "./IssueUpdateGraph";

const Dashboard = () => {
  return (
    <>
      <div className=" m-4 p-4 overflow-scroll">
        <div className="row "><PageHeader/></div>
      <div className="row h-[18%]">
        <div className="p-2 bg-gray-100 rounded" ><ProjectSummary/></div>
      </div>
      <div className=" row my-2 h-[50%] ">
        <div className="col w-[30%] rounded bg-gray-100 mr-1 p-2 h-full"><IssueSummary/></div>
        <div className="col w-[30%] rounded bg-gray-100 ml-1 p-2 h-full"><TeamSummary/></div>
      </div>
      <div className="row my-2 h-[18%] ">
        <div className="p-2 bg-gray-100 rounded"><RiskSummary/></div>
      </div>
      <div>
        {/* <IssueUpdateGraph/> */}
      </div>
      </div>
    </>
  );
};
export default Dashboard;
