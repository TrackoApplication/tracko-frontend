import React, { useState } from "react";
import Addissue from "../Issue/Addissue";
import SprintCreation from "../Sprint/CreateSprint";
import SprintUpdation from "../Sprint/UpdateSprint";
import Sprintdeletion from "../Sprint/DeleteSprint";
import SprintCompletion from "../SprintComplete/CompleteSprint";
import SprintStart from "../Sprint/StartSprint";
// import CompleteSprinttable from '../SprintComplete/Completesprint.table';
import IssueList from "../Issue/IssueList";
import "./Backlog.css";
import { MDBBadge } from "mdb-react-ui-kit";
import SprintIssueList from "../Sprint/SprintIssueList";

const Backlog = () => {
  const [inactive, setInactive] = React.useState(false);

  return (
    <div className="BacklogMain">
      <div className={`container ${inactive ? "inactive" : ""}`}>
        <h1>Backlog</h1>
      </div>

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
          style={{ height: "20px", width: "24px", fontSize: "12px"}}
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

      <div className={`container ${inactive ? "inactive" : ""}`}>
        <IssueList />
      </div>

      <Addissue />

      <div class="button-container">
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
        <SprintStart />
        <SprintUpdation />
        <Sprintdeletion />
      </div>

      <div className={`container ${inactive ? "inactive" : ""}`}>
        <SprintIssueList />
      </div>

      <div class="button-container">
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
        <SprintCompletion />
      </div>

      <div className={`container ${inactive ? "inactive" : ""}`}>
        <SprintIssueList />
      </div>
    </div>
  );
};

export default Backlog;
