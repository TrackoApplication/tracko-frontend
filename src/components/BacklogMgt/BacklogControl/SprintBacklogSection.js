import React, { useState } from "react";
import AddSprintIssue from "../SprintIssue/AddSprintIssue";
import Sprintdeletion from "../Sprint/DeleteSprint";
import SprintStart from "../Sprint/StartSprint";
import "./Backlog.css";
import { MDBBadge } from "mdb-react-ui-kit";
import SprintIssueList from "../SprintIssue/SprintIssueList";

const SprintBacklogSection = () => {
  const [inactive, setInactive] = React.useState(false);

  return (
    <div>
      <div className={`container ${inactive ? "inactive" : ""}`}>
        <h1>Sprint Backlog</h1>
      </div>

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
    </div>
  );
}

export default SprintBacklogSection;
