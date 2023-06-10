import React, { useState } from "react";
import Addissue from "../Issue/Addissue";
import AddSprintIssue from "../SprintIssue/AddSprintIssue";
import SprintCreation from "../Sprint/CreateSprint";
import Sprintdeletion from "../Sprint/DeleteSprint";
import SprintCompletion from "../SprintComplete/CompleteSprint";
import SprintStart from "../Sprint/StartSprint";
import IssueList from "../Issue/IssueList";
import "./Backlog.css";
import { MDBBadge } from "mdb-react-ui-kit";
import SprintIssueList from "../SprintIssue/SprintIssueList";
// import UpdateSprint from "../Sprint/UpdateSprint";

const Backlog = () => {
  const [inactive, setInactive] = React.useState(false);

  return (
    <div className="BacklogMain">
      <div className={`container ${inactive ? "inactive" : ""}`}>
        <h1>Backlog</h1>
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

      {/* Sprint Backlog */}
      {/* Sprint start,update,delete section */}
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
        {/* <UpdateSprint /> */}
        <Sprintdeletion />
      </div>

      {/* Sprint Issue list */}
      <div className={`container ${inactive ? "inactive" : ""}`}>
        <SprintIssueList />
      </div>

      {/* Issue creation button */}
      <AddSprintIssue />

      {/* Sprint completion section */}
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
        {/* sprint completion button */}
        <SprintCompletion />
      </div>

      {/* Sprint Issue list */}
      <div className={`container ${inactive ? "inactive" : ""}`}>
        <SprintIssueList />
      </div>

      {/* Issue creation button */}
      <AddSprintIssue/>
    </div>
  );
};

export default Backlog;
