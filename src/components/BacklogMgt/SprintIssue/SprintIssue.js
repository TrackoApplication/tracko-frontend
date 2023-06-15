import React, { useState } from "react";
import IssueDeleteConfirmation from "../SprintIssue/IssueDeleteConfirmation";

const SprintIssue = ({ SprintIssue, deleteSprintIssue, key }) => {
  const [showConfirm, setShowConfirm] = useState(false);
  const [show, setShow] = useState(false);

  return (
    <>
      <tr>
        <td>{SprintIssue.sprintIssueId}</td>
        <td>{SprintIssue.summary}</td>
        <td>{SprintIssue.epicName}</td>
        <td>
          <select
            name="question"
            id="question"
            style={{ color: "black", fontSize: "10px" }}
          >
            <option value="ip" style={{ color: "blue" }}>
              IN-PROGRESS
            </option>
            <option value="td" style={{ color: "grey" }}>
              TODO
            </option>
            <option value="done" style={{ color: "green" }}>
              DONE
            </option>
          </select>
        </td>
        <td>{SprintIssue.assignee}</td>
        <td>
          {/* redirecting to the Issue deletion confirmation */}
          <i
            class="bi bi-trash-fill"
            // onClick={(e,issueId) => deleteIssue(e, Issue.issueId)}
            onClick={() => setShowConfirm(true)}
          ></i>
        </td>
      </tr>

      {/* posting a confirmation of deletion */}
      <IssueDeleteConfirmation
        show={showConfirm}
        deleteSprintIssue={deleteSprintIssue}
        onHide={() => setShowConfirm(false)}
        sprintIssueId={SprintIssue.sprintIssueId}
      />
    </>
  );
};

export default SprintIssue;