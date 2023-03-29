import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Report.css"

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
      <div className="py-4">
        <table className="table table-bordered shadow">
          <thead>
            <tr>
              <th scope="col">Date</th>
              <th scope="col">Issue</th>
              <th scope="col">Event</th>
              <th scope="col">Event Details</th>
              <th scope="col">Added</th>
              <th scope="col">Completed</th>
              <th scope="col">Remaining</th>
            </tr>
          </thead>
          <tbody>
            {get_rep.map((report) => (
              <tr>
                <td>{report.date}</td>
                <td>{report.issue}</td>
                <td>{report.event}</td>
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