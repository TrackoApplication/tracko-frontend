import React, { useState, useEffect } from "react";
import IssueDeleteConfirmation from "../SprintIssue/IssueDeleteConfirmation";
import AssigneeIcon from "../Issue/AssigneeIcon";
import IssueService from "../../../Services/IssueService";
import StatusService from "../../../Services/StateService";
import { SET_ISSUES } from "../../../reducers/issuesReducer";
import { useDispatch } from "react-redux";

const SprintIssue = ({ SprintIssue, deleteSprintIssue, key }) => {
  const [loading, setloading] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [show, setShow] = useState(false);
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

  //Retrieving states from the backend
  useEffect(() => {
    const fetchData = async () => {
      setloading(true);
      try {
        const response = await StatusService.getStatus();
        setStates(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
      setloading(false);
    };
    fetchData();
  }, []);

  return (
    <>
      <tr>
        <td>{SprintIssue.issueId}</td>
        <td>{SprintIssue.summary}</td>
        <td>{SprintIssue.epicName}</td>
        <td>
          <select
            name="status"
            id="status"
            onChange={onStatusChange}
            value={SprintIssue.status}
          >
            <option value="" defaultValue={"--Status--"} disabled>
              --Status--
            </option>

            {!loading && (
              <>
                {states.map((state) => (
                  <option key={state.stateId} value={state.staus}>
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
