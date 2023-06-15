import React, { useState, useEffect } from "react";
import Addissue from "../Issue/Addissue";
import SprintCreation from "./CreateSprint";
import IssueList from "../Issue/IssueList";
import "./DefaultBacklog.css";
import { MDBBadge } from "mdb-react-ui-kit";
import SprintBacklogSection from "./SprintBacklogSection";
import { useSelector } from "react-redux";

const DefaultBacklogSection = () => {
  const [inactive, setInactive] = useState(true);
  const sprintState = useSelector((state) => state.sprints);
  window.sprints = sprintState;

  return (
    <div className="BacklogMain">
      <div className={`container ${inactive ? "inactive" : ""}`}>
        {/* Add a breadcrumb here */}
        <h1>Projects/Return0</h1>
      </div>

      <div className={`container ${inactive ? "inactive" : ""}`}>
        <h2 className="bck">Backlog</h2>
      </div>

      {/* Backlog */}
      <div className="backlog-container">
        <div className="badge-container">
          <MDBBadge
            color="secondary"
            pill
            style={{ height: "20px", width: "24px", fontSize: "12px" }}
          >
            0
          </MDBBadge>
          <MDBBadge
            color="primary"
            pill
            style={{ height: "20px", width: "24px", fontSize: "12px" }}
          >
            0
          </MDBBadge>
          <MDBBadge
            color="success"
            pill
            style={{ height: "20px", width: "24px", fontSize: "12px" }}
          >
            0
          </MDBBadge>
        </div>

        <SprintCreation />
      </div>

      {/* Issue list */}
      <div className={`container ${inactive ? "inactive" : ""}`}>
        <IssueList />
      </div>

      {/* Issue creation button */}
      <Addissue />

      {/* Sprint backlog sections */}
      <div className="sprint-backlog-sections">
        {sprintState.sprints
          .sort((item) => item.sprintId)
          .reverse(true)
          .map((sprint) => {
            return <SprintBacklogSection sprint={sprint} />;
          })}
      </div>
    </div>
  );
};

export default DefaultBacklogSection;




