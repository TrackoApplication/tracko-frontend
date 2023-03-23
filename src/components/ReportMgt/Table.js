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


  return (
    <div className="">
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
    </div>
  );
}