import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import IssueDeleteConfirmation from "./IssueDeleteConfirmation";
import IssueService from "../../../Services/IssueService";
import { SET_ISSUES, UPDATE_SPRINT_ID } from "../../../reducers/issuesReducer";

const Issue = ({ Issue, deleteIssue, key }) => {
  const [showConfirm, setShowConfirm] = useState(false);
  const [show, setShow] = useState(false);
  const sprintState = useSelector((state) => state.sprints);
  const dispatch = useDispatch();

  const onSprintChange = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    debugger;
    dispatch({
      type: UPDATE_SPRINT_ID,
      payload: {
        sprintId: Number(e.target.value),
        issueId: Issue.issueId,
      }
    })
    // IssueService.updateSprint(Issue.issueId, {...Issue, sprintId: Number(e.target.value), sprintName: e.target.value}).then((res) => {
    //   IssueService.getIssues().then((response) => {
    //     debugger;
    //     dispatch({
    //       type: SET_ISSUES,
    //       payload: response.data,
    //     });
    //   });
    // });
  };
  return (
    <>
      <tr>
        <td>{Issue.issueId}</td>
        <td>{Issue.summary}</td>
        <td>{Issue.epicName}</td>
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
        <td>{Issue.assignee}</td>
        <td>
          <select
            name="sprint"
            id="sprint"
            onChange={onSprintChange}
            style={{ color: "black", fontSize: "10px" }}
            value={Issue.sprintId}
          >
            <option value="null" style={{ color: "blue" }}>
              Select Sprint
            </option>
            {sprintState.sprints.map((item, index) => (
              <option value={item.sprintId} style={{ color: "blue" }}>
                {item.sprintName || "Untitled Sprint"}
              </option>
            ))}
          </select>
        </td>
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
        deleteIssue={deleteIssue}
        onHide={() => setShowConfirm(false)}
        issueId={Issue.issueId}
      />
    </>
  );
};

export default Issue;
