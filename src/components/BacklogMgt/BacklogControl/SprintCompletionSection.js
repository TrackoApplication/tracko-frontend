import React, { useState } from "react";
import AddSprintIssue from "../SprintIssue/AddSprintIssue";
import SprintCompletion from "../SprintComplete/CompleteSprint";
import "./Backlog.css";
import { MDBBadge } from "mdb-react-ui-kit";
import SprintIssueList from "../SprintIssue/SprintIssueList";

const SprintCompletionSection = () => {
  const [inactive, setInactive] = React.useState(false);

  return (
    <div className="BacklogMain">
      <div className={`container ${inactive ? "inactive" : ""}`}>
        <h1>Sprint Completion Section</h1>
      </div>

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
      <AddSprintIssue />
    </div>
  );
};

export default SprintCompletionSection;
