import React, { useState } from "react";
import AddSprintIssue from "../SprintIssue/AddSprintIssue";
import SprintDeletion from "../Sprint/DeleteSprint";
// import SprintStart from "../Sprint/StartSprint";
import "./DefaultBacklog.css";
import { MDBBadge } from "mdb-react-ui-kit";
import SprintIssueList from "../SprintIssue/SprintIssueList";

const SprintBacklogSection = ({ sprint }) => {
  const [inactive, setInactive] = useState(false);

  return (
    <div>
      <div className={`container ${inactive ? "inactive" : ""}`}>
        <h2 className="bck">
          #{sprint.sprintId} - {sprint.sprintName || "Untitled Sprint"}
        </h2>
      </div>

      {/* Sprint Backlog */}
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

        {/* <SprintStart /> */}
        {/* <UpdateSprint /> */}
        {/* <SprintDeletion /> */}
      </div>

      {/* Sprint Issue list */}
      <div className={`container ${inactive ? "inactive" : ""}`}>
        <SprintIssueList sprintId={sprint.sprintId} />
      </div>

      {/* Issue creation button */}
      {/* <AddSprintIssue /> */}
    </div>
  );
};

export default SprintBacklogSection;
