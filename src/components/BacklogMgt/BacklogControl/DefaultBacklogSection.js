import React, { useState, useEffect } from "react";
import Addissue from "../Issue/Addissue";
import SprintCreation from "./CreateSprint";
import IssueList from "../Issue/IssueList";
import "./Backlog.css";
import { MDBBadge } from "mdb-react-ui-kit";
import SprintBacklogSection from "./SprintBacklogSection";
import { useSelector } from "react-redux";

const DefaultBacklogSection = () => {
  const [inactive, setInactive] = useState(true);
  const sprintState = useSelector((state) => state.sprints);
  window.sprints = sprintState;
  //Storing the sprintbacklog sections in the local storage
  // const [showSprintBacklog, setShowSprintBacklog] = useState(() => {
  //   const storedSprintBacklogs = localStorage.getItem("sprintBacklogs");
  //   if (storedSprintBacklogs) {
  //     return JSON.parse(storedSprintBacklogs);
  //   } else {
  //     return {};
  //   }
  // });

  // useEffect(() => {
  //   localStorage.setItem(
  //     "showSprintBacklog",
  //     JSON.stringify(showSprintBacklog)
  //   );
  //   debugger
  // }, [showSprintBacklog]);

  // useEffect(() => {
  //   debugger;
  //   const storedShowSprintBacklog = localStorage.getItem("showSprintBacklog");
  //   if (storedShowSprintBacklog) {
  //     setShowSprintBacklog(storedShowSprintBacklog === "true");
  //   }
  // }, []);

  return (
    <div className="BacklogMain">
      <div className={`container ${inactive ? "inactive" : ""}`}>
        {/* Add a breadcrum here */}
        <h1>Projects/Return0</h1>
      </div>

      {/* Backlog */}
      {/* sprint creation section */}
      <div className="button-container">
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
        <SprintCreation />
        <br />
      </div>

      {/* Issue list */}
      <div className={`container ${inactive ? "inactive" : ""}`}>
        <IssueList />
      </div>

      {/* Issue creation button */}
      <Addissue />

      {sprintState.sprints
        .sort((item) => item.sprintId)
        .reverse(true)
        .map((sprint) => {
          return <SprintBacklogSection sprint={sprint} />
        })}
    </div>
  );
};

export default DefaultBacklogSection;
