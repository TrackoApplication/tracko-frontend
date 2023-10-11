import React, { useState, useEffect } from "react";
import IssueDeleteConfirmation from "../SprintIssue/IssueDeleteConfirmation";
import AssigneeIcon from "../Issue/AssigneeIcon";
import IssueService from "../../../Services/IssueService";
import StatusService from "../../../Services/StateService";
import { SET_ISSUES } from "../../../reducers/issuesReducer";
import { useDispatch } from "react-redux";
import "./SprintIssue.css";

const SprintIssue = ({ SprintIssue, deleteIssue, projectName }) => {
  const [loading, setLoading] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  // const [show, setShow] = useState(false);
  const [states, setStates] = useState([]);
  const dispatch = useDispatch();

  const onStatusChange = async (e) => {
    e.preventDefault();
    const selectedStatus = e.target.value;

    try {
      const response = await IssueService.updateIssue(SprintIssue.issueId, {
        ...SprintIssue,
        status: selectedStatus,
      });

      dispatch({
        type: SET_ISSUES,
        payload: response.data,
        window: window.location.reload(),
      });
    } catch (error) {
      console.log(error);
    }
  };

  const projectPrefix = projectName.substring(0, 3);
  const modifiedIssueId = `${projectPrefix} - ${SprintIssue.issueId}`;

  // Retrieving states from the backend
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await StatusService.getStatus();
        setStates(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <>
      <tr className="sprint-issue-row">
        <td>{modifiedIssueId}</td>
        <td>{SprintIssue.summary}</td>
        <td>{SprintIssue.epicName}</td>
        <td>
          <select
            className="status-select"
            onChange={onStatusChange}
            value={SprintIssue.status}
          >
            <option value="" disabled>
              --Status--
            </option>

            {!loading && (
              <>
                {states.map((state) => (
                  <option key={state.stateId} value={state.status}>
                    {state.status}
                  </option>
                ))}
              </>
            )}
          </select>
        </td>
        <td>
          <AssigneeIcon assignee={SprintIssue.assignee} />
        </td>
        <td>
          {/* Redirecting to the Issue deletion confirmation */}
          <i
            className="bi bi-trash-fill delete-icon"
            onClick={() => setShowConfirm(true)}
          ></i>
        </td>
      </tr>

      {/* Displaying the confirmation of deletion */}
      <IssueDeleteConfirmation
        show={showConfirm}
        deleteSprintIssue={deleteIssue}
        onHide={() => setShowConfirm(false)}
        sprintIssueId={SprintIssue.issueId}
      />
    </>
  );
};

export default SprintIssue;
