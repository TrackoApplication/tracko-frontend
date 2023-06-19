import React from "react";
import { useState, useEffect } from "react";
import DashBoardService from "../../Services/DashBoardService";
import "./Dashboard.css";
import { useParams } from "react-router-dom";

const RiskSummary = () => {


  const [loading, setLoading] = useState(false);
  const [issueCount, setIssueCount] = useState([0]);
  const [issueHighRiskCount, setIssueHighRiskCount] = useState([0]);
  const [issueMediumRiskCount, setIssueMediumRiskCount] = useState([0]);
  const [issueLowRiskCount, setIssueLowRiskCount] = useState([0]);

  const highriskPercentage = issueCount !== 0 ? (issueHighRiskCount / issueCount) * 100 : 0;
  const mediumriskPercentage = issueCount !== 0 ? (issueMediumRiskCount / issueCount) * 100 : 0;
  const lowriskPercentage = issueCount !== 0 ? (issueLowRiskCount / issueCount) * 100 : 0;
  
  const { id } = useParams();

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await DashBoardService.getIssueCount(accessToken,id);
        const responseHigh = await DashBoardService.getHighRiskCount(accessToken,id);
        const responseMedium = await DashBoardService.getMediumRiskCount(accessToken,id);
        const responseLow = await DashBoardService.getLowRiskCount(accessToken,id);
        setIssueCount(response.data);
        setIssueHighRiskCount(responseHigh.data);
        setIssueMediumRiskCount(responseMedium.data);
        setIssueLowRiskCount(responseLow.data);

      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div className="card-main flex">
      <div>
        <div className="cards-risk bg-red-600">
        <p className="text-3xl font-bold text-white">{highriskPercentage.toFixed(0)}%</p>
        </div>
        <div>
          <p>High Risk Issues</p>
        </div>
      </div>
      <div>
        <div className="cards-risk bg-orange-600">
        <p className="text-3xl font-bold text-[white]">{mediumriskPercentage.toFixed(0)}%</p>
        </div>
        <div>
          <p>Medium Risk Issues</p>
        </div>
      </div>
      <div>
        <div className="cards-risk bg-green-600">
        <p className="text-3xl font-bold text-[white]">{lowriskPercentage.toFixed(0)}%</p>
        </div>
        <div>
          <p>Low Risk Issues</p>
        </div>
      </div>
    </div>
  );
};

export default RiskSummary;
