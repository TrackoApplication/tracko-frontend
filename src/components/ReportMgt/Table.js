import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Report.css";
import './Table.css';

export default function Home() {
  const [get_rep, setGet_rep] = useState([]);

  useEffect(() => {
    loadGet_rep();
  }, []);

  const loadGet_rep = async () => {
    const result = await axios.get("http://localhost:8080/report/get_rep");
    setGet_rep(result.data);
  };

  // const Add_rep = async (data) => {
  //   const result = await axios.post("http://localhost:8080/report/add_rep", data);
  //   setGet_rep(...get_rep, result.data);
  // };

  return (
    <div className="cont">
      <div className="p-4">
        <table className="report-table table-bordered shadow">
          <thead>
            <tr className="report-tr">
              <th scope="col">Date</th>
              <th scope="col">Issue</th>
              <th scope="col">Status</th>
              <th scope="col">Added Storypoints</th>
              <th scope="col">Complete Storypoints</th>
              <th scope="col">Remaining Storypoints</th>
            </tr>
          </thead>
          <tbody>
            {get_rep.map((report) => (
              <tr className="report-tr">
                <td>{report.date}</td>
                <td>{report.issue}</td>
                <td>{report.eventDetails}</td>
                <td>{report.addedStoryPoints}</td>
                <td>{report.completedStoryPoints}</td>
                <td>{report.remainingStoryPoints}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* <button onClick={() => Add_rep({
        "date":"2024/06/08",
        "issue":"Bug",
        "event":"Sprint End",
        "eventDetails":"Not Completed",
        "addedStoryPoints":"20",
        "completedStoryPoints":"20",
        "remainingStoryPoints":"5"
      })}>
        Click Me
      </button> */}
    </div>
  );
}