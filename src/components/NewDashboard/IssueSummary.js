import React from "react";
import { useState, useEffect } from "react";
import "./Dashboard.css";
import { PieChart } from "react-minimal-pie-chart";
import DashBoardService from "../../Services/DashBoardService";

const IssueSummary = () => {
  const [loading, setLoading] = useState(false);
  const [issueCount, setIssueCount] = useState([0]);
  const [completedIssueCount, setCompletedIssueCount] = useState([0]);
  const [inProgressIssueCount, setInProgressIssueCount] = useState([0]);
  const [todoIssueCount, setTodoIssueCount] = useState([0]);

  const todoPercentage = (todoIssueCount/issueCount) * 100;
  const inProgressPercentage = inProgressIssueCount/issueCount * 100;
  const completedPercentage = completedIssueCount/issueCount * 100;
  


  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await DashBoardService.getIssueCount();
        const responseTodo= await DashBoardService.getIssueTodoCount();
        const responseCompleted = await DashBoardService.getIssueCompletedCount();
        const responseInProgress= await DashBoardService.getIssueInProgressCount();
        setTodoIssueCount(responseTodo.data);
        setInProgressIssueCount(responseInProgress.data);
        setCompletedIssueCount(responseCompleted.data);
        setIssueCount(response.data);

      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);



  return (
    <>
      <div>issue Summary</div>
      <div className="row card-main">
        <div className="col">
          <div className="issue-cards bg-[#003f5c]">
            <p>Total Issues</p>
            <i><p className="text-2xl">{issueCount}</p></i>
          </div>
          <div className="issue-cards bg-[#58508d]">
            <p>completed Issues</p>
            <i><p className="text-2xl">{completedIssueCount}</p></i>
          </div>
          <div className="issue-cards bg-[#bc5090]">
            <p>in progress Issues</p>
            <i><p className="text-2xl">{inProgressIssueCount}</p></i>
          </div>
          <div className="issue-cards bg-[#ff6361]">
            <p className="">To do Issues</p>
            <i><p className="text-2xl">{todoIssueCount}</p></i>
            
          </div>
        </div>

        <div className="col progress-cards">
          <PieChart
            className="pie-chart "
            data={[
              { title: "completed ", value: completedPercentage , color: "#58508d" },
              { title: "on progress", value: inProgressPercentage, color: "#bc5090" },
              { title: "To do", value: todoPercentage, color: "#ff6361" },
            ]}
          />
        </div>
      </div>
    </>
  );
};

export default IssueSummary;
